import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import moonimage from "../../images/moon.png";
import venusimage from "../../images/venus.png";
import spaceimage from "../../images/space.png";
import Typography from "@mui/material/Typography";
import TimeLineComponent from "../TimeLine/TimeLine";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
import Footer from "../Footer/Footer";
function Home() {
  useEffect(() => {
    const moonTexture = new THREE.TextureLoader().load(moonimage);
    const venusTexture = new THREE.TextureLoader().load(venusimage);
    const spaceTexture = new THREE.TextureLoader().load(spaceimage);
    const scene = new THREE.Scene();
    scene.background = spaceTexture;
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.lookAt(0, 0, 0);
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGL1Renderer({ canvas, antialias: true });
    // adding venus

    const venusGeometry = new THREE.SphereBufferGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    venusMaterial.polygonOffset = true;
    venusMaterial.polygonOffsetFactor = -0.1;
    venusMaterial.needsUpdate = true;
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);
    venusMaterial.needsUpdate = true;

    scene.add(venus);
    //  adding moon

    const geometry = new THREE.SphereBufferGeometry(2, 64, 64);
    const material = new THREE.MeshStandardMaterial({ map: moonTexture });
    material.polygonOffset = true;
    material.polygonOffsetFactor = -0.1;
    material.needsUpdate = true;
    const moon = new THREE.Mesh(geometry, material);
    moon.position.set(0, 0, 0);
    scene.add(moon);
    window.scene = scene;

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    scene.add(pointLight);
    scene.add(pointLight2);
    camera.position.set(4, 4, 8);
    // event listeners
    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });
    window.addEventListener("resize", onResize, false);

    renderer.setSize(window.innerWidth, window.innerHeight);
    const animation = () => {
      requestAnimationFrame(animation);
      moon.rotation.y += 0.01;
      controls.update();
      renderer.render(scene, camera);
    };

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
    animation();
    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }, []);
  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>

        <TimeLineComponent timelines={[1, 2, 3, 4]}></TimeLineComponent>
      </div>
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpoZ7EKLGjiSHVQ_kdWoSy93iD0LlMzbJ4hg&usqp=CAU"
              alt="Face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzc86z1xf-2RODl1_NcBf19F4o8fXOxCjt7A&usqp=CAU"
              alt="Face2"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRliUVYrPGdUvB1us2So8CKLrd6fEC91vTNOA&usqp=CAU"
              alt="Face3"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKdU2_GS4cMydKtpsD9zdPksMaTWDyUbzefQ&usqp=CAU"
              alt="Face4"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIlApXSoEkRlaXWLaOUZXzCEZE-5BlCihjzg&usqp=CAU"
              alt="Face5"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3izvy0Xp79-YP16rJXAK6bRDdFQZ8xcpWzA&usqp=CAU"
              alt="Face6"
            />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeSkillsBox">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
      </div>
      <div className="homeYoutube">
        <Typography variant="h3">Youtube videos</Typography>
        <div className="homeYoutubeWrapper">
          <YoutubeCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPG3FSInBEivwD3DhE37p6GSbt26TA6ozIcQ&usqp=CAU" title="sample video"/>
          <YoutubeCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPG3FSInBEivwD3DhE37p6GSbt26TA6ozIcQ&usqp=CAU" title="sample video"/>
          <YoutubeCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPG3FSInBEivwD3DhE37p6GSbt26TA6ozIcQ&usqp=CAU" title="sample video"/>
          <YoutubeCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHE5R0j74WcLtOIdEB4wfmDAdaEmFybcxlg&usqp=CAU" title="sample video"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Home;
