import React from 'react';
import { Text } from '@react-three/drei';

const Skills = () => {
  return (
    <group>
        <Text font='/Aloevera-OVoWO.ttf' fontSize={0.2} position={[-3,1.3,-0.2]} rotation={[0,Math.PI-Math.PI/2,0]} >
            React + TailwindCSS + ThreeJS(R3F) {'\n'}
            TypedJS + Framer-Motion + EmailJS 
            <meshNormalMaterial />
        </Text>
    </group>
  )
}

export default Skills
