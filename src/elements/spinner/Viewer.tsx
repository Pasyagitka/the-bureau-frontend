/* eslint-disable react/jsx-filename-extension */
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Ethereum from "./Ethereum";

export default function Viewer() {
  return (
    <div className="content-center h-screen">
      <Canvas>
        <Stage contactShadow={{ resolution: 1024, scale: 10 }}>
          <Ethereum />
        </Stage>
        <OrbitControls autoRotate autoRotateSpeed={20.0} enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
