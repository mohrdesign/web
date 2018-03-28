import React from 'react'
import * as Color from '../utils/colors'
import styled from 'styled-components'
import { TweenLite, TimelineLite, TimelineMax } from 'gsap'
import GSAP from 'react-gsap-enhancer'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import { sample, find, without } from 'lodash'
import pdxpng from '../assets/images/portland.png'
import bkpng from '../assets/images/brooklyn.png'
import dnvpng from '../assets/images/denver.png'

function rand(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
}

function appearAnim(utils) {
  var tl = new TimelineLite();
  tl.add( TweenLite.fromTo(utils.target, 1.2, {
    autoAlpha: 1,
    left: `${rand(25,75)}%`,
    rotation: rand(-20, 20),
    force3D: !0
  }, {
    top: "60%",
    rotation: rand(-10, 10),
    force3D: !0,
    ease: Expo.easeOut
  }) );
  tl.add( TweenLite.to(utils.target, 1.5, {
    top: "150%",
    rotation: rand(-20, 20),
    force3D: !0,
    ease: Expo.easeIn,
    onComplete: utils.options.callback
  }) );
  return tl
}

const PopAsset = {
  brooklyn: {
    style: {
      height: '141px',
      width: '409px',
      background: `url(${bkpng}) center center no-repeat`,
      mixBlendMode: 'overlay',
      backgroundSize: '100%',
    }
  },
  denver: {
    style: {
      height: '350px',
      width: '336px',
      background: `url(${dnvpng}) center center no-repeat`,
      mixBlendMode: 'overlay',
      backgroundSize: '100%',
    }
  },
  portland: {
    style: {
      height: '413px',
      width: '412px',
      background: `url(${pdxpng}) center center no-repeat`,
      mixBlendMode: 'overlay',
      backgroundSize: '100%',
    }
  }
}

const Popup = GSAP()(React.createClass({
  componentWillEnter: function(callback) {
    this.addAnimation(appearAnim, {callback: callback})
  },
  componentDidEnter: function() {
    this.remove()
  },
  remove: function() {
    this.props.onClick(this.props.id)
  },
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  },
  render: function() {
    return (<PopItem style={PopAsset[this.props.city].style}></PopItem>)
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
  top: 150%;
  left: -100%;
  max-height: 700px;
`

let nextId = 0;


class Popcity extends React.Component {
  state = {
    popups: []
  }
  handleClick = (city) => {
    var newPopup = {
      id: nextId++,
      city: city
    }
    this.setState({popups: this.state.popups.concat(newPopup)})
  }
  handleRemoveRequest = (id) => {
    const popups = this.state.popups
    const popup = find(popups, {id: id})
    this.setState({popups: without(popups, popup)})
  }
  render() {
    var handleRemoveRequest = this.handleRemoveRequest

    return (
      <PopDiv>
        <Container ref={(mount) => { this.rootNode = mount }}>
          <TransitionGroup>
            {this.state.popups.map(function(popup) {
              return (
                  <Popup
                    key={popup.id}
                    {...popup}
                    onClick={handleRemoveRequest}
                  />
              )
            })}
          </TransitionGroup>
        </Container>
      </PopDiv>
    )
  }
}


const PopDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  &:after {
    clear: both;
  }
  &:after, &:before {
    content: ''
    display: table;
  }
`
const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export default Popcity
