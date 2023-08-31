import React,{useRef, useEffect, useMemo} from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';

const Bird = () => {
    const birdMemo = useMemo( () => useGLTF('/flying/scene.gltf'),[]);
    const {actions} = useAnimations(birdMemo.animations, birdMemo.scene)

    useEffect(() => {
        actions['Take 001'].play();
    },[])
  return (
    <mesh position={[-0.2,0.3,2]} rotation={[0,-Math.PI/4,0]}>
      <primitive object={birdMemo.scene} />
    </mesh>
  )
}

export default Bird
