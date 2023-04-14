import { Canvas } from "@react-three/fiber";
import { Center, Environment } from "@react-three/drei";

import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import Shirt from "./Shirt";
const CanvasModel = () => {
  return (
    <Canvas camera={{ position: [0, 0, 0], fov: 25 }}
    shadows
    gl={{preserveDrawingBuffer:true}}
    className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        
        <Backdrop/>
        <Center>
          <Shirt></Shirt>
        </Center>
       
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
