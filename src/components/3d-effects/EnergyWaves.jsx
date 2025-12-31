// src/components/EnergyWaves.jsx
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function EnergyWaves() {
  const meshRef = useRef();
  
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(15, 15, 100, 100);
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const positions = meshRef.current.geometry.attributes.position.array;
    const time = state.clock.elapsedTime;
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      
      const wave1 = Math.sin(x * 0.5 + time) * 0.3;
      const wave2 = Math.sin(y * 0.5 + time * 1.2) * 0.3;
      const wave3 = Math.sin((x + y) * 0.3 + time * 0.7) * 0.2;
      
      positions[i + 2] = wave1 + wave2 + wave3;
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -3, -2]}>
      <meshBasicMaterial
        color="#06b6d4"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

export default EnergyWaves;
