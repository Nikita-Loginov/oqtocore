"use client";
import { useEffect } from "react";
import React from "react";
// import './style.css'
// import * as dat from 'dat.gui'
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import galaxyVertexShader from "@/shaders/galaxy/vertex.glsl";
import galaxyFragmentShader from "@/shaders/galaxy/fragment.glsl";
interface GalaxyProps {
  parametersGallaxy: {
    count?: number;
    size?: number;
    radius?: number;
    branches?: number;
    spin?: number;
    randomness?: number;
    randomnessPower?: number;
    insideColor?: string;
    outsideColor?: string;
  };

  onClientReady: () => void;
}

const Galaxy: React.FC<GalaxyProps> = 
  ({ parametersGallaxy, onClientReady }) =>  {
    let loaded = false;

    useEffect(() => {
      if (loaded) return;
      if (navigator.userAgent.includes("Lighthouse")) return;
      setTimeout(() => {
        // Canvas
        const canvas = document.querySelector("canvas.webgl");

        // Scene
        const scene = new THREE.Scene();

        /**
         * Galaxy
         */
        const parameters = parametersGallaxy;

        let geometry = null;
        let material = null;
        let points = null;

        const generateGalaxy = () => {
          return new Promise((resolve, reject) => {
            if (points !== null) {
              geometry.dispose();
              material.dispose();
              scene.remove(points);
            }

            const worker = new Worker("/js/lib/galaxy/generate-point.js");

            worker.onerror = (err) => {
              reject(err);
              worker.terminate();
            };

            worker.postMessage({
              parameters,
            });

            worker.onmessage = function (e) {
              const { positions, randomness, colors, scales } = e.data;

              geometry = new THREE.BufferGeometry();
              geometry.setAttribute(
                "position",
                new THREE.BufferAttribute(positions, 3)
              );
              geometry.setAttribute(
                "aRandomness",
                new THREE.BufferAttribute(randomness, 3)
              );
              geometry.setAttribute(
                "color",
                new THREE.BufferAttribute(colors, 3)
              );
              geometry.setAttribute(
                "aScale",
                new THREE.BufferAttribute(scales, 1)
              );

              // Создаем материал
              material = new THREE.ShaderMaterial({
                depthWrite: false,
                blending: THREE.AdditiveBlending,
                vertexColors: true,
                uniforms: {
                  uTime: { value: 0 },
                  uSize: { value: 30 * renderer.getPixelRatio() },
                },
                vertexShader: galaxyVertexShader,
                fragmentShader: galaxyFragmentShader,
              });

              points = new THREE.Points(geometry, material);
              scene.add(points);

              worker.terminate();
              resolve(true);
            };
          });
        };

        /**
         * Sizes
         */
        const sizes = {
          width: window.innerWidth,
          height: window.innerHeight,
        };

        window.addEventListener("resize", () => {
          // Update sizes
          sizes.width = window.innerWidth;
          sizes.height = window.innerHeight;

          // Update camera
          camera.aspect = sizes.width / sizes.height;
          camera.updateProjectionMatrix();

          // Update renderer
          renderer.setSize(sizes.width, sizes.height);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });

        /**
         * Camera
         */
        // Base camera
        const camera = new THREE.PerspectiveCamera(
          75,
          sizes.width / sizes.height,
          0.1,
          100
        );
        camera.position.x = 3;
        camera.position.y = 3;
        camera.position.z = 5;
        scene.add(camera);

        // Controls
        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
          canvas: canvas,
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        /**
         * Animate
         */
        const clock = new THREE.Clock();

        const tick = () => {
          setTimeout(() => {
            const elapsedTime = clock.getElapsedTime();

            // Update material
            material.uniforms.uTime.value = elapsedTime;

            // Update controls
            //controls.update()

            // Render
            renderer.render(scene, camera);

            // Call tick again on the next frame
            window.requestAnimationFrame(tick);
          }, 0);
        };

        /**
         * Generate the first galaxy
         */
        generateGalaxy()
          .then(() => {
            loaded = true;
            if (onClientReady) {
              onClientReady();
            }
            tick();
          })
          .catch((error) => {
            console.error("Ошибка при генерации галактики:", error);
          });
      }, 0);
    }, [loaded]);

    return (
      <>
        <canvas className="webgl"></canvas>
      </>
    );
  }

Galaxy.displayName = "Galaxy";

export default Galaxy;
