/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 BackGears.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BackGears(props) {
  const { nodes, materials } = useGLTF('/BackGears.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['BKT-PCIE-CA-Y201'].geometry} material={materials.LIMEGREEN} position={[0.048, 0.189, 0.007]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.001} />
      <mesh geometry={nodes['BKT-PCIE-CA-Y201001'].geometry} material={materials.LIMEGREEN} position={[0.048, 0.169, 0.007]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.001} />
      <mesh geometry={nodes['BKT-PCIE-CA-Y201002'].geometry} material={materials.LIMEGREEN} position={[0.048, 0.148, 0.007]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.001} />
      <mesh geometry={nodes['BKT-PCIE-CA-Y201003'].geometry} material={materials.LIMEGREEN} position={[0.048, 0.128, 0.007]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.001} />
      <mesh geometry={nodes['BKT-PCIE-CA-Y201004'].geometry} material={materials.LIMEGREEN} position={[0.048, 0.108, 0.007]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.001} />
      <mesh geometry={nodes['BKT-PCIE-CA-Y201005'].geometry} material={materials.LIMEGREEN} position={[0.048, 0.087, 0.007]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.001} />
      <mesh geometry={nodes['BKT-PCIE-CA-Y201006'].geometry} material={materials.LIMEGREEN} position={[0.048, 0.067, 0.007]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.001} />
      <mesh geometry={nodes['BKT-PCIE-V2-CA-Y201'].geometry} material={materials.LIMEGREEN} position={[-0.055, 0.051, 0.007]} rotation={[Math.PI / 2, 0, 0]} scale={0.001} />
      <mesh geometry={nodes['BKT-PCIE-V2-CA-Y201001'].geometry} material={materials.LIMEGREEN} position={[-0.075, 0.051, 0.007]} rotation={[Math.PI / 2, 0, 0]} scale={0.001} />
      <mesh geometry={nodes['BKT-PCIE-V2-CA-Y201002'].geometry} material={materials.LIMEGREEN} position={[-0.095, 0.051, 0.007]} rotation={[Math.PI / 2, 0, 0]} scale={0.001} />
      <mesh geometry={nodes['BKT-PCIE-V2-CA-Y201003'].geometry} material={materials.LIMEGREEN} position={[-0.116, 0.051, 0.007]} rotation={[Math.PI / 2, 0, 0]} scale={0.001} />
    </group>
  )
}

useGLTF.preload('/BackGears.glb')