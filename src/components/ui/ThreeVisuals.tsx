"use client";

import { useRef, useMemo, useState, useEffect } from "react";
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
      // eslint-disable-next-line react-hooks/purity
      const y = (Math.random() - 0.5) * 0.3;
      // eslint-disable-next-line react-hooks/purity
      const z = (Math.random() - 0.5) * gridSize;
      // eslint-disable-next-line react-hooks/purity
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
        color="#c8b8a0"
        size={0.008}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.35}
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
      <meshStandardMaterial color="#a89070" wireframe transparent opacity={0.6} />
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
      <meshStandardMaterial color="#8b7355" wireframe transparent opacity={0.5} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.2} color="#c8b8a0" />
      <FloatingGrid />
      <FloatingTorus />
      <FloatingSphere />
    </>
  );
}

// Check if WebGL is available
function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function ThreeVisuals() {
  const [webglFailed, setWebglFailed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    if (!isWebGLAvailable()) {
      setWebglFailed(true);
    }
  }, []);

  // Show fallback gradient if WebGL is not available or fails
  if (webglFailed || !isMounted) {
    return (
      <div 
        className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(200, 184, 160, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(168, 144, 112, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(139, 115, 85, 0.04) 0%, transparent 70%)
          `,
        }}
      />
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-60">
      <Canvas 
        camera={{ position: [0, 0, 3], fov: 60 }}
        onError={() => setWebglFailed(true)}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
