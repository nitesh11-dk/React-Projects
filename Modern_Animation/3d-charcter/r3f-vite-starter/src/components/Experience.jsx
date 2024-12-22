import { OrbitControls,Sky,Environment,ContactShadows } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
export const Experience = () => {
  const {animation} = useControls({
    animation: {
      value: "standing",
      options: [ "walking", "standing", "punch"],
    },
  });

  return (
    
    <>
      <OrbitControls />
<Sky/>
<Environment preset="sunset"/>
      <group position-y={-1}>
      <ContactShadows opacity={1} scale={10} blur={1} far={10} resolution={256} color="#000000" />

        <Avatar animation={animation} />
      </group>

<mesh position-y={-1.2} rotation-x={-Math.PI/2}  >
  <planeGeometry args={[75,75]}/>
  <meshStandardMaterial color="white"/>
</mesh>
    </>
  );
};



//  mixamo is the free animation tool for animation 

