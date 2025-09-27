import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import { Planet } from './planets.js';

// initialize the scene
const scene = new THREE.Scene();

// add objects to the scene
const sunGeometry = new THREE.SphereGeometry(10);
const sunTexture = new THREE.TextureLoader().load('/sun.jpg');
const sunMaterial = new THREE.MeshBasicMaterial({map: sunTexture});
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sunMesh);

// mercury

const mercury = new Planet(2, 15, "./imgs/mercary.jpg");
const mercuryMesh = mercury.getMesh();
scene.add(mercuryMesh);

const mercuryPivot = new THREE.Object3D();
scene.add(mercuryPivot);
mercuryPivot.add(mercuryMesh);

// venus

const venus = new Planet(3, 25, "./imgs/Venus.jpg");
const venusMesh = venus.getMesh();
scene.add(venusMesh);

const venusPivot = new THREE.Object3D();
scene.add(venusPivot);
venusPivot.add(venusMesh);

// earth

const earth = new Planet(4, 35, "./imgs/earth.jpg");
const earthMesh = earth.getMesh();
scene.add(earthMesh);

const earthPivot = new THREE.Object3D();
scene.add(earthPivot);
earthPivot.add(earthMesh);

// mars

const mars = new Planet(3, 45, "./imgs/mars.webp");
const marsMesh = mars.getMesh();
scene.add(marsMesh);

const marsPivot = new THREE.Object3D();
scene.add(marsPivot);
marsPivot.add(marsMesh);

// jupiter

const jupiter = new Planet(8, 65, "./imgs/jupiter.jpg");
const jupiterMesh = jupiter.getMesh();
scene.add(jupiterMesh);

const jupiterPivot = new THREE.Object3D();
scene.add(jupiterPivot);
jupiterPivot.add(jupiterMesh);

// saturn

const saturn = new Planet(7, 85, "./imgs/saturn.jpg");
const saturnMesh = saturn.getMesh();
scene.add(saturnMesh);

const saturnPivot = new THREE.Object3D();
scene.add(saturnPivot);
saturnPivot.add(saturnMesh);

// uranus

const uranus = new Planet(5, 105, "./imgs/uranus.jpg");
const uranusMesh = uranus.getMesh();
scene.add(uranusMesh);

const uranusPivot = new THREE.Object3D();
scene.add(uranusPivot);
uranusPivot.add(uranusMesh);

// neptune

const neptune = new Planet(5, 120, "./imgs/neptune.jpg");
const neptuneMesh = neptune.getMesh();
scene.add(neptuneMesh);

const neptunePivot = new THREE.Object3D();
scene.add(neptunePivot);
neptunePivot.add(neptuneMesh);

// add backdrop texture

const loader = new THREE.TextureLoader();
const bgTexture = loader.load('./imgs/backdrop.jpg');
bgTexture.colorSpace = THREE.SRGBColorSpace;
scene.background = bgTexture;

// initialize the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.z = 128;

//initialize the render
const canvas = document.getElementById('threeCanvas');
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene,camera);

//add controls
const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 5, 0);
controls.update();

const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.AmbientLight(color, intensity);
scene.add(light);

const sunLight = new THREE.PointLight(color, 2, 500);
sunLight.position.set(0,0,0);
scene.add(sunLight);

const earth_year = 2 * Math.PI * (1 / 60) * (1 / 60);

function animate() {
  // planet rotation
  sunMesh.rotation.y += 0.001;
  mercuryMesh.rotation.y += earth_year * 4;
  venusMesh.rotation.y += earth_year * 2;
  earthMesh.rotation.y += earth_year;
  marsMesh.rotation.y += earth_year * 0.5;
  jupiterMesh.rotation.y += earth_year * 2.4;
  saturnMesh.rotation.y += earth_year * 2.3;
  uranusMesh.rotation.y -= earth_year;
  neptuneMesh.rotation.y += earth_year * 1.5;

  // Orbit around the sun
  mercuryPivot.rotation.y += 0.02;
  venusPivot.rotation.y += 0.015;
  earthPivot.rotation.y += 0.01;
  marsPivot.rotation.y += 0.008;
  jupiterPivot.rotation.y += 0.006;
  saturnPivot.rotation.y += 0.005;
  uranusPivot.rotation.y += 0.003;
  neptunePivot.rotation.y += 0.002;

  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate()