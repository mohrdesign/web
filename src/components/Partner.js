import React from 'react'
import * as Color from '../utils/colors'
import styled from 'styled-components'
import { breakpoint } from '../layouts/breakpoints'
import { GatsbyImage } from "gatsby-plugin-image";

class Partner extends React.Component {
  render() {
    return (
      <PersonContainer>
        <ImageContainer>
          <GatsbyImage image={this.props.img} alt={`Portrait of ${this.props.name}`} />
        </ImageContainer>
        <Bio>
          <Name>{this.props.name}</Name>
          <Desc>{this.props.desc}</Desc>
        </Bio>
      </PersonContainer>
    )
  }
}
const PersonContainer = styled.div`
  margin-bottom: 3em;
  margin-top: 3em;
  @supports (display:grid) {
    margin-top: 0;
  }
  ${breakpoint.for_phone_only`
    margin-bottom: 0em;
  `}
`
const ImageContainer = styled.div`
  width: 280px;
  @supports (display:grid) {
    width: auto;
  }
  & > .gatsby-image-wrapper {
    width: auto;
    height: 35vh;
    ${breakpoint.for_phone_only`
      height: 30vh;
    `}
    img {
      object-fit: cover !important;
      object-position: 50% 30% !important;
    }
  }
`
const Bio = styled.div`
  margin-top: 1em;
`
const Name = styled.h4`
  margin-bottom: 0;
  color: inherit;
  font-size: 18px;
  font-weight: 500;
`
const Desc = styled.div`
  margin-top: 0;
  & a, & a:visited {
    color: ${Color.Primary};
    text-decoration: none;
  }
  & a:hover {
    text-decoration: underline;
  }
`
export default Partner
