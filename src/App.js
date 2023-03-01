import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Picker, Case } from './components'
import { useSnapshot } from "valtio"
import state from "./state"

function App() {
  const snap = useSnapshot(state);

   const  removeCase = ()=>{
    state.items.removeCase = !state.items.removeCase
   }
   
   


  return (
    <>
    <button onClick={removeCase}>Open / Close Case</button>
      <Picker />
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }} >
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
        <Suspense fallback={null}>
          <Case/>
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
          {/* <Shoe/> */}
        </Suspense>
        <OrbitControls />
      </Canvas>

    </>
  );
}

export default App;
