/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import { Cloud, Clouds, Float,  Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Island from "../components/Island";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import {Color} from 'three'
import CTA from "../components/CTA";
// import Cloud from "../components/cloud";


const bloomColor = new Color("#fff");
bloomColor.multiplyScalar(1.5);


const Home = () => {

  const adjustIslandForScreenSize =() =>{
    let screenScale = null;
    let screenPosition = null

    if (window.innerWidth < 768){
      screenScale=[0.15,0.15,0.15]
      screenPosition = [0.2,1,0]
    }
    else {
      screenScale = [0.2,0.2,0.2]
      screenPosition = [-3,-0.3,0]
    }
    return [screenScale, screenPosition]
  }
  const adjustBGTextForScreenSize =() =>{
    let screenScale = null;
    let screenPosition = null

    if (window.innerWidth < 768){
      screenScale=[0.7,0.7,0.7 ]
      screenPosition = [0.2,-1.2,0]
    }
    else {
      screenScale = [1.5,1,1]
      screenPosition = [2,0,0]
    }
    return [screenScale, screenPosition]
  }
  const adjustTextForScreenSize =() =>{
    let screenScale = null;
    let screenPosition = null;

    if (window.innerWidth < 768){
      screenScale=[0.15,0.15,0.15]
      screenPosition = [0.2,-1.7,0]
    }
    else {
      screenScale = [0.3,0.2,0.2]
      screenPosition = [2,-0.8,0]
    }
    return [screenScale, screenPosition]
  }

  const [islandScale , islandPosition]= adjustIslandForScreenSize();
  const [textScale , textPosition]= adjustBGTextForScreenSize();
  const [StextScale, StextPosition]=adjustTextForScreenSize()
  return (
  <>
 
      <div className="w-full h-full relative">
        <Canvas className="w-full h-full">
         
         
          
          

          <Text font={"font/Poppins-Black.ttf"} scale={textScale} position={textPosition}>
            3D TIME
            <meshBasicMaterial color={bloomColor} toneMapped={false} />
          </Text>
          <Text font={"font/Poppins-Black.ttf"} scale={StextScale} position={StextPosition} >
              Resived your 3D Portfolio in 1 week
          </Text>
      
          <ambientLight intensity={0.5} />
          <spotLight position={[-3, -0.3, 2 ]} intensity={2} />
          
          <Float floatIntensity={1} rotationIntensity={0}>
            <Island
              scale={islandScale}
              rotation-X={0.1}
              position={islandPosition}
            />
          </Float>
          <EffectComposer>
        <Bloom mipmapBlur intensity={0.5}/>
      </EffectComposer>
            <Clouds meshBasicMaterial position={[-15,-5,-10]}>
            <ambientLight position={[-15,-5,-10]} intensity={0.9}/>
        <Cloud segments={44} bounds={[10, 2, 2]} volume={5} color="white" />
        <Cloud seed={1} scale={0.5} volume={1} color={bloomColor} fade={100} />
      </Clouds>
      <Clouds meshBasicMaterial position={[19,8,-10]}>
        <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color={bloomColor} />
        <Cloud seed={1} scale={0.5} volume={1} color={bloomColor} fade={100} />
      </Clouds>
      <Clouds meshBasicMaterial position={[19,8,-50]}>
        <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color={bloomColor} />
        <Cloud seed={1} scale={0.5} volume={1} color={bloomColor} fade={100} />
      </Clouds>
      <Clouds meshBasicMaterial position={[19,-18,10]}>
        <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color={bloomColor} />
        <Cloud seed={1} scale={0.5} volume={1} color={bloomColor} fade={100} />
      </Clouds>

      

      
      
        </Canvas>
        <CTA position={[1,1,1]}/>
      </div>
      </>
  );
};

export default Home;
