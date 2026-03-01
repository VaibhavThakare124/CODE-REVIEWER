import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import vertexShader from './shaders/particleVertexShader.glsl?raw'
import fragmentShader from './shaders/particleFragmentShader.glsl?raw'

const Particles = ({ count = 5000 }) => {
    const pointsRef = useRef()
    const { size: windowSize } = useThree()

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3)
        const sizes = new Float32Array(count)

        for (let i = 0; i < count; i++) {
            // Initialize in a 3D box
            positions[i * 3 + 0] = (Math.random() - 0.5) * 15
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10
            positions[i * 3 + 2] = (Math.random() - 0.5) * 5

            sizes[i] = Math.random() * 2 + 1
        }

        return { positions, sizes }
    }, [count])

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        }),
        []
    )

    const targetMouse = useRef(new THREE.Vector2(0.5, 0.5))

    useEffect(() => {
        const handleMouseMove = (event) => {
            targetMouse.current.x = event.clientX / window.innerWidth
            targetMouse.current.y = 1.0 - (event.clientY / window.innerHeight)
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.material.uniforms.uTime.value = state.clock.elapsedTime

            // Easing/Smoothing for mouse
            pointsRef.current.material.uniforms.uMouse.value.x += (targetMouse.current.x - pointsRef.current.material.uniforms.uMouse.value.x) * 0.05
            pointsRef.current.material.uniforms.uMouse.value.y += (targetMouse.current.y - pointsRef.current.material.uniforms.uMouse.value.y) * 0.05
        }
    })

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.positions.length / 3}
                    array={particles.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={particles.sizes.length}
                    array={particles.sizes}
                    itemSize={1}
                />
            </bufferGeometry>
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}


                depthTest={false}
            />
        </points>
    )
}

const ThreeScene = () => {
    return (
        <div className="absolute inset-0  pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ antialias: true, alpha: true }}
                onCreated={({ gl }) => {
                    gl.setClearColor(0x000000, 0) 
                  }}
                dpr={[1, 2]}
            >
                <Particles count={6000} />
            </Canvas>
        </div>
    )
}

export default ThreeScene
