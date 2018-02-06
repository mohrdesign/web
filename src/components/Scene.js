import React, { Component } from 'react'
import * as THREE from 'three'
import smokeFile from '../../static/smoke.png'
import styled from 'styled-components'

class Scene extends Component {
  constructor(props) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }
  componentDidMount() {
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera( 5, width / height, 1, 10000 );
    camera.position.z = 1800;
    scene.add( camera );

    let mouse = {x:0,y:0};
    const cameraMoves = {x:0,y:0,z:-0.1,move:false,speed:0.1};

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setClearColor( 0xffffff, 0);
    renderer.setSize( width, height );
    renderer.domElement.id = 'smokeCanvas';

    const clock = new THREE.Clock()

    THREE.ImageUtils.crossOrigin = '';

    const light = new THREE.DirectionalLight(0xffffff,2.3);
    light.position.set(-1,0,1);
    scene.add(light);

    const smokeTexture = THREE.ImageUtils.loadTexture(`${smokeFile}`);
    const smokeMaterial = new THREE.MeshLambertMaterial({color: 0x336CF8, map: smokeTexture, transparent: true});
    const smokeGeo = new THREE.PlaneBufferGeometry(500,500);

    const smokeParticles = []
    for (let p = 0; p < 16; p++) {
        const particle = new THREE.Mesh(smokeGeo,smokeMaterial);
        // particle.position.set(Math.random()*500-250,Math.random()*500-680,Math.random()*1000-100);
        particle.position.set(0,-230,Math.random()*1000-100);
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        smokeParticles.push(particle);
    }

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.clock = clock
    this.smokeParticles = smokeParticles
    this.mount.appendChild(this.renderer.domElement)
    this.mouse = mouse
    this.cameraMoves = cameraMoves

    this.start()
    this.mount.className += " shown";
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("mousemove", this.mouseMove);
  }
  mouseMove = (e) => {
    this.camera.position.x += Math.max(Math.min((e.clientX - this.mouse.x) * 0.01, this.cameraMoves.speed), -this.cameraMoves.speed);
    this.camera.position.y += Math.max(Math.min((this.mouse.y - e.clientY) * 0.01, this.cameraMoves.speed), -this.cameraMoves.speed);
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }
  updateDimensions = () => {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }
  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
    window.removeEventListener("resize", this.updateDimensions);
    window.removeEventListener("mousemove", this.mouseMove);
  }
  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
  stop() {
    cancelAnimationFrame(this.frameId)
  }
  animate() {
    let delta = this.clock.getDelta()
    this.evolveSmoke(delta)
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }
  evolveSmoke(d) {
    let sp = this.smokeParticles.length;
    while(sp--) {
      this.smokeParticles[sp].rotation.z += (d * 0.05);
    }
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <SmokeScene
        innerRef={(mount) => { this.mount = mount }}
      />
    )
  }
}

const SmokeScene = styled.div`
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  transition: opacity 2s cubic-bezier(.77,.01,.23,.99);
  &.shown {
    opacity: 1;
  }
  & canvas {
    background-image: linear-gradient(123deg, #1E59E2 0%, #4A178A 100%);
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
  }
`
export default Scene
