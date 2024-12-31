'use client';
import { useRef, useEffect, useState, useMemo } from 'react';
import React from 'react';
// import './style.css'
// import * as dat from 'dat.gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import galaxyVertexShader from '@/shaders/galaxy/vertex.glsl'
import galaxyFragmentShader from '@/shaders/galaxy/fragment.glsl'
interface GalaxyProps {
    onClientReady: () => void;
}
const Galaxy: React.FC<GalaxyProps> = React.memo(({ onClientReady }) => {
    
    // const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setTimeout(()=>{
        // const gui = new dat.GUI()

        // Canvas
        const canvas = document.querySelector('canvas.webgl')

        // Scene
        const scene = new THREE.Scene()

        /**
         * Galaxy
         */
        const parameters = {
            count: 518300,
            size: 0.005,
            radius: 4.95,
            branches: 6,
            spin: 5,
            randomness: 0.429,
            randomnessPower: 4.298,
            insideColor: '#4830ff',
            outsideColor: '#441969',
        }

        let geometry = null
        let material = null
        let points = null

        const generateGalaxy = () => {
            return new Promise((resolve, reject) => {
                if (points !== null) {
                    geometry.dispose();
                    material.dispose();
                    scene.remove(points);
                }
            
                // Создаем воркер
                const worker = new Worker('/js/lib/galaxy/generate-point.js');
            
                // Обработка ошибок в воркере
                worker.onerror = (err) => {
                    reject(err); // Отправляем ошибку в основной поток, если что-то пошло не так
                    worker.terminate();
                };
            
                // Отправляем параметры в воркер
                worker.postMessage({
                    parameters,
                    // insideColor: new THREE.Color(parameters.insideColor),
                    // outsideColor: new THREE.Color(parameters.outsideColor),
                });
            
                // Получение данных от воркера
                worker.onmessage = function (e) {
                    const { positions, randomness, colors, scales } = e.data;
            
                    // Создаем геометрию на основе полученных данных
                    geometry = new THREE.BufferGeometry();
                    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                    geometry.setAttribute('aRandomness', new THREE.BufferAttribute(randomness, 3));
                    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
                    geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
            
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
            
                    // Создаем точки и добавляем в сцену
                    points = new THREE.Points(geometry, material);
                    scene.add(points);
            
                    // Завершаем работу воркера и резолвим промис
                    worker.terminate();
                    resolve(true);
                };
            });
          };

        // gui.add(parameters, 'count').min(100).max(1000000).step(100).onFinishChange(generateGalaxy)
        // gui.add(parameters, 'radius').min(0.01).max(20).step(0.01).onFinishChange(generateGalaxy)
        // gui.add(parameters, 'branches').min(2).max(20).step(1).onFinishChange(generateGalaxy)
        // gui.add(parameters, 'randomness').min(0).max(2).step(0.001).onFinishChange(generateGalaxy)
        // gui.add(parameters, 'randomnessPower').min(1).max(10).step(0.001).onFinishChange(generateGalaxy)
        // gui.addColor(parameters, 'insideColor').onFinishChange(generateGalaxy)
        // gui.addColor(parameters, 'outsideColor').onFinishChange(generateGalaxy)

        /**
         * Sizes
         */
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        window.addEventListener('resize', () =>
        {
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        /**
         * Camera
         */
        // Base camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.x = 3
        camera.position.y = 3
        camera.position.z = 3
        scene.add(camera)

        // Controls
        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        /**
         * Animate
         */
        const clock = new THREE.Clock()

        const tick = () =>
        {
            setTimeout(()=>{

                const elapsedTime = clock.getElapsedTime()

                // Update material
                material.uniforms.uTime.value = elapsedTime

                // Update controls
                //controls.update()

                // Render
                renderer.render(scene, camera)

                // Call tick again on the next frame
                window.requestAnimationFrame(tick)
            },0)
        }

        /**
         * Generate the first galaxy
         */
        generateGalaxy()
            .then(()=>{
                if (onClientReady) {
                    onClientReady(); // Вызываем переданный коллбэк
                }
                tick()
            })
            .catch((error)=>{
                console.error("Ошибка при генерации галактики:", error);
            })

        },0)

        
    }, [onClientReady])


    return (
        <>
            <canvas className='webgl'></canvas>
        </>
    );
})
export default Galaxy;