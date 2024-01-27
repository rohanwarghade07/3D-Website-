import React from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const New = () => {
  const gltf = useRef();

  // Load the GLTF model
  const onLoad = (gltfModel) => {
    gltf.current = gltfModel;
  };

  // Handle errors during loading
  const onError = (error) => {
    console.error("Error loading GLTF model:", error);
  };
  return (
    <div>
      <Canvas>
        {/* Add lights and camera as needed */}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {/* Load the GLTF model */}
        <primitive object={gltf.current} />

        {/* Use GLTFLoader to load the .glb file */}
        <GLTFLoader onLoad={onLoad} onError={onError} />
      </Canvas>
    </div>
  );
};

export default New;
