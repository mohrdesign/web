import React, { Component } from 'react'
import * as THREE from 'three'
import triangleFile from '../../static/blue-glow.png'
import circleFile from '../../static/teal-glow.png'
import rectFile from '../../static/white-glow.png'
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

    const triTexture = THREE.ImageUtils.loadTexture(`${triangleFile}`);
    const triMaterial = new THREE.MeshLambertMaterial({emissive: 0x19FFCD, color: 0x336CF8, map: triTexture, transparent: true});
    const triGeo = new THREE.PlaneBufferGeometry(4.5,5.5);

    const circTexture = THREE.ImageUtils.loadTexture(`${circleFile}`);
    const circMaterial = new THREE.MeshLambertMaterial({emissive: 0x19FFCD, color: 0x336CF8, map: circTexture, transparent: true});
    const circGeo = new THREE.PlaneBufferGeometry(5,5);

    const rectTexture = THREE.ImageUtils.loadTexture(`${rectFile}`);
    const rectMaterial = new THREE.MeshLambertMaterial({emissive: 0x19FFCD, color: 0x336CF8, map: rectTexture, transparent: true});
    const rectGeo = new THREE.PlaneBufferGeometry(5,5);

    const smokeTexture = THREE.ImageUtils.loadTexture(`${smokeFile}`);
    const smokeMaterial = new THREE.MeshLambertMaterial({color: 0x336CF8, map: smokeTexture, transparent: true});
    const smokeGeo = new THREE.PlaneBufferGeometry(500,500);

    const sample = this.uniformRandomSampler(100, 100, 900, 50);

    const particleObject = [
      { "texture": triTexture, "material": triMaterial, "geo": triGeo },
      { "texture": circTexture, "material": circMaterial, "geo": circGeo },
      { "texture": rectTexture, "material": rectMaterial, "geo": rectGeo },
    ]

    const particles = []
    for (let p = 0; p < 50; p++) {
      let ptype = Math.round(Math.random()*2);
      const particle = new THREE.Mesh(particleObject[ptype].geo,particleObject[ptype].material);
      let s = sample();
      particle.position.set(s[0]-50,s[1]-130,s[2]);
      particle.rotation.z = Math.random() * 360;
      const multiplier = Math.random()*6-3;
      particle.scale.set(multiplier, multiplier, multiplier);
      scene.add(particle);
      particles.push(particle);
    }
    const smokeParticles = []
    for (let p = 0; p < 16; p++) {
        const particle = new THREE.Mesh(smokeGeo,smokeMaterial);
        particle.position.set(0,-230,Math.random()*1000-100);
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        smokeParticles.push(particle);
    }

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.clock = clock
    this.particles = particles
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
    this.evolveShapes(delta)
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }
  evolveShapes(d) {
    let sp = this.smokeParticles.length;
    while(sp--) {
      this.smokeParticles[sp].rotation.z += (d * 0.05);
    }
    let p = this.particles.length;
    while(p--) {
      this.particles[p].rotation.z += (d * 0.1);
    }
  }
  uniformRandomSampler(width, height, depth, numSamplesMax) {
    let numSamples = 0;
    return function() {
      if (++numSamples > numSamplesMax) return;
      return [Math.random() * width, Math.random() * height, Math.random() * depth];
    };
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
  transition: opacity 4s cubic-bezier(.77,.01,.23,.99);
  &.shown {
    opacity: 1;
  }
  & canvas {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
  }
`
export default Scene
