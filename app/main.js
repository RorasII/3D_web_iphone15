import "./style.css";
import "./style.css";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { TTFLoader } from "three/examples/jsm/loaders/TTFLoader.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import gsap from "gsap";

//!Setting scene and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
  alpha: true,
});

//!Adding model
const iphoneModel = await new GLTFLoader().loadAsync("source/iphone_15_pro.glb");
const iphone = iphoneModel.scene;
iphone.position.set(3, -15, 3);
iphone.rotation.set(-1.3, 0, 1.57);
iphone.scale.set(70, 70, 70);
scene.add(iphone);

//!Adding lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(15, 15, 30);
pointLight.intensity = 2000;
scene.add(pointLight);

//!Setting renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(10);

//!Position x,y,z Rotation, x,y,z Scale x,y,z
//Phone
const iphoneSec1 = [0, 0, 0, 0, 3.14, 0, 70, 70, 70];
const iphoneSec2 = [0, -14, 0, 0, 0, 0, 70, 70, 70];
const iphoneSec2_1 = [0, -14, 0, 0, 3.14, 0, 70, 70, 70];
const iphoneSec3 = [0, -48.5, -2, 0, 0, 0, 70, 70, 70];

//!Event listeners
window.addEventListener("scroll", () => {
  setModelTo();
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  currentCardsDistance = 0;
  cardsMovement();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

//!Functions
function changeModelInfo(model, array, time) {
  gsap.to(model.position, { x: array[0], duration: time, y: array[1], duration: time, z: array[2], duration: time });
  gsap.to(model.rotation, { x: array[3], duration: time, y: array[4], duration: time, z: array[5], duration: time });
  gsap.to(model.scale, { x: array[6], duration: time, y: array[7], duration: time, z: array[8], duration: time });
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function setModelTo() {
  camera.position.y = (-window.scrollY / window.innerHeight) * 15;
  if (window.scrollY / window.innerHeight - 0.5 > 0 && window.scrollY / window.innerHeight - 0.5 < 1) {
    document.getElementById("section2").style.marginInline = 6.5 * (window.scrollY / window.innerHeight - 0.5) + "vw";
    document.getElementById("section2").style.borderRadius = 5 * (window.scrollY / window.innerHeight - 0.5) + "vw";
  } else if (window.scrollY / window.innerHeight - 0.5 < 0) {
    document.getElementById("section2").style.marginInline = "0vw";
    document.getElementById("section2").style.borderRadius = "0vw";
  } else {
    document.getElementById("section2").style.marginInline = "6.5vw";
    document.getElementById("section2").style.borderRadius = "5vw";
  }
  if (window.scrollY / window.innerHeight < 0.4) {
    changeModelInfo(iphone, iphoneSec1, 1.5);
    //Light
    pointLight.position.set(15, 15, 30);
  } else /*if (window.scrollY / window.innerHeight < 1.15)*/ {
    if (!sec2Mode) {
      changeModelInfo(iphone, iphoneSec2, 1.5);
      //Light
      pointLight.position.set(-8, -12, 30);
  } else {
      changeModelInfo(iphone, iphoneSec2_1, 1.5);
      //Light
      pointLight.position.set(15, -12, 30);
    }
  } 
}

let currentCardsDistance = 0;

function cardsMovement(scrollRight) {
  let cardsLenght = document.getElementById("cards").scrollWidth - document.getElementById("cards").offsetWidth;
  const scrollValue = (document.querySelector(".card").scrollWidth / 3) * 2;
  document.getElementById("leftButton").classList.remove("disabled");
  document.getElementById("rightButton").classList.remove("disabled");
  if (scrollRight) {
    currentCardsDistance += scrollValue;
  } else {
    currentCardsDistance -= scrollValue;
  }
  if (currentCardsDistance > cardsLenght) {
    currentCardsDistance = cardsLenght;
    document.getElementById("rightButton").classList.add("disabled");
  } else if (currentCardsDistance < 0) {
    currentCardsDistance = 0;
    document.getElementById("leftButton").classList.add("disabled");
  }
  document.getElementById("cards").style.transform = "translateX(" + -currentCardsDistance + "px)";
}

let sec2Mode = 0;
document.getElementById("rightButton").addEventListener("click", () => cardsMovement(true));
document.getElementById("leftButton").addEventListener("click", () => cardsMovement(false));
document.getElementById("changeMode").addEventListener("click", () => {
  sec2Mode ? (sec2Mode = 0) : (sec2Mode = 1);
  setModelTo()
  //gsap.to(iphone.rotation, { y: iphone.rotation.y + Math.PI, duration: 1, });
});

animate();
setModelTo();
