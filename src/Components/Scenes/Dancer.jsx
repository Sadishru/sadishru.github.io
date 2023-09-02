import { useAnimations, useGLTF } from '@react-three/drei'
import React,{useMemo,useEffect} from 'react'

const Dancer = () => {
    const dancerMemo = useMemo(() => useGLTF('/belly-rep/scene.gltf'),[])
    const {actions} = useAnimations(dancerMemo.animations,dancerMemo.scene)

    useEffect(() => {
        actions['mixamo.com'].play()
    },[])
  return (
    <mesh scale={2.5} position={[2,-4.5,5]} rotation={[0,Math.PI,0]}>
      <primitive object={dancerMemo.scene} />
    </mesh>
  )
}

export default Dancer
