import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Brain() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const { x, y } = state.pointer;
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, x * 0.6, 0.05);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -y * 0.4, 0.05);
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1.35, 48, 48]}>
        <MeshDistortMaterial
          color="#4f8bff"
          emissive="#3b6bff"
          emissiveIntensity={0.35}
          distort={0.45}
          speed={2.2}
          roughness={0.15}
          metalness={0.85}
        />
      </Sphere>
    </Float>
  );
}

function Ring({
  tilt = 0,
  color = "#22d3ee",
  radius = 2,
}: {
  tilt?: number;
  color?: string;
  radius?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * 0.15;
  });
  return (
    <Torus ref={ref} args={[radius, 0.012, 16, 200]} rotation={[Math.PI / 2 + tilt, tilt, 0]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.2}
        toneMapped={false}
      />
    </Torus>
  );
}

function Nodes() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.1;
  });
  const nodes = Array.from({ length: 14 });
  return (
    <group ref={group}>
      {nodes.map((_, i) => {
        const a = (i / nodes.length) * Math.PI * 2;
        const r = 2.4 + Math.sin(i * 1.3) * 0.3;
        const x = Math.cos(a) * r;
        const z = Math.sin(a) * r;
        const y = Math.sin(i * 2.1) * 0.6;
        return (
          <Float key={i} speed={2} floatIntensity={0.6} rotationIntensity={0.4}>
            <Icosahedron args={[0.08, 0]} position={[x, y, z]}>
              <meshStandardMaterial
                color={i % 2 ? "#a855f7" : "#22d3ee"}
                emissive={i % 2 ? "#a855f7" : "#22d3ee"}
                emissiveIntensity={1.5}
                toneMapped={false}
              />
            </Icosahedron>
          </Float>
        );
      })}
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={2.5} color="#60a5fa" />
        <pointLight position={[-5, -3, -3]} intensity={2} color="#a855f7" />
        <pointLight position={[0, 0, 5]} intensity={1} color="#22d3ee" />
        <Brain />
        <Ring tilt={0} color="#22d3ee" radius={2} />
        <Ring tilt={Math.PI / 3} color="#a855f7" radius={2.3} />
        <Ring tilt={-Math.PI / 4} color="#60a5fa" radius={2.6} />
        <Nodes />
      </Suspense>
    </Canvas>
  );
}

export default HeroScene;
