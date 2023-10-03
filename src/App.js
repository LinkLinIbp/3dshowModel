import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls, OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import { Picker, Case, VideoCard, MotherBoard ,Power } from "./components";
import { useSnapshot } from "valtio";
import state from "./state";
import React, { useMemo } from "react";
import * as THREE from "three";
import { Model } from "./components/Y70";
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
      
      <div id="testVideoContainer"></div>
      <div>!!!!!{snap.pinPointIndex}</div>
    </>
  );
}

export default App;
