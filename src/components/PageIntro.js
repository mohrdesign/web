import React from 'react'
import styled from 'styled-components'
import { breakpoint } from '../layouts/breakpoints'
import * as Color from '../utils/colors'

class PageIntro extends React.Component {
  render() {
    return (
      <Intro inpage={this.props.inPage} subhead={this.props.withSubhead}>{this.props.children}</Intro>
    )
  }
}
const Intro = styled.h3`
  color: ${props => props.inpage ? Color.White : Color.Primary};
  margin: ${props => props.inpage
            ? '0.2em 0em 1em 0em'
            : props => props.subhead ? '3em 0em 1em 0em' : '3em 0em 5em 0em'
  };
  width: ${props => props.inpage ? '' : '22em'};
  max-width: 90%;
  ${breakpoint.for_phone_only`
    font-size: 24px;
    line-height: 36px;
  `}
  ${breakpoint.for_tablet_portrait_up`
    font-size: 28px;
    line-height: 38px;
  `}
  ${breakpoint.for_tablet_landscape_up`
    font-size: 32px;
    line-height: 45px;
  `}
`
export default PageIntro
