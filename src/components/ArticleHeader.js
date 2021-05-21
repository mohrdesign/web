import React from 'react'
import styled from 'styled-components'
import { breakpoint } from '../layouts/breakpoints'
import * as Color from '../utils/colors'

class ArticleHeader extends React.Component {
  render() {
    return (
      <Intro subhead={this.props.withSubhead}>{this.props.children}</Intro>
    )
  }
}
const Intro = styled.h1`
  color: ${Color.Black};
  margin: 2em 0em;
  font-weight: 800;
  ${breakpoint.for_phone_only`
    font-size: 24px;
    line-height: 36px;
  `}
  ${breakpoint.for_tablet_portrait_up`
    font-size: 28px;
    line-height: 38px;
  `}
  ${breakpoint.for_tablet_landscape_up`
    font-size: 50px;
    line-height: 56px;
  `}
`
export default ArticleHeader
