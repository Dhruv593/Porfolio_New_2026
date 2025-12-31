// src/components/AdvancedParticles.jsx
import React, { useRef, useMemo, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Interactive Mouse-Following Particles with Physics
function InteractiveParticles({ count = 3000 }) {
  const pointsRef = useRef();
  const mousePosition = useRef(new THREE.Vector3(0, 0, 0));
  const targetPosition = useRef(new THREE.Vector3(0, 0, 0));
  const { viewport, pointer } = useThree();
  
  const particlesData = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
      
      // Color gradient
      const hue = (i / count) * 360;
      const color = new THREE.Color(`hsl(${hue}, 70%, 60%)`);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    
    return { positions, velocities, colors };
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    
    const positions = pointsRef.current.geometry.attributes.position.array;
    const velocities = particlesData.velocities;
    
    // Smooth mouse following
    targetPosition.current.set(
      (pointer.x * viewport.width) / 2,
      (pointer.y * viewport.height) / 2,
      0
    );
    mousePosition.current.lerp(targetPosition.current, 0.1);
    
    // Physics simulation
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Mouse interaction force
      const dx = positions[i3] - mousePosition.current.x;
      const dy = positions[i3 + 1] - mousePosition.current.y;
      const dz = positions[i3 + 2] - mousePosition.current.z;
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
      
      if (distance < 2) {
        const force = (2 - distance) / 2;
        velocities[i3] += (dx / distance) * force * 0.02;
        velocities[i3 + 1] += (dy / distance) * force * 0.02;
        velocities[i3 + 2] += (dz / distance) * force * 0.02;
      }
      
      // Apply velocity
      positions[i3] += velocities[i3];
      positions[i3 + 1] += velocities[i3 + 1];
      positions[i3 + 2] += velocities[i3 + 2];
      
      // Damping
      velocities[i3] *= 0.98;
      velocities[i3 + 1] *= 0.98;
      velocities[i3 + 2] *= 0.98;
      
      // Boundary (sphere containment)
      const dist = Math.sqrt(
        positions[i3] ** 2 + positions[i3 + 1] ** 2 + positions[i3 + 2] ** 2
      );
      if (dist > 6) {
        positions[i3] *= 5.9 / dist;
        positions[i3 + 1] *= 5.9 / dist;
        positions[i3 + 2] *= 5.9 / dist;
      }
      
      // Orbital motion
      positions[i3] += Math.sin(state.clock.elapsedTime + i) * 0.001;
      positions[i3 + 1] += Math.cos(state.clock.elapsedTime + i) * 0.001;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <Points ref={pointsRef} positions={particlesData.positions} colors={particlesData.colors}>
      <PointMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default InteractiveParticles;
