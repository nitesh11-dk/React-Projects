import { Canvas } from "@react-three/fiber";
import Experience from "./Components/Experience";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas
        camera={{
          position: [3, 3, 3],
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
