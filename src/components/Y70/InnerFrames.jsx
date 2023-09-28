/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 InnerFrames.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function InnerFrames(props) {
  const { nodes, materials } = useGLTF('/InnerFrames.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['BOTTOM-PANEL-V3-CA-Y302'].geometry} material={materials.GRAY77} rotation={[Math.PI / 2, 0, 0]} scale={0.001} />
      <mesh geometry={nodes['PCIE-PLASTIC-SUPPORT-CA-Y302'].geometry} material={materials.LIGHTSTEELBLUE2} position={[-0.025, 0.038, 0.093]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.001} />
      <mesh geometry={nodes['GROMMET-NEW-6-30'].geometry} material={materials.LIGHTSTEELBLUE2} rotation={[Math.PI / 2, 0, 0]} scale={0.001} />
      <mesh geometry={nodes['PSU-BRACKET-CA-Y302'].geometry} material={materials.LIGHTSTEELBLUE2} position={[0.06, 0.055, 0.007]} rotation={[Math.PI / 2, 0, 0]} scale={0.001} />
      <mesh geometry={nodes['MB-SUPPORT-CA-Y302'].geometry} material={materials.LIGHTSTEELBLUE2} position={[0.059, 0.07, 0.019]} rotation={[Math.PI, Math.PI / 2, 0]} scale={0.001} />
    </group>
  )
}

useGLTF.preload('/InnerFrames.glb')
