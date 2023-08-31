import React,{useMemo,useEffect, useRef} from 'react';
import {useGLTF,useAnimations, Clone} from '@react-three/drei';

const Arrows = () => {
    const arrowsMemo = useMemo(() => useGLTF('/arrow/scene.gltf'),[])

    const {animations} = arrowsMemo;
    const arrowsRef = useRef();
    const {actions} = useAnimations(animations,arrowsRef)

    useEffect(() => {
        actions['CINEMA_4D_Main'].play();
    },[])


  return (
    <group >
      <mesh>
        <primitive object={arrowsMemo.scene} ref={arrowsRef} scale={0.03} position={[-2,0,2]} rotation={[-Math.PI,0,-Math.PI/2]} />
        <Clone object={arrowsMemo.scene} scale={0.05} position={[-1,-0.4,-1.8]} rotation={[0,0,Math.PI/2]} />
        <Clone object={arrowsMemo.scene} scale={0.05} position={[0,-1.1,-1.5]} rotation={[0,0,0]} />
        <Clone object={arrowsMemo.scene} scale={0.05} position={[2,-1,-1]} rotation={[0,0,Math.PI/2]} />
        <Clone object={arrowsMemo.scene} scale={0.05} position={[1.7,-0.5,1.2]} rotation={[-Math.PI,-Math.PI/2,-Math.PI/2]} />
      </mesh>
    </group>
  )
}

export default Arrows
