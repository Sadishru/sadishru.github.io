import { Html } from "@react-three/drei";
import ContactPage from '../ContactPage';

const Contact = () => {
  return (
    <mesh position={[0.05,-1,-1.1]} rotation={[-Math.PI/4,0,0]}>
      <planeGeometry args={[1.2,0.7]} />
      <meshBasicMaterial color="#FFB6D9" />
      <Html transform scale={0.17}>
        <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
            <ContactPage />
        </div>
      </Html>
    </mesh>
  )
}

export default Contact
