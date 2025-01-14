import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import React from "react";
import { Women } from "./3D/Women";
import { useAppContext } from "../context/appContext";
import { socket } from "./SocketManager";
import * as THREE from "three";

const Experience = () => {
  const { characters } = useAppContext();
  return (
    <>
      <Environment preset="sunset" />
      <OrbitControls />
      <ContactShadows blur={2}></ContactShadows>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position-y={-0.001}
        onClick={(e) => socket.emit("move", [e.point.x, 0, e.point.z])}
      >
        <planeGeometry args={[10, 10]}></planeGeometry>
        <meshStandardMaterial color={"#f0f0f0"}></meshStandardMaterial>
      </mesh>

      {characters.map((character) => (
        <Women
          key={character.id}
          hairColor={character.hairColor}
          topColor={character.topColor}
          bottomColor={character.bottomColor}
          position={
            new THREE.Vector3(character.position[0], 0, character.position[2])
          }
        />
      ))}
    </>
  );
};

export default Experience;
