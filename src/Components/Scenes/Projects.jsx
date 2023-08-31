import { Html} from '@react-three/drei';
import ProjectsPage from '../ProjectsPage';


const Projects = () => {
    
  return (
    <group>
        <mesh rotation={[0,Math.PI/2,0]} position={[-2.9,0,0]} >
            <planeGeometry args={[3.5,2]} />
            <meshBasicMaterial color="#FFB6D9" />
            <Html transform scale={0.17}>
                <div className="wrapper1" onPointerDown={(e) => e.stopPropagation()}>
                    <ProjectsPage />
                </div>
            </Html>
        </mesh>
    </group>
  )
}

export default Projects
