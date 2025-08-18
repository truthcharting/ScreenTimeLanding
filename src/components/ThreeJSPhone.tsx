import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import iphoneModel from '../iphone_16_With_Screen.glb';

interface ThreeJSPhoneProps {
  className?: string;
}

const ThreeJSPhone: React.FC<ThreeJSPhoneProps> = ({ className = "" }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    // Transparent canvas; let the page background show through
    scene.background = null;
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting setup – balanced key/fill/rim plus subtle environment
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.15);
    keyLight.position.set(4, 6, 8);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.6);
    fillLight.position.set(-6, 2, 4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
    rimLight.position.set(0, 5, -6);
    scene.add(rimLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.35);
    hemiLight.position.set(0, 6, 0);
    scene.add(hemiLight);

    // Image-based lighting for PBR materials
    const pmrem = new THREE.PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = env;

    // Disable controls - we'll handle rotation manually
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = false;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = false;
    controls.autoRotate = false;
    controlsRef.current = controls;

    // Load 3D model
    const loader = new GLTFLoader();
    loader.load(
      iphoneModel,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(1, 1, 1);
        model.position.set(0, -0.1, 0);
        
        // Enable shadows for all meshes
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(model);
        modelRef.current = model;

        // Center camera on model
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
        cameraZ *= 1.4; // tight but comfortable frame
        camera.position.set(0, 0, cameraZ);
        camera.updateProjectionMatrix();
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // Mouse tracking for iPhone rotation
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      if (!mountRef.current) return;
      
      const rect = mountRef.current.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    mountRef.current.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate iPhone to face mouse cursor
      if (modelRef.current) {
        const targetRotationY = mouseX * 0.3; // Limit rotation range
        const targetRotationX = mouseY * 0.1; // Subtle vertical rotation
        
        modelRef.current.rotation.y += (targetRotationY - modelRef.current.rotation.y) * 0.05;
        modelRef.current.rotation.x += (targetRotationX - modelRef.current.rotation.x) * 0.05;
      }
      
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !camera || !renderer) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeEventListener('mousemove', handleMouseMove);
        if (renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className={`w-full h-full min-h-[400px] ${className}`}
    />
  );
};

export default ThreeJSPhone;
