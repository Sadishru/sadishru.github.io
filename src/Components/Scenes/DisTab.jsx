import { Html } from "@react-three/drei"
import Disclaimer from "../Disclaimer"

const DisTab = () => {
  return (
    <mesh scale={0.17} position={[12,-2.5,-3]} rotation={[0,-Math.PI/2,0]}>
      <planeGeometry args={[1,0.5]} />
      <meshBasicMaterial />
      <Html transform >
        <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                    <Disclaimer />
        </div>
      </Html>
    </mesh>
  )
}

export default DisTab
