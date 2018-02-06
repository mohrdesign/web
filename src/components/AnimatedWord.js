import React from 'react'
import styled from 'styled-components'
import FadeTransition from './FadeTransition';

class AnimatedWord extends React.Component {
  state = {
    show: false
  }
  componentDidMount() {
    this.setState({show: this.props.show})
  }
  componentWillReceiveProps(nextProps) {
    this.setState({show: !!nextProps.show})
  }
  render() {
    const { show } = this.state
    const { delay, duration } = this.props
    return(
      <FadeTransition in={!!show} delay={delay}>
        {this.props.children}
      </FadeTransition>
    )
  }
}

export default AnimatedWord
