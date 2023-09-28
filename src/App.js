import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls, OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { Picker, Case, VideoCard, MotherBoard ,Power } from "./components";
import { useSnapshot } from "valtio";
import state from "./state";
import React, { useMemo } from "react";
import * as THREE from "three";
import { Model } from "./components/Y70";
import { BackSides } from "./components/Y70/BackSides";
import { GlassSides } from "./components/Y70/GlassSides";
import { WhiteSides } from "./components/Y70/WhiteSides";
import { VideoFrames } from "./components/Y70/VideoFrames";
import { VideoProject } from "./components/Y70/VideoProject";
import { BackFans } from "./components/Y70/BackFans";
import { LoadingBar } from "./components/Loading/LoadingBar";
import { CanvasSection } from "./components/Sections/CanvasSection";
import { CanvasProvider } from "./contexts/Canvas/CanvasContext";


function App() {
  const snap = useSnapshot(state);

  const setShowPanel = () => {
    state.items.showPanel = !state.items.showPanel;
  };

  const setShowVideoCard = () => {
    state.items.showVideoCart = !state.items.showVideoCart;
  };

  const setShowMotherBoard = () => {
    state.items.showMotherBoard = !state.items.showMotherBoard;
  };

  return (
    <>
    
      <button onClick={setShowPanel} style={{ margin: 4 }}>
        Add / Remove Panel
      </button>
      <button onClick={setShowVideoCard} style={{ margin: 4 }}>
        Add / Remove Video Card
      </button>
      <button onClick={setShowMotherBoard} style={{ margin: 4 }}>
        Add / Remove MotherBoard
      </button>
      <CanvasProvider>
          <CanvasSection/>
      </CanvasProvider>
      
      
    </>
  );
}

export default App;
