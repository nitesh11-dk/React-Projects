import { Environment, OrbitControls } from "@react-three/drei";
import React from "react";
import { Women } from "./3D/Women";

const Experience = () => {
  return (
    <>
      <Environment preset="sunset" />
      <OrbitControls />
      <Women></Women>
    </>
  );
};

export default Experience;
