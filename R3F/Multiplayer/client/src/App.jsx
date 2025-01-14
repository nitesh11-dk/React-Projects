import { Canvas } from "@react-three/fiber";
import Experience from "./Components/Experience";
import SocketManager from "./Components/SocketManager";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <SocketManager></SocketManager>
      <Canvas
        camera={{
          position: [8, 8, 8],
          fov: 30,
        }}
      >
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </div>
  );
};

export default App;
