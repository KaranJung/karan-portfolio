"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingGrid() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 800;
    const pos = new Float32Array(count * 3);
    const gridSize = 8;
    const spacing = gridSize / Math.sqrt(count);
    let i = 0;
    for (let x = -gridSize / 2; i < count; x += spacing) {
      const y = (Math.random() - 0.5) * 0.3;
      const z = (Math.random() - 0.5) * gridSize;
      pos[i * 3] = x + (Math.random() - 0.5) * spacing * 0.5;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      i++;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.015;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#444444"
        size={0.008}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
}

function FloatingTorus() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <mesh ref={ref} position={[1.5, 0, -2]}>
      <torusGeometry args={[0.8, 0.02, 16, 100]} />
      <meshStandardMaterial color="#333333" wireframe />
    </mesh>
  );
}

function FloatingSphere() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
      ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.25) * 0.15;
    }
  });

  return (
    <mesh ref={ref} position={[-1.8, 0.3, -1.5]}>
      <icosahedronGeometry args={[0.5, 1]} />
      <meshStandardMaterial color="#222222" wireframe />
    </mesh>
  );
}

export default function ThreeVisuals() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.2} color="#ffffff" />
        <FloatingGrid />
        <FloatingTorus />
        <FloatingSphere />
      </Canvas>
    </div>
  );
}
