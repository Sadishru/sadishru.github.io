import React,{useMemo} from 'react';
import {useGLTF} from '@react-three/drei';

const MainScene = () => {
    const sceneMemo = useMemo(() => useGLTF('/scene-v1/scene.gltf'),[])
  return (
    <mesh position={[0,-2,0.1]} rotation={[0,-Math.PI,0]}>
      <primitive object={sceneMemo.scene} />
    </mesh>
  )
}

export default MainScene
