// src/components/3d-effects/ParticleBackground.jsx
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function ParticleField({ color, speed, offset }) {
  const ref = useRef();
  
  const sphere = useMemo(() => {
    const positions = new Float32Array(10*3); // ✅ Reduced from 3500
    for (let i = 0; i < 1500; i++) {
      const radius = 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / (20 * speed);
      ref.current.rotation.y -= delta / (30 * speed);
    }
  });

  return (
    <group rotation={[offset, offset * 0.5, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={0.7}           // ✅ Bigger particles (was 0.06)
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </group>
  );
}

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Light gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)'
        }}
      />
      
      {/* Canvas with particle layers */}
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ position: 'absolute', inset: 0 }}
      >
        {/* Cyan particles */}
        <ParticleField color="#06b6d4" speed={1} offset={0} />
        
        {/* Purple particles - slower */}
        <ParticleField color="#8b5cf6" speed={1.3} offset={1} />
        
        {/* Pink particles - even slower */}
        <ParticleField color="#ec4899" speed={0.7} offset={2} />
      </Canvas>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div 
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: 'radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
    </div>
  );
};

export default ParticleBackground;
