import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const ModelViewer: React.FC<{}> = () => {

    const gltf = useLoader(GLTFLoader, './hand-wave.glb');

    return (

        <Canvas>
            <OrbitControls enableZoom={true}  enablePan={false} />
            <mesh>
            <meshPhongMaterial />
            <primitive
                object={gltf.scene}
                position={[0, 1, 0]}
                // children-0-castShadow
            />
            </mesh>
            <ambientLight intensity={1} />
            {/* <directionalLight position={[0, 0, 5]} color="white" /> */}
        </Canvas>
    );
};

export default ModelViewer;