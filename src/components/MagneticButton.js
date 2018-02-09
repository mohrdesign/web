import React from 'react'
import { mapValues, toNumber } from 'lodash'
import styled from 'styled-components'
import * as Color from '../utils/colors'


class MagneticButton extends React.Component {
	state = {
		window: { width: 800, height: 600 },
		mouse: { x: 0, y: 0 },
		isMagnetic: false,
		ease: { x: 0, y: 0, scale: 1 },
		bounds: {}
	};

	componentDidMount () {
		this.addEvents()
		this.run()
		setTimeout(() => this.resize(), 50);
	}

	addEvents () {
		window.addEventListener('resize', this.resize)
		document.addEventListener('mousemove', this.mouseMove)
	}

	resize = () => {
		const btn = this.btn.getBoundingClientRect()
		const state = {
			window: {
				width: window.innerWidth,
				height: window.innerHeight,
			},
			bounds: {
				width: btn.width,
				height: btn.height,
				top: btn.top,
				left: btn.left
			}
		}
		console.log(state)
		this.setState({...state})
	};

	mouseMove = ({pageX: x, pageY: y}) => {
		this.setState({
			mouse: { x, y },
			isMagnetic: this.isMagnetic(x, y)
		})
	};

	isMagnetic (x, y) {
		const { bounds } = this.state

		const centerX = bounds.left + (bounds.width / 2)
		const centerY = bounds.top + (bounds.height / 2)

		const a = Math.abs(centerX - x)
		const b = Math.abs(centerY - y)
		const c = Math.sqrt(a * a + b * b)

		return c < (bounds.width / 2) + this.getThreshold()
	}

	getThreshold () {
		const { isMagnetic } = this.state
		const { threshold, ratio } = this.props

		return isMagnetic ? threshold * ratio : threshold
	}

	run = () => {
		requestAnimationFrame(this.run)

		const ease = {...this.state.ease}
		const transform = this.getTransforms()

		Object.keys(transform).forEach(key => this.getEase(key, transform, ease))

		this.setState({ ease: this.fixValues(ease) })
	};

	getTransforms () {
		const { isMagnetic, mouse, window } = this.state
		const { max, scale } = this.props

		return ({
			x: isMagnetic ? (mouse.x - window.width / 2) / window.width * max : 0,
			y: isMagnetic ? (mouse.y - window.height / 2) / window.height * max : 0,
			scale: isMagnetic ? scale : 1
		})
	}

	getEase (key, target, value) {
		return value[key] += (target[key] - value[key]) * this.props.ease
	}

	fixValues (obj) {
		return mapValues(obj, x => toNumber(x.toFixed(2)))
	}

	render () {
		const { ratio } = this.props
		const isHoverClass = this.state.isMagnetic ? 'is-hover' : ''
		const { x, y, scale } = this.state.ease
    // console.log(x, y, scale)
		const style = {
			btn: { transform: `translate3d(${x}px, ${y}px, 0) scale(${(scale)})` },
			label: { transform: `translate3d(${-x / ratio}px, ${-y / ratio}px, 0) scale(${(1 / scale)})` }
		}

		return (
			<AttractButton style={style.btn} className={`c-magnetic-btn u-relative ${isHoverClass}`}  innerRef={(btn) => { this.btn = btn }}>
				<span className="t-btn-label u-flex u-center-xy" style={style.label}>{this.props.label}</span>
				<span className="o-circle u-fit u-absolute u-pos-tl"></span>
			</AttractButton>
		)
	}
}


const AttractButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  text-align: center;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  white-space: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

	position: absolute;
	right: 15em;
	width: 140px;
	height: 140px;
	border-radius: 50%;
	background-image: ${Color.GradientLight};
	color: ${Color.Primary};
	font-weight: 500;
	font-size: 1.4em;

	opacity: 0.88;

	&.is-hover {
		opacity: 1.0;
		background-image: ${Color.White};
		filter: drop-shadow(12px 12px 7px rgba(5,21,60,0.35));
	}

`

export default MagneticButton
