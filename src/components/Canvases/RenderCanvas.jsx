import { Suspense, useContext, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls, OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
// import { Picker, Case, VideoCard, MotherBoard ,Power } from "./components";
import { useSnapshot } from "valtio";
// import state from "./state";
import React from "react";
import { BackSides } from "../Y70/BackSides";
import { GlassSides } from "../Y70/GlassSides";
import { WhiteSides } from "../Y70/WhiteSides";
import { VideoFrames } from "../Y70/VideoFrames";
import { VideoProject } from "../Y70/VideoProject";
import { BackFans } from "../Y70/BackFans";
import { PinPoints } from "../Y70/PinPoints";
import { CanvasContext } from "../../contexts/Canvas/CanvasContext";
import { Mechanic5 } from "../Y70/Mechanic5";

export function RenderCanvas(props){
      const { selectPinPointIndex} = useContext(CanvasContext);
    return (
        <Canvas style={{height:800, width:1500}} shadows dpr={[1, 2]} camera={{fov:7, position:[-5,1,5]}}>
            <ambientLight intensity={0.3} />

            <spotLight
            intensity={0.3}
            angle={0.1}
            penumbra={1}
            position={[5, 25, 20]}
            />
            <Suspense fallback={null}>

            <group position={[0,-0.25,-0.25]} >
                <BackSides/>
                <GlassSides/>
                <VideoFrames/>
                <VideoProject/>
                <BackFans/>
                <Mechanic5/>
                <PinPoints onPinPointSelected={selectPinPointIndex} />
                <WhiteSides onAfterRender={props.onLoaded}/>
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