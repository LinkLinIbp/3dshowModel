/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 WhiteSides.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function WhiteSides(props) {
  const { nodes, materials } = useGLTF('/WhiteSides.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['RG-PANEL-CA-Y302'].geometry} material={materials.GOLDENROD1} rotation={[Math.PI / 2, 0, 0]} scale={0.001} />
      <mesh geometry={nodes['TOP-COVER-CA-Y302'].geometry} material={materials.LIGHTSTEELBLUE2} rotation={[Math.PI / 2, 0, 0]} scale={0.001} onAfterRender={props.onAfterRender} />
    </group>
  )
}

useGLTF.preload('/WhiteSides.glb')
