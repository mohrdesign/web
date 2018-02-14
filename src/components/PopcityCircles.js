import React from 'react'
import * as Color from '../utils/colors'
import styled from 'styled-components'
import { TweenLite, TimelineMax } from 'gsap'
import GSAP from 'react-gsap-enhancer'
// import TransitionGroup, { Transition } from 'react-transition-group'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import { sample, find, without } from 'lodash'

const COLORS = ['#0074D9', '#FF851B', '#FF4136', '#85144b', '#2ECC40'];
let nextId = 0;

function appearAnim(utils) {
  return new TimelineMax()
    .from(utils.target, 0.7, {
      scale: 0,
      ease: Back.easeOut,
      onComplete: utils.options.callback,
    })
}

function leaveAnim(utils) {
  return new TimelineMax()
    .to(utils.target, 0.5, {
      scale: 0,
      ease: Sine.easeOut,
      onComplete: utils.options.callback,
    })
}

const Circle = GSAP()(React.createClass({
  componentWillEnter: function(callback) {
    this.addAnimation(appearAnim, {callback: callback})
  },
  componentWillLeave: function(callback) {
    console.log('componentWillLeave', callback)
    this.addAnimation(leaveAnim, {callback: callback})
  },
  handleClick: function(e) {
    e.stopPropagation()
    this.props.onClick(this.props.id)
  },
  render: function() {
    var r = 40
    var style = {
      position: 'absolute',
      left: this.props.x - r,
      top: this.props.y - r,
      backgroundColor: this.props.color,
      width: r * 2,
      height: r * 2,
      borderRadius: r,
    }

    return <div style={style} onClick={this.handleClick}/>
  }
}))


class Popcity extends React.Component {
  state = {
    circles: []
  }
  handleClick = (e) => {
    // var rootNode = ReactDOM.findDOMNode(this)
    // var {top, left} = this.rootNode.getBoundingClientRect()
    var newCircle = {
      id: nextId++,
      color: sample(COLORS),
      // x: e.clientX - left,
      // y: e.clientY - top,
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
      <div onClick={this.handleClick} style={containerStyle} innerRef={(mount) => { this.rootNode = mount }}>
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
