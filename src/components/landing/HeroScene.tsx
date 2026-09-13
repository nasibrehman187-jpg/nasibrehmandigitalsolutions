import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

function Brain({ reducedMotion }: { reducedMotion?: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current || reducedMotion) return;
    const { x, y } = state.pointer;
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, x * 0.5, 0.05);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -y * 0.35, 0.05);
  });
  return (
    <Float
      speed={reducedMotion ? 0 : 1.2}
      rotationIntensity={reducedMotion ? 0 : 0.3}
      floatIntensity={reducedMotion ? 0 : 1.0}
    >
      <Sphere ref={ref} args={[1.35, 28, 28]}>
        <MeshDistortMaterial
          color="#4f8bff"
          emissive="#3b6bff"
          emissiveIntensity={0.35}
          distort={reducedMotion ? 0 : 0.4}
          speed={reducedMotion ? 0 : 1.8}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function Ring({
  tilt = 0,
  color = "#22d3ee",
  radius = 2,
  reducedMotion,
}: {
  tilt?: number;
  color?: string;
  radius?: number;
  reducedMotion?: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current && !reducedMotion) ref.current.rotation.z += dt * 0.12;
  });
  return (
    <Torus ref={ref} args={[radius, 0.012, 12, 64]} rotation={[Math.PI / 2 + tilt, tilt, 0]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.2}
        toneMapped={false}
      />
    </Torus>
  );
}

function Nodes({ reducedMotion }: { reducedMotion?: boolean }) {
  const group = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (group.current && !reducedMotion) group.current.rotation.y += dt * 0.08;
  });
  const nodes = Array.from({ length: 8 });
  return (
    <group ref={group}>
      {nodes.map((_, i) => {
        const a = (i / nodes.length) * Math.PI * 2;
        const r = 2.4 + Math.sin(i * 1.3) * 0.3;
        const x = Math.cos(a) * r;
        const z = Math.sin(a) * r;
        const y = Math.sin(i * 2.1) * 0.6;
        return (
          <Float
            key={i}
            speed={reducedMotion ? 0 : 1.5}
            floatIntensity={reducedMotion ? 0 : 0.5}
            rotationIntensity={reducedMotion ? 0 : 0.3}
          >
            <Icosahedron args={[0.07, 0]} position={[x, y, z]}>
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

export function HeroScene({ inView = true }: { inView?: boolean }) {
  const reducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [tabVisible, setTabVisible] = useState(
    typeof document !== "undefined" ? document.visibilityState === "visible" : true,
  );

  useEffect(() => {
    const onVisibility = () => {
      setTabVisible(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const shouldAnimate = inView && tabVisible && !reducedMotion;

  return (
    <Canvas
      frameloop={shouldAnimate ? "always" : "never"}
      dpr={[1, 1.25]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
        depth: true,
        stencil: false,
      }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#60a5fa" />
        <pointLight position={[-5, -3, -3]} intensity={1.8} color="#a855f7" />
        <pointLight position={[0, 0, 5]} intensity={0.8} color="#22d3ee" />
        <Brain reducedMotion={reducedMotion} />
        <Ring tilt={0} color="#22d3ee" radius={2} reducedMotion={reducedMotion} />
        <Ring tilt={Math.PI / 3} color="#a855f7" radius={2.3} reducedMotion={reducedMotion} />
        <Ring tilt={-Math.PI / 4} color="#60a5fa" radius={2.6} reducedMotion={reducedMotion} />
        <Nodes reducedMotion={reducedMotion} />
      </Suspense>
    </Canvas>
  );
}

export default HeroScene;
