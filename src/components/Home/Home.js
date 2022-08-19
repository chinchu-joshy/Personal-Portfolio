import React,{useEffect} from 'react'
import './Home.css'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
function Home() {
  useEffect(() => {
    
  const scene= new THREE.Scene()
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  const canvas= document.querySelector(".homeCanvas")
   const renderer=new THREE.WebGL1Renderer({canvas})
   const geometry=new THREE.BoxGeometry(1,1,1)
   const material= new THREE.MeshStandardMaterial({color:0x00ff00})
   const pointLight=new THREE.PointLight(0xffffff,1)
   pointLight.position.z=10
   const mesh=new THREE.Mesh(geometry,material)
   scene.add(mesh)
   scene.add(pointLight)
   camera.position.z=3
   const controls=new OrbitControls(camera,renderer.domElement)
   const animation=()=>{
    requestAnimationFrame(animation)
    renderer.setSize(window.innerWidth,window.innerHeight)
   renderer.render(scene,camera)
   }
   animation()
   
  }, [])
  
  return (
    <div className='home'>
     
      <canvas className='homeCanvas'></canvas>
    </div>
  )
}

export default Home