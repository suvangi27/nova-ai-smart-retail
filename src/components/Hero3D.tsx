import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, ArrowRight, Compass, ShieldCheck, RefreshCw, Layers } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { FallbackHeroVisual } from './FallbackHeroVisual';

export const Hero3D: React.FC = () => {
  const { setIsQuizOpen } = useStore();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [use3DFallback, setUse3DFallback] = useState(false);
  const [isHovering3D, setIsHovering3D] = useState(false);
  const [webGLFailed, setWebGLFailed] = useState(false);

  useEffect(() => {
    if (use3DFallback) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;

    try {
      // Setup Three.js Scene
      scene = new THREE.Scene();
      
      const width = canvas.parentElement?.clientWidth || 600;
      const height = canvas.parentElement?.clientHeight || 520;

      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 0, 8.5);

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;

      // Lights
      const ambientLight = new THREE.AmbientLight(0xF7F3EB, 1.2);
      scene.add(ambientLight);

      const mainLight = new THREE.DirectionalLight(0xFFF2D6, 2.5);
      mainLight.position.set(5, 8, 5);
      scene.add(mainLight);

      const fillLight = new THREE.DirectionalLight(0xC5A46D, 1.8);
      fillLight.position.set(-6, -3, 3);
      scene.add(fillLight);

      const rimLight = new THREE.PointLight(0xDFC8A2, 3, 20);
      rimLight.position.set(0, 4, -3);
      scene.add(rimLight);

      // Gold Material
      const goldMaterial = new THREE.MeshStandardMaterial({
        color: 0xC5A46D,
        metalness: 0.85,
        roughness: 0.2,
      });

      // Dark Chocolate Material
      const chocolateMaterial = new THREE.MeshStandardMaterial({
        color: 0x4A3028,
        metalness: 0.3,
        roughness: 0.4,
      });

      // Glass Material for Perfume
      const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xFFFFFF,
        transparent: true,
        opacity: 0.75,
        roughness: 0.1,
        metalness: 0.1,
        transmission: 0.6,
        ior: 1.5,
      });

      // 1. Group: Luxury Perfume Flacon
      const perfumeGroup = new THREE.Group();
      // Glass body
      const bottleGeo = new THREE.BoxGeometry(1.2, 1.8, 0.7);
      const bottleMesh = new THREE.Mesh(bottleGeo, glassMaterial);
      perfumeGroup.add(bottleMesh);
      // Gold spray neck
      const neckGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.4, 24);
      const neckMesh = new THREE.Mesh(neckGeo, goldMaterial);
      neckMesh.position.y = 1.05;
      perfumeGroup.add(neckMesh);
      // Gold cap
      const capGeo = new THREE.BoxGeometry(0.6, 0.6, 0.6);
      const capMesh = new THREE.Mesh(capGeo, goldMaterial);
      capMesh.position.y = 1.45;
      perfumeGroup.add(capMesh);
      // Amber liquid core
      const liquidGeo = new THREE.BoxGeometry(0.95, 1.3, 0.5);
      const liquidMat = new THREE.MeshStandardMaterial({ color: 0xD4A359, roughness: 0.2 });
      const liquidMesh = new THREE.Mesh(liquidGeo, liquidMat);
      liquidMesh.position.y = -0.15;
      perfumeGroup.add(liquidMesh);

      perfumeGroup.position.set(-1.8, 0.2, 0);
      perfumeGroup.rotation.y = 0.35;
      scene.add(perfumeGroup);

      // 2. Group: Minimalist Chronometer Watch
      const watchGroup = new THREE.Group();
      // Dial Case
      const caseGeo = new THREE.CylinderGeometry(1.1, 1.1, 0.22, 48);
      const caseMesh = new THREE.Mesh(caseGeo, goldMaterial);
      caseMesh.rotation.x = Math.PI / 2;
      watchGroup.add(caseMesh);
      // Watch Face (Dark Chocolate)
      const faceGeo = new THREE.CylinderGeometry(0.98, 0.98, 0.24, 48);
      const faceMesh = new THREE.Mesh(faceGeo, chocolateMaterial);
      faceMesh.rotation.x = Math.PI / 2;
      watchGroup.add(faceMesh);
      // Leather Straps (Upper & Lower)
      const strapGeo = new THREE.BoxGeometry(0.9, 1.6, 0.12);
      const strapMesh1 = new THREE.Mesh(strapGeo, chocolateMaterial);
      strapMesh1.position.y = 1.4;
      watchGroup.add(strapMesh1);
      const strapMesh2 = new THREE.Mesh(strapGeo, chocolateMaterial);
      strapMesh2.position.y = -1.4;
      watchGroup.add(strapMesh2);

      watchGroup.position.set(1.9, 0.8, -0.5);
      watchGroup.rotation.set(-0.2, -0.4, 0.1);
      scene.add(watchGroup);

      // 3. Group: Floating Gold Geometric Crystal
      const crystalGeo = new THREE.IcosahedronGeometry(0.75, 0);
      const crystalMesh = new THREE.Mesh(crystalGeo, goldMaterial);
      crystalMesh.position.set(0.2, -1.6, 1.2);
      scene.add(crystalMesh);

      // 4. Group: Studio Over-Ear Headphone Arc
      const headphoneGroup = new THREE.Group();
      // Headband curve (torus half)
      const archGeo = new THREE.TorusGeometry(1.5, 0.1, 16, 50, Math.PI);
      const archMesh = new THREE.Mesh(archGeo, chocolateMaterial);
      archMesh.rotation.z = Math.PI;
      headphoneGroup.add(archMesh);
      // Left Earcup
      const earGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.35, 32);
      const earMat = new THREE.MeshStandardMaterial({ color: 0x4A3028, roughness: 0.6 });
      const leftEar = new THREE.Mesh(earGeo, earMat);
      leftEar.rotation.z = Math.PI / 2;
      leftEar.position.set(-1.5, -0.2, 0);
      headphoneGroup.add(leftEar);
      // Gold gimbal ring
      const ringGeo = new THREE.TorusGeometry(0.58, 0.05, 16, 32);
      const leftRing = new THREE.Mesh(ringGeo, goldMaterial);
      leftRing.rotation.y = Math.PI / 2;
      leftRing.position.set(-1.5, -0.2, 0);
      headphoneGroup.add(leftRing);
      // Right Earcup
      const rightEar = leftEar.clone();
      rightEar.position.set(1.5, -0.2, 0);
      headphoneGroup.add(rightEar);
      const rightRing = leftRing.clone();
      rightRing.position.set(1.5, -0.2, 0);
      headphoneGroup.add(rightRing);

      headphoneGroup.position.set(0, 1.8, -1.2);
      scene.add(headphoneGroup);

      // Floating dust particles
      const particleCount = 45;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 10;
        positions[i + 1] = (Math.random() - 0.5) * 8;
        positions[i + 2] = (Math.random() - 0.5) * 6;
      }
      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particleMat = new THREE.PointsMaterial({
        color: 0xC5A46D,
        size: 0.06,
        transparent: true,
        opacity: 0.6
      });
      const particleSystem = new THREE.Points(particleGeo, particleMat);
      scene.add(particleSystem);

      // Mouse Parallax
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (event: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Animation Loop
      const clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        // Parallax Lerp
        targetX += (mouseX * 0.8 - targetX) * 0.05;
        targetY += (mouseY * 0.8 - targetY) * 0.05;
        camera.position.x = targetX;
        camera.position.y = targetY;
        camera.lookAt(0, 0, 0);

        // Subtle Bobbing & Rotations
        perfumeGroup.position.y = 0.2 + Math.sin(elapsed * 1.2) * 0.15;
        perfumeGroup.rotation.y = 0.35 + Math.cos(elapsed * 0.8) * 0.2;
        perfumeGroup.rotation.x = Math.sin(elapsed * 0.6) * 0.08;

        watchGroup.position.y = 0.8 + Math.cos(elapsed * 1.4) * 0.18;
        watchGroup.rotation.y = -0.4 + Math.sin(elapsed * 0.9) * 0.25;

        crystalMesh.position.y = -1.6 + Math.sin(elapsed * 1.6 + 1) * 0.12;
        crystalMesh.rotation.x += 0.01;
        crystalMesh.rotation.y += 0.015;

        headphoneGroup.position.y = 1.8 + Math.sin(elapsed * 0.9 + 2) * 0.15;
        headphoneGroup.rotation.y = Math.sin(elapsed * 0.5) * 0.15;

        particleSystem.rotation.y = elapsed * 0.03;

        renderer.render(scene, camera);
      };

      animate();

      // Resize Handler
      const handleResize = () => {
        if (!canvas.parentElement) return;
        const newWidth = canvas.parentElement.clientWidth;
        const newHeight = canvas.parentElement.clientHeight || 520;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        renderer.dispose();
      };
    } catch (err) {
      console.warn('WebGL init failed, activating fallback', err);
      setWebGLFailed(true);
      setUse3DFallback(true);
    }
  }, [use3DFallback]);

  const scrollToCatalogue = () => {
    const el = document.getElementById('catalogue-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E9E0D2] bg-gradient-to-b from-[#F7F3EB] via-[#F2ECE2] to-[#F7F3EB]">
      {/* Decorative luxury background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A46D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#4A3028]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition, Action CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C5A46D]/40 text-[#4A3028] text-xs font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C5A46D] animate-ping" />
              <span>MBA Digital Business Challenge 2026</span>
              <span className="text-[#C5A46D]">★</span>
              <span className="text-[#8C7A70] font-normal">Next-Gen Retail Prototype</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#4A3028] leading-[1.15]">
              Shopping that <br className="hidden sm:inline" />
              <span className="relative italic font-normal">
                understands
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#C5A46D]/30 -rotate-1 rounded-sm -z-10" />
              </span> you.
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-[#63443A] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Experience the convergence of adaptive AI, budget-conscious discovery, and handpicked luxury essentials. NOVA matches your lifestyle and maximizes every dollar.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={scrollToCatalogue}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#4A3028] text-white hover:bg-[#35211B] font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center space-x-2 group border border-[#C5A46D]/30"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-[#C5A46D] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setIsQuizOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-[#F2ECE2] text-[#4A3028] font-semibold text-sm transition-all border border-[#D4C8B5] hover:border-[#C5A46D] shadow-sm flex items-center justify-center space-x-2 group"
              >
                <Compass className="w-4 h-4 text-[#C5A46D] group-hover:rotate-45 transition-transform" />
                <span>Discover Your Style</span>
              </button>
            </div>

            {/* Value Proof Bar */}
            <div className="pt-6 border-t border-[#E9E0D2] grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-xl sm:text-2xl font-bold font-serif text-[#4A3028]">100%</p>
                <p className="text-xs text-[#8C7A70]">Curated Luxury</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-serif text-[#C5A46D]">20% Avg</p>
                <p className="text-xs text-[#8C7A70]">Smart Bundle Savings</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-serif text-[#4A3028]">Sub-60s</p>
                <p className="text-xs text-[#8C7A70]">AI Style Match</p>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Canvas or Fallback */}
          <div className="lg:col-span-6 relative">
            
            {/* View Mode Switcher Header */}
            <div className="flex items-center justify-between mb-2 px-2">
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#63443A]">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>{use3DFallback ? '2D Editorial View' : 'Interactive 3D WebGL (Hover & Move Cursor)'}</span>
              </div>
              <button
                onClick={() => setUse3DFallback(!use3DFallback)}
                className="text-xs px-2.5 py-1 rounded-full bg-white/80 border border-[#D4C8B5] hover:border-[#C5A46D] text-[#4A3028] flex items-center space-x-1.5 transition-colors"
                title="Toggle between 3D WebGL canvas and lightweight visual fallback"
              >
                <Layers className="w-3 h-3 text-[#C5A46D]" />
                <span>{use3DFallback ? 'Switch to 3D' : 'Switch to Fallback'}</span>
              </button>
            </div>

            {/* Visual Container */}
            <div 
              className="relative w-full h-[450px] sm:h-[520px] rounded-3xl overflow-hidden bg-gradient-to-tr from-[#E9E0D2]/50 via-white/40 to-[#DFC8A2]/30 border border-[#C5A46D]/40 shadow-2xl transition-all"
              onMouseEnter={() => setIsHovering3D(true)}
              onMouseLeave={() => setIsHovering3D(false)}
            >
              {use3DFallback || webGLFailed ? (
                <FallbackHeroVisual />
              ) : (
                <>
                  <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
                  
                  {/* Floating 3D Control Pill */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="text-[11px] bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D4C8B5] text-[#4A3028] font-medium shadow-sm flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#C5A46D] animate-pulse" />
                      <span>Move cursor to tilt 3D scene depth</span>
                    </span>
                    <button
                      onClick={() => setIsQuizOpen(true)}
                      className="pointer-events-auto text-[11px] bg-[#4A3028] text-white px-3 py-1.5 rounded-full font-semibold shadow hover:bg-[#35211B] flex items-center space-x-1"
                    >
                      <span>Quiz AI</span>
                      <Sparkles className="w-3 h-3 text-[#C5A46D]" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
