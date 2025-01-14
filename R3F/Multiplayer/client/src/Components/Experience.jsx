import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import React from "react";
import { Women } from "./3D/Women";

const Experience = () => {
  return (
    <>
      <Environment preset="sunset" />
      <OrbitControls />
      <ContactShadows blur={2}></ContactShadows>
      <Women></Women>
      <Women
        position-x={1}
        hairColor="red"
        topColor="blue"
        bottomColor="green"
      ></Women>
    </>
  );
};

export default Experience;
