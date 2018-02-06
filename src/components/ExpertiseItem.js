import React from 'react'
import * as Color from '../utils/colors'
import styled from 'styled-components'
import { breakpoint } from '../layouts/breakpoints'

class ExpertiseItem extends React.Component {
  render() {
    return (
      <ExpertiseItemContainer className={this.props.className}>
        <ExpertiseContent>
          <Name>{this.props.name}</Name>
          <Desc><span>{this.props.descIntro}</span> {this.props.desc}</Desc>
          {this.props.activities && (
            <Activities>
              {this.props.activities.map((activity, index) => {
                return (
                  <li key={activity+index}>{activity}</li>
                )
              })}
            </Activities>
          )}
        </ExpertiseContent>
      </ExpertiseItemContainer>
    )
  }
}

const ExpertiseItemContainer = styled.div`
  margin: 2em 0em 4em 0em;
  color: ${Color.NeutralDark};
  ${breakpoint.for_phone_only`
    margin: 0em 0em 4em 0em;
  `}
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
`
const ExpertiseContent = styled.div`
`
const Name = styled.h4`
  margin-bottom: 0;
  color: ${Color.Primary};
  font-weight: 500;
`
const Desc = styled.div`
  & span {
    display: block;
    margin: 0.3em 0em 1em 0em;
    line-height: 1.7;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    color: #222428;
    letter-spacing: 0.384px;
  }
`
const Activities = styled.ul`
  padding-top: 1em;
  & li:before {
    content: "+";
    margin-right: 8px;
    color: ${Color.Primary};
    font-weight: 500;
  }
`
export default ExpertiseItem
