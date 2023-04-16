import * as THREE from "three";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPixelatedPass } from "three/addons/postprocessing/RenderPixelatedPass.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";

import styles from "./PixelatedEthereum.module.css";
import { createEffect, createMemo, createSignal } from "solid-js";
import { useTheme } from "../context/ThemeProvider";

const PixelatedEthereum: Component = () => {
  const { theme } = useTheme();

  let canvasRef;
  let camera,
    parent,
    scene,
    renderer,
    composer,
    crystalMesh,
    material = new THREE.MeshPhongMaterial({
      color: 0x4b548d,
      emissive: 0x62688d,
      shininess: 10,
      specular: 0x62688d
    }),
    clock;
  let gui, params;

  const { cycleTheme } = useTheme();

  const meshes = { "blockchain": createCrystalMesh(), "web": createWebMesh(), "videogame": createVideoGameMesh() };
  const [hovered, setHovered] = createSignal(false);

  createEffect(() => {
    const [mesh, mat] = meshes[theme()];
    if (!scene) return;
    parent.remove(crystalMesh);
    crystalMesh = mesh;
    material = mat;
    setHovered(true)
    parent.add(crystalMesh);
    setTimeout(() => setHovered(false), 100);
  });

  function createCrystalMesh() {
    const crystalSize = 1;
    const crystalHeight = 3;
    const crystalBaseHeight = 0.15;
    const uv = [0, 1];

    const norm = {
      front: [0, 0, 1],
      right: [1, 0, 0],
      back: [0, 0, -1],
      bottom: [0, -1, 0],
      left: [-1, 0, 0]
    };

    const vertices = [
      // front
      {
        pos: [-crystalSize, crystalBaseHeight, crystalSize],
        norm: norm.front,
        uv
      },
      {
        pos: [crystalSize, crystalBaseHeight, crystalSize],
        norm: norm.front,
        uv
      },
      { pos: [0, crystalHeight, 0], norm: norm.front, uv },

      // left
      { pos: [0, crystalHeight, 0], norm: norm.left, uv },
      {
        pos: [-crystalSize, crystalBaseHeight, -crystalSize],
        norm: norm.left,
        uv
      },
      {
        pos: [-crystalSize, crystalBaseHeight, crystalSize],
        norm: norm.left,
        uv
      },

      // right
      {
        pos: [crystalSize, crystalBaseHeight, crystalSize],
        norm: norm.right,
        uv
      },
      {
        pos: [crystalSize, crystalBaseHeight, -crystalSize],
        norm: norm.right,
        uv
      },
      { pos: [0, crystalHeight, 0], norm: norm.right, uv },

      // back
      { pos: [0, crystalHeight, 0], norm: norm.back, uv },
      {
        pos: [crystalSize, crystalBaseHeight, -crystalSize],
        norm: norm.back,
        uv
      },
      {
        pos: [-crystalSize, crystalBaseHeight, -crystalSize],
        norm: norm.back,
        uv
      },

      // bottom
      {
        pos: [-crystalSize, crystalBaseHeight, -crystalSize],
        norm: norm.bottom,
        uv
      },
      {
        pos: [crystalSize, crystalBaseHeight, -crystalSize],
        norm: norm.bottom,
        uv
      },
      {
        pos: [-crystalSize, crystalBaseHeight, crystalSize],
        norm: norm.bottom,
        uv
      },

      {
        pos: [-crystalSize, crystalBaseHeight, crystalSize],
        norm: norm.bottom,
        uv
      },
      {
        pos: [crystalSize, crystalBaseHeight, -crystalSize],
        norm: norm.bottom,
        uv
      },
      {
        pos: [crystalSize, crystalBaseHeight, crystalSize],
        norm: norm.bottom,
        uv
      }
    ];

    const positions = [];
    const normals = [];
    const uvs = [];
    for (const vertex of vertices) {
      positions.push(...vertex.pos);
      normals.push(...vertex.norm);
      uvs.push(...vertex.uv);
    }

    const ethGeometry = new THREE.BufferGeometry();
    const positionNumComponents = 3;
    const normalNumComponents = 3;
    const uvNumComponents = 2;
    ethGeometry.attributes.position = new THREE.BufferAttribute(
      new Float32Array(positions),
      positionNumComponents
    );

    ethGeometry.attributes.normal = new THREE.BufferAttribute(
      new Float32Array(normals),
      normalNumComponents
    );
    ethGeometry.attributes.uv = new THREE.BufferAttribute(
      new Float32Array(uvs),
      uvNumComponents
    );

    const mat = new THREE.MeshPhongMaterial({
      color: 0xa88cc7,
      emissive: 0xa27bcc,
      shininess: 10,
      specular: 0xa88cc7
    })

    const ethTopCrystalMesh = new THREE.Mesh(
      ethGeometry,
      mat
    );
    ethTopCrystalMesh.receiveShadow = true;
    ethTopCrystalMesh.castShadow = true;
    ethTopCrystalMesh.rotation.y = Math.PI / 4;

    const ethBottomCrystalMesh = new THREE.Mesh(
      ethGeometry,
      mat
    );
    ethBottomCrystalMesh.receiveShadow = true;
    ethBottomCrystalMesh.castShadow = true;
    ethBottomCrystalMesh.rotation.z = Math.PI / 1;
    ethBottomCrystalMesh.rotation.y = Math.PI / 4;

    const mesh = new THREE.Group();


    mesh.add(ethTopCrystalMesh);
    mesh.add(ethBottomCrystalMesh);
    return [mesh, mat];
  }

  function createWebMesh() {

    const geometry = new THREE.IcosahedronGeometry(2, 0);

    const mat = new THREE.MeshPhongMaterial({
      color: 0x00AAD6,
      emissive: 0x738ba1,
      shininess: 10,
      specular: 0x00AAD6
    })

    const mesh = new THREE.Mesh(
      geometry,
      mat
    );
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    mesh.rotation.y = Math.PI / 4;


    return [mesh, mat];
  }

  function createVideoGameMesh() {
    const geometry = new THREE.DodecahedronGeometry(2, 0);

    const mat = new THREE.MeshPhongMaterial({
      color: 0x54c233,
      emissive: 0x6cdf49,
      shininess: 10,
      specular: 0x54c233
    })

    const mesh = new THREE.Mesh(
      geometry,
      mat
    );
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    mesh.rotation.y = Math.PI / 4;


    return [mesh, mat];
  }

  function onCanvasClick() {
    cycleTheme();
  }

  setTimeout(() => {
    init();
    animate();

    function init() {
      const aspectRatio = canvasRef.clientWidth / canvasRef.clientHeight;

      camera = new THREE.OrthographicCamera(
        -aspectRatio,
        aspectRatio,
        10,
        -10,
        0.1,
        1000
      );
      camera.position.y = 4;
      camera.position.z = 5;
      camera.zoom = 0.2;

      scene = new THREE.Scene();
      parent = new THREE.Group();

      clock = new THREE.Clock();

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.shadowMap.enabled = true;
      //renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize(canvasRef.clientWidth, canvasRef.clientHeight);
      canvasRef.appendChild(renderer.domElement);
      window.addEventListener("resize", onWindowResize);

      // pixelated effect

      params = {
        pixelSize: 2,
        pixelAlignedPanning: true
      };

      composer = new EffectComposer(renderer);

      const renderPixelatedPass = new RenderPixelatedPass(6, scene, camera);
      renderPixelatedPass.normalEdgeStrength = 0.5;
      renderPixelatedPass.depthEdgeStrength = 0.4;
      renderPixelatedPass.setPixelSize(params.pixelSize);

      composer.addPass(renderPixelatedPass);

      // meshes

      crystalMesh = meshes[theme()][0];
      crystalMesh.scale.x = 2;
      crystalMesh.scale.y = 2;
      crystalMesh.scale.z = 2;

      parent.add(crystalMesh);
      scene.add(parent);
      camera.lookAt(crystalMesh.position);

      // lights

      scene.add(new THREE.AmbientLight(0x2d3645, 1.5));

      const directionalLight = new THREE.DirectionalLight(0xfffc9c, 0.5);
      directionalLight.position.set(100, 100, 100);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.set(2048, 2048);
      scene.add(directionalLight);

      const spotLight = new THREE.SpotLight(
        0xff8800,
        0.3,
        10,
        Math.PI / 12,
        0.02,
        3
      );
      spotLight.position.set(2, 2, 0);
      const target = spotLight.target;
      scene.add(target);
      target.position.set(0, 0, 0);
      spotLight.castShadow = true;
      // scene.add(spotLight);
    }

    function onWindowResize() {
      const aspectRatio = canvasRef.clientWidth / canvasRef.clientHeight;
      camera.left = -aspectRatio;
      camera.right = aspectRatio;
      camera.top = aspectRatio;
      camera.right = aspectRatio;
      camera.updateProjectionMatrix();

      renderer.setSize(100, 100);
      composer.setSize(canvasRef.clientWidth, canvasRef.clientHeight);
    }

    function animate() {
      requestAnimationFrame(animate);

      const t = clock.getElapsedTime();


      material.emissiveIntensity = Math.sin(t * 2) * 0.3 + 0.9;
      crystalMesh.position.y = Math.sin(t * 2) * 0.05;
      // crystalMesh.rotation.y = stopGoEased(t, 2, 4) * 2 * Math.PI;
      crystalMesh.rotation.x = Math.sin(t * 1) * 0.05 - 0.3;

      
      const scale = Math.sin(t * 2) * 0.01 + 1.5;

      if (parent) {
        parent.scale.x = hovered() ? 0.93 : 1;
        parent.scale.y = hovered() ? 0.93 : 1;
        parent.scale.z = hovered() ? 0.93 : 1;
      }

      crystalMesh.scale.x = scale;
      crystalMesh.scale.z = scale;
      crystalMesh.scale.y = scale;

      const rendererSize = renderer.getSize(new THREE.Vector2());
      const aspectRatio = rendererSize.x / rendererSize.y;
      if (params["pixelAlignedPanning"]) {
        pixelAlignFrustum(
          camera,
          aspectRatio,
          Math.floor(rendererSize.x / params["pixelSize"]),
          Math.floor(rendererSize.y / params["pixelSize"])
        );
      } else if (camera.left != -aspectRatio || camera.top != 1.0) {
        // Reset the Camera Frustum if it has been modified
        camera.left = -aspectRatio;
        camera.right = aspectRatio;
        camera.top = 1.0;
        camera.bottom = -1.0;
        camera.updateProjectionMatrix();
      }

      composer.render();
    }

    // Helper functions

    function pixelTexture(texture) {
      texture.minFilter = THREE.NearestFilter;
      texture.magFilter = THREE.NearestFilter;
      texture.generateMipmaps = false;
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      return texture;
    }

    function easeInOutCubic(x) {
      return x ** 2 * 3 - x ** 3 * 2;
    }

    function linearStep(x, edge0, edge1) {
      const w = edge1 - edge0;
      const m = 1 / w;
      const y0 = -m * edge0;
      return THREE.MathUtils.clamp(y0 + m * x, 0, 1);
    }

    function stopGoEased(x, downtime, period) {
      const cycle = (x / period) | 0;
      const tween = x - cycle * period;
      const linStep = easeInOutCubic(linearStep(tween, downtime, period));
      return cycle + linStep;
    }

    function pixelAlignFrustum(
      camera,
      aspectRatio,
      pixelsPerScreenWidth,
      pixelsPerScreenHeight
    ) {
      // 0. Get Pixel Grid Units
      let worldScreenWidth = (camera.right - camera.left) / camera.zoom;
      let worldScreenHeight = (camera.top - camera.bottom) / camera.zoom;
      let pixelWidth = worldScreenWidth / pixelsPerScreenWidth;
      let pixelHeight = worldScreenHeight / pixelsPerScreenHeight;

      // 1. Project the current camera position along its local rotation bases
      let camPos = new THREE.Vector3();
      camera.getWorldPosition(camPos);
      let camRot = new THREE.Quaternion();
      camera.getWorldQuaternion(camRot);
      let camRight = new THREE.Vector3(1.0, 0.0, 0.0).applyQuaternion(camRot);
      let camUp = new THREE.Vector3(0.0, 1.0, 0.0).applyQuaternion(camRot);
      let camPosRight = camPos.dot(camRight);
      let camPosUp = camPos.dot(camUp);

      // 2. Find how far along its position is along these bases in pixel units
      let camPosRightPx = camPosRight / pixelWidth;
      let camPosUpPx = camPosUp / pixelHeight;

      // 3. Find the fractional pixel units and convert to world units
      let fractX = camPosRightPx - Math.round(camPosRightPx);
      let fractY = camPosUpPx - Math.round(camPosUpPx);

      // 4. Add fractional world units to the left/right top/bottom to align with the pixel grid
      camera.left = -aspectRatio - fractX * pixelWidth;
      camera.right = aspectRatio - fractX * pixelWidth;
      camera.top = 1.0 - fractY * pixelHeight;
      camera.bottom = -1.0 - fractY * pixelHeight;
      camera.updateProjectionMatrix();
    }
  });


  return <div ref={canvasRef} className={styles.canvas} onPointerDown={() => setHovered(true)} onPointerOut={() => setHovered(false)} onClick={onCanvasClick}></div>;
};

export default PixelatedEthereum;
