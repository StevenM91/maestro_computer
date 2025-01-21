import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const Planet = () => {
  const pointsRef = useRef();

  // Génération des particules
  const particles = useMemo(() => {
    const particles = new Float32Array(5000 * 3); // 5,000 points (x, y, z)
    for (let i = 0; i < particles.length; i += 3) {
      const r = Math.random() * 1 + 0.5; // Rayon réduit (entre 0.5 et 1.5)
      const theta = Math.random() * Math.PI * 2; // Angle aléatoire
      const phi = Math.acos(Math.random() * 2 - 1); // Inclinaison aléatoire

      particles[i] = r * Math.sin(phi) * Math.cos(theta); // x
      particles[i + 1] = r * Math.sin(phi) * Math.sin(theta); // y
      particles[i + 2] = r * Math.cos(phi); // z
    }
    return particles;
  }, []);

  // Animation de rotation
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002; // Rotation autour de l'axe Y
      pointsRef.current.rotation.x += 0.001; // Rotation autour de l'axe X
    }
  });

  return (
    <group>
      <Points ref={pointsRef} positions={particles} stride={3}>
        <PointMaterial
          transparent
          color="#a0c4ff"
          size={0.03} // Taille réduite des particules
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Canvas pour afficher la planète
const PlanetScene = () => {
  return (
    <Canvas
      camera={{ position: [3, 2, 3], fov: 50 }} // Caméra rapprochée
      style={{ width: "600px", height: "600px", background: "transparent" }} // Réduction de la taille
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Planet />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default PlanetScene;
