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

//!Adding text
const font = await new FontLoader().loadAsync("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json");
// Create text geometry
const textGeometry1 = new TextGeometry("48MP Main", {
  font: font,
  size: 0.3, // Size of the text
  depth: 0.000000000000001, // Depth of the text
  curveSegments: 20, // Number of segments for curves
  bevelEnabled: false, // Enable bevel effect
  bevelThickness: 1, // Thickness of the bevel
  bevelSize: 0.02, // Size of the bevel
  bevelSegments: 20, // Number of bevel segments
});
const textGeometry2 = new TextGeometry("2x Telephoto", {
  font: font,
  size: 0.3, // Size of the text
  depth: 0.000000000000001, // Depth of the text
  curveSegments: 20, // Number of segments for curves
  bevelEnabled: false, // Enable bevel effect
  bevelThickness: 0.01, // Thickness of the bevel
  bevelSize: 0.02, // Size of the bevel
  bevelSegments: 20, // Number of bevel segments
});
const textGeometry3 = new TextGeometry("Ultra Wide", {
  font: font,
  size: 0.3, // Size of the text
  depth: 0.000000000000001, // Depth of the text
  curveSegments: 20, // Number of segments for curves
  bevelEnabled: false, // Enable bevel effect
  bevelThickness: 0.01, // Thickness of the bevel
  bevelSize: 0.02, // Size of the bevel
  bevelSegments: 20, // Number of bevel segments
});
const textGeometry4 = new TextGeometry("6.12in", {
  font: font,
  size: 0.4, // Size of the text
  depth: 0.000000000000001, // Depth of the text
  curveSegments: 20, // Number of segments for curves
  bevelEnabled: false, // Enable bevel effect
  bevelThickness: 0.2, // Thickness of the bevel
  bevelSize: 0.2, // Size of the bevel
  bevelSegments: 20, // Number of bevel segments
});

// Create a material for the text
const textMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });

// Camera text
const cameraText1 = new THREE.Mesh(textGeometry1, textMaterial);
const cameraText2 = new THREE.Mesh(textGeometry2, textMaterial);
const cameraText3 = new THREE.Mesh(textGeometry3, textMaterial);

const displayText1 = new THREE.Mesh(textGeometry4, textMaterial);


cameraText1.position.set(-104.3, -16.5, 0.5);
cameraText2.position.set(94.2, -14.5, 0.5);
cameraText3.position.set(-104, -13.2, 0.5);
displayText1.position.set(40, -13.2, 0.5);

// Add the text mesh to the scene
scene.add(cameraText1, cameraText2, cameraText3, displayText1);

//!Adding camera lines
const material = new THREE.MeshStandardMaterial();
const geometry = new THREE.BoxGeometry(0.1, 1.5, 0.01);
//Camera1 Line
const cameraLines1 = new THREE.Mesh(geometry, material);
cameraLines1.position.set(-14.35, -13.9, 120);
cameraLines1.rotation.set(0, 0, 0.77);
//Camera2 Line
const cameraLines2 = new THREE.Mesh(geometry, material);
cameraLines2.position.set(-15.6, -13.38, 120);
cameraLines2.rotation.set(0, 0, 1.57);
//Camera3 Line
const cameraLines3 = new THREE.Mesh(geometry, material);
cameraLines3.position.set(-14.95, -16.2, 120);
cameraLines3.rotation.set(0, 0, -0.77);
//Camera4 Line
const cameraLines4 = new THREE.Mesh(geometry, material);
cameraLines4.position.set(-16.2, -16.7, 120);
cameraLines4.rotation.set(0, 0, 1.57);
//Camera5 Line
const cameraLines5 = new THREE.Mesh(geometry, material);
cameraLines5.position.set(7.25, -15.2, 120);
cameraLines5.rotation.set(0, 0, -0.77);
//Camera6 Line
const cameraLines6 = new THREE.Mesh(geometry, material);
cameraLines6.position.set(8.5, -14.68, 120);
cameraLines6.rotation.set(0, 0, 1.57);

//! Display lines
const displayGeometry = new THREE.BoxGeometry(0.15, 11, 0.01);
//Camera6
const displayLines1 = new THREE.Mesh(displayGeometry, material);
displayLines1.position.set(-38.5, -14.68, 120);
displayLines1.rotation.set(0, 0, 1.57);

scene.add(cameraLines1, cameraLines2, cameraLines3, cameraLines4, cameraLines5, cameraLines6, displayLines1);

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
const iphoneSec3 = [0, -28.5, -2, 0, 0, 0, 70, 70, 70];

//Camera lines
const cameraLines1Sec1 = [-14.35, -13.9, 6, 0, 0, 0.77, 1, 1, 1];
const cameraLines2Sec1 = [-15.6, -13.38, 6, 0, 0, 1.57, 1, 1, 1];
const cameraLines3Sec1 = [-14.95, -16.2, 6, 0, 0, -0.77, 1, 1, 1];
const cameraLines4Sec1 = [-16.2, -16.7, 6, 0, 0, 1.57, 1, 1, 1];
const cameraLines5Sec1 = [7.25, -15.2, 6, 0, 0, -0.77, 1, 1, 1];
const cameraLines6Sec1 = [8.5, -14.68, 6, 0, 0, 1.57, 1, 1, 1];

const cameraLines1Sec2 = [-2.15, -8.9, 0.5, 0, 0, 0.77, 1, 1, 1];
const cameraLines2Sec2 = [-3.4, -8.38, 0.5, 0, 0, 1.57, 1, 1, 1];
const cameraLines3Sec2 = [-2.1, -11.2, 0.5, 0, 0, -0.77, 1, 1, 1];
const cameraLines4Sec2 = [-3.35, -11.75, 0.5, 0, 0, 1.57, 1, 1, 1];
const cameraLines5Sec2 = [0.05, -9.55, 0.5, 0, 0, -0.77, 1, 1, 1];
const cameraLines6Sec2 = [1.3, -9.02, 0.5, 0, 0, 1.57, 1, 1, 1];

//Camera Text
const cameraText1Sec1 = [-24.35, -13.9, 0.5, 0, 0, 0, 1, 1, 1];
const cameraText2Sec1 = [14.35, -13.9, 0.5, 0, 0, 0, 1, 1, 1];
const cameraText3Sec1 = [-24.35, -13.9, 0.5, 0, 0, 0, 1, 1, 1];

const cameraText1Sec2 = [-4.7, -8.85, 0.5, 0, 0, 0, 1, 1, 1];
const cameraText2Sec2 = [0.5, -9.5, 0.5, 0, 0, 0, 1, 1, 1];
const cameraText3Sec2 = [-4.6, -11.58, 0.5, 0, 0, 0, 1, 1, 1];

//Display lines
const displayLines1Sec1 = [-38.5, -14.68, 0, 0, 0, 0.4, 1, 0, 1];
const displayLines1Sec2 = [0, -13.95, 0.5, 0, 0, 0.4, 1, 1, 1];

//Display text
const displayText1Sec1 = [40.2, -13.9, 10, 0, 0, -1.1, 1, 1, 1];
const displayText1Sec2 = [-.2, -13, 0.5, 0, 0, -1.15, 1, 1, 1];

//!Event listeners
window.addEventListener("scroll", () => {
  setModelTo();
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

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
    //Camera
    changeModelInfo(iphone, iphoneSec1, 1.5);
    //changeModelInfo(cameraLines1, cameraLines1Sec1, 1.69);
    //changeModelInfo(cameraLines2, cameraLines2Sec1, 1.69);
    //changeModelInfo(cameraLines3, cameraLines3Sec1, 1.69);
    //changeModelInfo(cameraLines4, cameraLines4Sec1, 1.69);
    //changeModelInfo(cameraLines5, cameraLines5Sec1, 1.69);
    //changeModelInfo(cameraLines6, cameraLines6Sec1, 1.69);
    //changeModelInfo(cameraText1, cameraText1Sec1, 1.69);
    //changeModelInfo(cameraText2, cameraText2Sec1, 1.69);
    //changeModelInfo(cameraText3, cameraText3Sec1, 1.69);
    //Display
    //changeModelInfo(displayText1, displayText1Sec1, 1.69);
    //changeModelInfo(displayLines1, displayLines1Sec1, 1.69);
    pointLight.position.set(15, 15, 30);
  } else if (window.scrollY / window.innerHeight < 1.15) {
    if (!sec2Mode) {
      //Camera
      changeModelInfo(iphone, iphoneSec2, 1.5);
      //changeModelInfo(cameraLines1, cameraLines1Sec2, 1.69);
      //changeModelInfo(cameraLines2, cameraLines2Sec2, 1.69);
      //changeModelInfo(cameraLines3, cameraLines3Sec2, 1.69);
      //changeModelInfo(cameraLines4, cameraLines4Sec2, 1.69);
      //changeModelInfo(cameraLines5, cameraLines5Sec2, 1.69);
      //changeModelInfo(cameraLines6, cameraLines6Sec2, 1.69);
      //changeModelInfo(cameraText1, cameraText1Sec2, 1.69);
      //changeModelInfo(cameraText2, cameraText2Sec2, 1.69);
      //changeModelInfo(cameraText3, cameraText3Sec2, 1.69);
      //Display
      //changeModelInfo(displayLines1, displayLines1Sec1, 1.69);
      //changeModelInfo(displayText1, displayText1Sec1, 1.69);
      //Light
      pointLight.position.set(-8, -12, 30);
  } else {
      //Camera
      changeModelInfo(iphone, iphoneSec2_1, 1.5);
      //changeModelInfo(cameraLines1, cameraLines1Sec1, 1.69);
      //changeModelInfo(cameraLines2, cameraLines2Sec1, 1.69);
      //changeModelInfo(cameraLines3, cameraLines3Sec1, 1.69);
      //changeModelInfo(cameraLines4, cameraLines4Sec1, 1.69);
      //changeModelInfo(cameraLines5, cameraLines5Sec1, 1.69);
      //changeModelInfo(cameraLines6, cameraLines6Sec1, 1.69);
      //changeModelInfo(cameraText1, cameraText1Sec1, 1.69);
      //changeModelInfo(cameraText2, cameraText2Sec1, 1.69);
      //changeModelInfo(cameraText3, cameraText3Sec1, 1.69);
      //Display
      //changeModelInfo(displayLines1, displayLines1Sec2, 1.69);
      //changeModelInfo(displayText1, displayText1Sec2, 1.69);
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
