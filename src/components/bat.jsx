

import React, { useRef } from 'react'
import { useGLTF,useScroll } from '@react-three/drei'
import gsap from 'gsap/gsap-core'
import { useFrame } from '@react-three/fiber'
import { useLayoutEffect } from 'react'

export function Bt(props) {
  const { nodes, materials } = useGLTF('/bt-transformed.glb')
  const bt=useRef()
  const scroll=useScroll();
  const tl=useRef()
  useFrame((state,delta)=>{
tl.current.seek(scroll.offset*tl.current.duration())
  })

  useLayoutEffect(()=>{
    tl.current=gsap.timeline({defaults:{duration:2,ease:'power1.inOut'}})
    tl.current
    .to(bt.current.rotation,{y:-1},4)
    .to(bt.current.rotation,{x:1},2)
    .to(bt.current.rotation,{y:1},6)
    .to(bt.current.rotation,{x:-1},6)

  },[])
  return (
    <group {...props} dispose={null} ref={bt}>
      <mesh geometry={nodes.Solid_203001.geometry} material={materials.PaletteMaterial001} position={[0, -1.588, -0.042]} scale={0.735} />
      <mesh geometry={nodes.Solid_203001_1.geometry} material={materials.strap} position={[0, -1.588, -0.042]} scale={0.735} />
      <mesh geometry={nodes.Solid_203001_2.geometry} material={materials.PaletteMaterial002} position={[0, -1.588, -0.042]} scale={0.735} />
      <mesh geometry={nodes.Solid_203001_4.geometry} material={materials.PaletteMaterial003} position={[0, -1.588, -0.042]} scale={0.735} />
      <mesh geometry={nodes.Solid_203001_5.geometry} material={materials['Material.002']} position={[0, -1.588, -0.042]} scale={0.735} />
      <mesh geometry={nodes.Solid_203001_6.geometry} material={materials.PaletteMaterial004} position={[0, -1.588, -0.042]} scale={0.735} />
      <mesh geometry={nodes.Solid_203001_7.geometry} material={materials.PaletteMaterial005} position={[0, -1.588, -0.042]} scale={0.735} />
    </group>
  )
}

useGLTF.preload('/bt-transformed.glb')
