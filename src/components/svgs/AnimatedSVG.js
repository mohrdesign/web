import React from 'react'
import MtSvgLines from 'react-mt-svg-lines';
import SVGUnderstanding from './SVGUnderstanding'
import SVGArticulating from './SVGArticulating'
import SVGMaking from './SVGMaking'
import SVGExecuting from './SVGExecuting'
import Waypoint from 'react-waypoint'

class AnimatedSVG extends React.Component {
  state = {
    hasAnimated: false,
    displayState: "hide"
  }
  renderSVG = (svg) => {
    switch(svg) {
      case "making":
        return <SVGMaking/>
        break;
      case "understanding":
        return <SVGUnderstanding/>
        break;
      case "articulating":
        return <SVGArticulating/>
        break;
      case "executing":
        return <SVGExecuting/>
        break;
      default:
        break;
    }
  }
  animate = () => {
    if(!this.state.hasAnimated) {
      this.setState({displayState: 100});
      this.setState({hasAnimated: true});
    }
  }
  render() {
    const bottomOffset = this.props.bOffset || "30%";
    const duration = this.props.duration || 1000;
    const debugMode = this.props.debug || false;
    const waypoint_offset = {topOffset: "0%", bottomOffset: bottomOffset};
    return (
      <Waypoint {...waypoint_offset} debug={debugMode} onEnter={() => this.animate()}>
        <div>
          <MtSvgLines animate={ this.state.displayState } duration={ duration }>
            {this.renderSVG(this.props.svg)}
          </MtSvgLines>
        </div>
      </Waypoint>
    )
  }
}

export default AnimatedSVG
