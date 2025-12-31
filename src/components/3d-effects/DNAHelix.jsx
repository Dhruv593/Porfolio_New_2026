// src/components/DNAHelix.jsx
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function DNAHelix() {
  const groupRef = useRef();
  
  const helixData = useMemo(() => {
    const points1 = [];
    const points2 = [];
    const connections = [];
    const spheres = [];
    const steps = 100;
    const radius = 1.5;
    const height = 8;
    
    for (let i = 0; i < steps; i++) {
      const t = (i / steps) * Math.PI * 4;
      const y = (i / steps) * height - height / 2;
      
      const x1 = Math.cos(t) * radius;
      const z1 = Math.sin(t) * radius;
      const x2 = Math.cos(t + Math.PI) * radius;
      const z2 = Math.sin(t + Math.PI) * radius;
      
      points1.push(new THREE.Vector3(x1, y, z1));
      points2.push(new THREE.Vector3(x2, y, z2));
      
      if (i % 5 === 0) {
        connections.push({ start: [x1, y, z1], end: [x2, y, z2] });
        spheres.push([x1, y, z1]);
        spheres.push([x2, y, z2]);
      }
    }
    
    return { points1, points2, connections, spheres };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -3]}>
      {/* Helix strands */}
      <Line points={helixData.points1} color="#06b6d4" lineWidth={2} transparent opacity={0.7} />
      <Line points={helixData.points2} color="#f472b6" lineWidth={2} transparent opacity={0.7} />
      
      {/* Connections */}
      {helixData.connections.map((conn, i) => (
        <Line 
          key={i}
          points={[conn.start, conn.end]}
          color="#a78bfa"
          lineWidth={1}
          transparent
          opacity={0.4}
        />
      ))}
      
      {/* Glowing spheres */}
      {helixData.spheres.map((pos, i) => (
        <Sphere key={i} args={[0.1, 16, 16]} position={pos}>
          <meshBasicMaterial 
            color={i % 2 === 0 ? "#06b6d4" : "#f472b6"}
            transparent
            opacity={0.8}
          />
        </Sphere>
      ))}
    </group>
  );
}

export default DNAHelix;
