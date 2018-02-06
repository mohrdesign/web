import React from 'react'
import * as Color from '../utils/colors'
import styled from 'styled-components'
import { breakpoint } from '../layouts/breakpoints'
import Img from 'gatsby-image'

class Partner extends React.Component {
  render() {
    return (
      <PersonContainer>
        <ImageContainer>
          <BgImage sizes={this.props.img}/>
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
`
const BgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  z-index: -1;
  height: 35vh;
  ${breakpoint.for_phone_only`
    height: 30vh;
  `}
  & > img {
    object-fit: cover !important;
    object-position: 50% 30% !important;
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;'
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
const Position = styled.div`
  font-weight: 500;
`
const Desc = styled.div`
  margin-top: 0;
`
const Capabilities = styled.ul`
  padding-top: 1em;
  & li:before {
    content: "+";
    margin-right: 8px;
    color: ${Color.Primary};
    font-weight: 500;
  }
`
export default Partner
