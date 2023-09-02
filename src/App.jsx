import React,{Suspense} from 'react';
import {Canvas} from '@react-three/fiber'
import {OrbitControls,Loader} from '@react-three/drei';

import MainScene from './Components/Scenes/MainScene';
import Intro from './Components/Scenes/Intro';
import Arrows from './Components/Scenes/Arrows';
import Projects from './Components/Scenes/Projects';
import Skills from './Components/Scenes/Skills';
import Contact from './Components/Scenes/Contact';
import Bird from './Components/Scenes/Bird';
import Dancer from './Components/Scenes/Dancer';
import DisTab from './Components/Scenes/DisTab';

const App = () => {
  
  return (
    <>
      <Canvas camera={{ fov: 50, near: 0.1, far: 100, position: [0,0,-0.3],  }} >
        <ambientLight intensity={2} />
        <pointLight position={[0,5,3]} />
        <Suspense fallback={null}>
          <MainScene />
          <Intro />
          <Bird />
          <Arrows />
          <Projects />
          <Skills />
          <Contact />
          <Dancer />
          <DisTab />
        </Suspense>
        <OrbitControls enableZoom={false} reverseOrbit={true} rotateSpeed={0.3} /> 
        
      </Canvas>
        <Loader />
    </>
  )
}

export default App

