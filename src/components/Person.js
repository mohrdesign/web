import React from 'react'
import * as Color from '../utils/colors'
import styled from 'styled-components'
import { breakpoint } from '../layouts/breakpoints'
import { GatsbyImage } from "gatsby-plugin-image";
import Pin from './Pin'

class Person extends React.Component {
  render() {
    return (
      <PersonContainer>
        <ImageContainer>
          <GatsbyImage image={this.props.img} alt={`Portrait of $${this.props.name}`} />
        </ImageContainer>
        <Bio>
          <Name>{this.props.name}</Name>
          <Position>{this.props.position}</Position>
          <Desc>{this.props.desc}</Desc>
          {this.props.capabilities && (
            <Capabilities>
              {this.props.capabilities.map((cap, index) => {
                return (
                  <li key={cap+index}>{cap}</li>
                )
              })}
              <li><Pin/> Based in {this.props.location}</li>
            </Capabilities>
          )}
        </Bio>
      </PersonContainer>
    )
  }
}

const PersonContainer = styled.div`
  color: ${Color.NeutralDark};
  display: table;
  & > * {
    display: table-cell;
    vertical-align: top;
  }
  ${breakpoint.for_phone_only`
    & > * {
      display: block;
    }
  `}
  @supports (display:grid) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1em;
  }
  margin-bottom: 9em;
  ${breakpoint.for_phone_only`
    margin-bottom: 4em;
  `}
  ${breakpoint.for_tablet_landscape_up`
    & div:first-child {
      margin-right: 0.5em;
    }
    &:nth-child(even) {
      & div:first-child {
        grid-column: 2 / span 5;
      }
      & div:last-child {
        grid-column: 7 / span 6;
      }
    }
  `}
  ${breakpoint.for_desktop_up`
    & div:first-child {
      margin-right: 0.5em;
    }
    &:nth-child(even) {
      & div:first-child {
        grid-column: 3 / span 4;
      }
      & div:last-child {
        grid-column: 7 / span 6;
      }
    }
  `}
`
const ImageContainer = styled.div`
  width: 280px;
  ${breakpoint.for_phone_only`
    grid-column: span 12;
    margin-right: 0em;
    min-height: 250px;
    background-position: 0% 25%;
  `}
  ${breakpoint.for_tablet_portrait_up`
    grid-column: span 5;
    margin-right: 1em;
    min-height: 350px;
  `}
  ${breakpoint.for_tablet_landscape_up`
    grid-column: span 5;
    margin-right: 1em;
  `}
  ${breakpoint.for_desktop_up`
    grid-column: span 4;
  `}
  @supports (display:grid) {
    width: auto;
  }
  & > .gatsby-image-wrapper {
    position: relative;
    top: 0;
    left: 0;
    width: auto;
    height: 50vh;
    ${breakpoint.for_phone_only`
      height: 33vh;
    `}
    img {
      object-fit: cover !important;
      object-position: 50% 30% !important;
    }
  }
`
const Bio = styled.div`
  padding-left: 1em;
  ${breakpoint.for_phone_only`
    padding-left: 0em;
  `}
  ${breakpoint.for_phone_only`
    grid-column: span 12;
  `}
  ${breakpoint.for_desktop_up`
    grid-column: 5 / span 6;
  `}
  ${breakpoint.for_tablet_portrait_up`
    grid-column: span 7;
  `}
  ${breakpoint.for_tablet_landscape_up`
    grid-column: span 6;
  `}
`
const Name = styled.h4`
  margin-top: -0.35em;
  margin-bottom: 0;
  color: ${Color.Primary};
`
const Position = styled.div`
  font-weight: 500;
`
const Desc = styled.div`
  margin-top: 1em;
`
const Capabilities = styled.ul`
  padding-top: 1em;
  & li:before {
    content: "+";
    margin-right: 8px;
    color: ${Color.Primary};
    font-weight: 500;
  }
  & li:last-child:before {
    content: "";
    margin-right: 8px;
    color: ${Color.Primary};
    font-weight: 500;
  }
  & li svg {
    margin-left: -7px;
    margin-right: 5px;
  }
`
export default Person
