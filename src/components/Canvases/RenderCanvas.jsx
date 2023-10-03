import { Suspense, useContext, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls, OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
// import { Picker, Case, VideoCard, MotherBoard ,Power } from "./components";
import { useSnapshot } from "valtio";
// import state from "./state";
import React from "react";

import { PinPoints } from "../Y70/PinPoints";
import { CanvasContext } from "../../contexts/Canvas/CanvasContext";
import { Case } from "../Case";
import { Cpu } from "../Y70/Cpu";
import { BottomFaces } from "../Y70/BottomFaces";
import { GlassFaces } from "../Y70/GlassFaces";
import { SideFaces } from "../Y70/SideFaces";
import { TopFaces } from "../Y70/TopFaces";
import { MotherBoard } from "../Y70/MotherBoard";
import { VideoCanvas } from "../Y70/VideoCanvas";
import { VideoGears } from "../Y70/VideoGears";
import { SoundCard } from "../Y70/SoundCard";
import { PowerSupply } from "../Y70/PowerSupply";
import { InnerFaces0 } from "../Y70/InnerFaces0";
import { InnerFaces1 } from "../Y70/InnerFaces1";
import { FanInners0 } from "../Y70/FanInners0";
import { FanInners1 } from "../Y70/FanInners1";
import { FanOuters0 } from "../Y70/FanOuters0";
import { FanOuters1 } from "../Y70/FanOuters1";

export function RenderCanvas(props){
      const { selectPinPointIndex} = useContext(CanvasContext);
    return (
        <Canvas style={{height:800, width:1500}} shadows dpr={[1, 2]} camera={{fov:7, position:[-5,1,5]}}>
            <ambientLight intensity={1} />

            <spotLight
            intensity={1}
            angle={0.1}
            penumbra={1}
            position={[50, 50, 200]}
            />
            <Suspense fallback={null}>

            <group position={[0,-0.25,0]} >
                <PinPoints onPinPointSelected={selectPinPointIndex} />
                <Cpu/>
                <GlassFaces/>
                <InnerFaces0/>
                <InnerFaces1/>
                <SideFaces/>
                <TopFaces/>
                <SoundCard/>
                
                <PowerSupply/>
                <VideoGears/>
                <VideoCanvas/>
                <MotherBoard/>
                <FanInners0/>
                <FanInners1/>
                <FanOuters0/>
                <FanOuters1/>
                <BottomFaces onAfterRender={props.onLoaded}/>
            </group>
            {/* <Case /> */}
            {/* {snap.items.showVideoCart && <Model onBeforeRender = {()=>setIsLoading(true)} onAfterRender={()=>setIsLoading(false)}/>} */}
            {/* {snap.items.showVideoCart && <>

            </>} */}
            {/* <Power /> */}
            <Environment preset="city" />
            <ContactShadows
                rotation-x={Math.PI / 2}
                position={[0, -0.8, 0]}
                opacity={0.25}
                width={10}
                height={10}
                blur={1.5}
                far={0.8}
            />
            {/* {snap.items.showMotherBoard &&  <MotherBoard />} */}


            {/* <Grid width={3} height={3} /> */}
            {/* <Image url={doggos} /> */}
            {/* <Shoe/> */}
            </Suspense>
            <OrbitControls enablePan={false} enableRotate={true} rotation={[0,1,0]} enableZoom={true}/>
    </Canvas>
);
}