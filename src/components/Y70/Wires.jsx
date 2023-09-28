/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 Wires.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Wires(props) {
  const { nodes, materials } = useGLTF('/Wires.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.046, 0.046, 0.051]} rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
        <mesh geometry={nodes['JD-PCIE-GPU-PCB-CA-Y101_1'].geometry} material={materials.GRAY65} />
        <mesh geometry={nodes['JD-PCIE-GPU-PCB-CA-Y101_2'].geometry} material={materials.LIMEGREEN} />
        <mesh geometry={nodes['JD-PCIE-GPU-PCB-CA-Y101_3'].geometry} material={materials.DEEPSKYBLUE4} />
      </group>
    </group>
  )
}

useGLTF.preload('/Wires.glb')
