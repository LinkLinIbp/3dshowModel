/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 BackFans.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BackFans(props) {
  const { nodes, materials } = useGLTF('/BackFans.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['FAN-120003'].geometry} material={materials.CYAN4} position={[-0.055, 0.299, 0.019]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.001} />
    </group>
  )
}

useGLTF.preload('/BackFans.glb')