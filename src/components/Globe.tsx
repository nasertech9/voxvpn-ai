import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    const size = containerRef.current.clientWidth;
    renderer.setSize(size, size);
    containerRef.current.appendChild(renderer.domElement);

    // Create Globe
    const geometry = new THREE.SphereGeometry(5, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Inner Glow
    const innerGeo = new THREE.SphereGeometry(4.8, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.1,
    });
    const innerGlobe = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerGlobe);

    // Lights
    const light = new THREE.PointLight(0x00d4ff, 2, 100);
    light.position.set(10, 10, 10);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 12;

    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.005;
      globe.rotation.x += 0.002;
      innerGlobe.rotation.y -= 0.003;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full aspect-square max-w-[400px] mx-auto opacity-80" />
  );
}
