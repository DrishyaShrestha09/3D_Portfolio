import React from 'react'
import { useGLTF } from '@react-three/drei'

import skyScene from '../assets/3d/sky.glb'

const Sky = () => {
    const { scene } = useGLTF(skyScene)
    return (
        <mesh>
            <primitive object={scene} />
        </mesh>
    )
}

export default Sky
