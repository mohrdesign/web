import React from 'react'
import * as Color from '../utils/colors'
import styled from 'styled-components'
import { TweenLite, TimelineMax } from 'gsap'
import GSAP from 'react-gsap-enhancer'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import { sample, find, without } from 'lodash'
import BkImg from '../assets/images/brooklyn.jpg'

function rand(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
}

function appearAnim(utils) {
  return new TweenLite
    .fromTo(utils.target, 1.2, {
      autoAlpha: 1,
      left: `${rand(25,75)}%`,
      rotation: rand(-20, 20),
      force3D: !0
    }, {
      top: "40%",
      rotation: rand(-10, 10),
      force3D: !0,
      ease: Expo.easeOut,
      onComplete: utils.options.callback
    })
}

function leaveAnim(utils) {
  return new TweenLite
    .to(utils.target, 1.5, {
      top: "130%",
      rotation: rand(-20, 20),
      force3D: !0,
      ease: Expo.easeIn,
      onComplete: utils.options.callback
    })
}

const Circle = GSAP()(React.createClass({
  componentWillEnter: function(callback) {
    this.addAnimation(appearAnim, {callback: callback})
  },
  componentDidEnter: function() {
    this.remove()
  },
  componentDidLeave: function() {
    console.log("gone")
  },
  componentWillLeave: function(callback) {
    this.addAnimation(leaveAnim, {callback: callback})
  },
  handleClick: function(e) {
    // e.stopPropagation()
    // this.props.onClick(this.props.id)
  },
  remove: function() {
    this.props.onClick(this.props.id)
  },
  render: function() {
    var r = 40
    var style = {
      // backgroundColor: this.props.color,
      background: `url(${BkImg}) center center no-repeat`,
      backgroundSize: '125%',
      width: '325px',
      height: '600px',
      borderRadius: r,
    }

    return <PopItem style={style} onClick={this.handleClick}/>
  }
}))

const PopItem = styled.div`
  position: absolute;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  visibility: hidden;
  top: 130%;
  left: -100%;
  max-height: 700px;
`


const COLORS = ['#0074D9', '#FF851B', '#FF4136', '#85144b', '#2ECC40'];
let nextId = 0;


class Popcity extends React.Component {
  state = {
    circles: []
  }
  handleClick = (e) => {
    var newCircle = {
      id: nextId++,
      color: sample(COLORS),
      x: e.clientX,
      y: e.clientY-120
    }
    this.setState({circles: this.state.circles.concat(newCircle)})
  }
  handleRemoveRequest = (id) => {
    const circles = this.state.circles
    const circle = find(circles, {id: id})
    this.setState({circles: without(circles, circle)})
  }
  render() {
    var containerStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
    }
    var handleRemoveRequest = this.handleRemoveRequest

    return (
      <div onClick={this.handleClick} style={containerStyle} ref={(mount) => { this.rootNode = mount }}>
        <TransitionGroup>
          {this.state.circles.map(function(circle) {
            return (
                <Circle
                  key={circle.id}
                  {...circle}
                  onClick={handleRemoveRequest}
                />
            )
          })}
        </TransitionGroup>
      </div>
    )
  }
}

export default Popcity
