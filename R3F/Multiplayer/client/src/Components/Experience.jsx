import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import React from "react";
import { Women } from "./3D/Women";
import { useAppContext } from "../context/appContext";
const Experience = () => {
  const { characters } = useAppContext();
  return (
    <>
      <Environment preset="sunset" />
      <OrbitControls />
      <ContactShadows blur={2}></ContactShadows>

      {characters.map((character) => (
        <Women
          key={character.id}
          hairColor={character.hairColor}
          topColor={character.topColor}
          bottomColor={character.bottomColor}
          position={character.position}
        />
      ))}
    </>
  );
};

export default Experience;
