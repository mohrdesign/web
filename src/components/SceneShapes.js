import React, { Component } from 'react'
import * as THREE from 'three'
import MeshLine from 'three.meshline'
import smokeFile from '../../static/smoke.png'

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
    scene.add( this.camera );

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setClearColor( 0xffffff, 0);
    renderer.setSize( width, height );

    const clock = new THREE.Clock()

    THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS

    const light = new THREE.DirectionalLight(0xffffff,2.3);
    light.position.set(-1,0,1);
    scene.add(light);

    const smokeTexture = THREE.ImageUtils.loadTexture(`${smokeFile}`);
    const smokeMaterial = new THREE.MeshLambertMaterial({color: 0x336CF8, map: smokeTexture, transparent: true});
    const smokeGeo = new THREE.PlaneBufferGeometry(300,300);

    const smokeParticles = []
    for (let p = 0; p < 6; p++) {
        const particle = new THREE.Mesh(smokeGeo,smokeMaterial);
        particle.position.set(Math.random()*500-250,Math.random()*500-250,Math.random()*1000-100);
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        smokeParticles.push(particle);
    }

    const shapeGroup = new THREE.Group();
    shapeGroup.position.y = -50;
    shapeGroup.position.x = 0;
    scene.add( shapeGroup );

    // Triangle
    var triangleShape = new THREE.Shape();
    triangleShape.moveTo( 80, 20 );
    triangleShape.lineTo( 40, 80 );
    triangleShape.lineTo( 120, 80 );
    triangleShape.lineTo( 80, 20 ); // close path

    // Square
    var sqLength = 80;
    var squareShape = new THREE.Shape();
    squareShape.moveTo( 0, 0 );
    squareShape.lineTo( 0, sqLength );
    squareShape.lineTo( sqLength, sqLength );
    squareShape.lineTo( sqLength, 0 );
    squareShape.lineTo( 0, 0 );

    // Circle
    var circleRadius = 40;
    var circleShape = new THREE.Shape();
    circleShape.moveTo( 0, circleRadius );
    circleShape.quadraticCurveTo( circleRadius, circleRadius, circleRadius, 0 );
    circleShape.quadraticCurveTo( circleRadius, - circleRadius, 0, - circleRadius );
    circleShape.quadraticCurveTo( - circleRadius, - circleRadius, - circleRadius, 0 );
    circleShape.quadraticCurveTo( - circleRadius, circleRadius, 0, circleRadius );

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.clock = clock
    this.smokeParticles = smokeParticles
    this.shapeGroup = shapeGroup
    this.triangleShape = triangleShape
    this.squareShape = squareShape
    this.circleShape = circleShape
    this.shapeArray = []
    this.rotationArray = []

    this.addLineShape( triangleShape, 0xffffff, 0,  0, 0, 0, 0, 0, 0.7, shapeGroup );
    this.addLineShape( squareShape, 0xffffff,  0,  0, 0, 0, 0, 0, 0.7, shapeGroup );
    this.addLineShape( circleShape, 0xffffff,  0,  0, 0, 0, 0, 0, 0.7, shapeGroup );
    this.addLineShape( triangleShape, 0xffffff, 0,  0, 0, 0, 0, 0, 0.7, shapeGroup );
    this.addLineShape( squareShape, 0xffffff,  0,  0, 0, 0, 0, 0, 0.7, shapeGroup );
    this.addLineShape( circleShape, 0xffffff,  0,  0, 0, 0, 0, 0, 0.7, shapeGroup );

    this.prepRotations()

    this.mount.appendChild(this.renderer.domElement)
    this.start()
  }

  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
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
    this.evolveShapes(delta)
    this.frameId = window.requestAnimationFrame(this.animate)
    this.renderScene()
  }

  prepRotations() {
    for(let i=0;i<this.shapeArray.length;i++) {
      this.rotationArray[i] = this.getRandomAxis()
    }
  }
  addLineShape( shape, color, x, y, z, rx, ry, rz, s, shapeGroup ) {
  	// lines
  	shape.autoClose = true;
  	var points = shape.getPoints();
  	var geometryPoints = new THREE.BufferGeometry().setFromPoints( points );
  	// solid line
  	var line = new THREE.Line( geometryPoints, new THREE.LineBasicMaterial( { color: color, linewidth: 1 } ) );
  	line.position.set( x, y, z - 25 );
  	line.rotation.set( rx, ry, rz );
    const rndscale = Math.random() * 0.5;
  	line.scale.set( rndscale, rndscale, rndscale);

    line.position.x = Math.random() * 2 - 1;
    line.position.y = Math.random() * 2 - 1;
    line.position.z = Math.random() * 2 - 1;
    // line.rotation.z = Math.random() * 2 - 1;
    line.position.normalize();
    line.position.multiplyScalar( 150 );

    this.scene.add( line );
    this.shapeArray.push(line);
  	// shapeGroup.add( line );
  }

  evolveSmoke(d) {
    let sp = this.smokeParticles.length;
    while(sp--) {
      this.smokeParticles[sp].rotation.z += (d * 0.05);
    }
  }

  getRandomAxis() {
    return new THREE.Vector3(Math.random(),Math.random(),Math.random())
  }

  evolveShapes(d) {
    let p = this.shapeArray.length;
    while (p--) {
      this.rotateAroundWorldAxis(this.shapeArray[p], this.rotationArray[p], Math.PI / 1720)
    }
  }

  rotateAroundWorldAxis(object, axis, radians) {
      const rotWorldMatrix = new THREE.Matrix4();
      rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
      rotWorldMatrix.multiply(object.matrix);
      object.matrix = rotWorldMatrix;
      object.rotation.setFromRotationMatrix(object.matrix);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div
        style={{ position: 'absolute', top: '0', left: '0', zIndex: '-1', width: '100%', height: '100%' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default Scene
