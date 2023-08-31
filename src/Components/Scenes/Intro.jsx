import {Text} from '@react-three/drei';

const Intro = () => {
  return (
    <Text font={'/orange juice 2.0.ttf'} color="black" fontSize={1} rotation={[0,-Math.PI,0]} scale={0.3} position={[0.2,0,2]}>
        WELCOME! {'\n'}I'm Sadish Ruhunage{'\n'}Front End Developer  
    </Text>
  )
}

export default Intro
