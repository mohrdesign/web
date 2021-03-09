import React from 'react'
import { Link } from 'gatsby'
import { FooterLink, FooterEmailLink } from './Links'
import * as Color from '../utils/colors'
import styled from 'styled-components'
import Pin from './Pin'
import ContentContainer from '../layouts/ContentContainer'
import { breakpoint } from '../layouts/breakpoints'
// import Popcity from './Popcity'
import pdxpng from '../assets/images/portland.png'
import bkpng from '../assets/images/brooklyn.png'
import dnvpng from '../assets/images/denver.png'

class Footer extends React.Component {
  pop = (city) => {

  }
  render() {
    const { props } = this
    return (
      <div>
        <FooterContainer {...props}>
          <ContentContainer>
            <MohrFooter {...props}>
              { !props.onDark && (
                <FooterTop>
                  <ul>
                    <li><FooterLink to='/expertise'>Expertise</FooterLink></li>
                    <li><FooterLink to='/team'>Team</FooterLink></li>
                  </ul>
                </FooterTop>
              )}
              <FooterLeft>
                <ul>
                  <li>
                    <p>
                      <City {...props} onClick={() => props.onDark && this.refs.popcontroller.handleClick("brooklyn")}>Brooklyn</City> /&nbsp;
                      <City {...props} onClick={() => props.onDark && this.refs.popcontroller.handleClick("denver")}>Denver</City> /&nbsp;
                      <City {...props} onClick={() => props.onDark && this.refs.popcontroller.handleClick("portland")}>Portland</City>
                    </p>
                  </li>
                  { props.onDark && (<li><FooterEmailLink className='onDark' href='mailto:hello@mohr.design'>hello@mohr.design</FooterEmailLink></li>) }
                </ul>
              </FooterLeft>
              <FooterRight>
              </FooterRight>
            </MohrFooter>
          </ContentContainer>
        </FooterContainer>
        <PopContainer>
          {/* <Popcity ref="popcontroller"/> */}
        </PopContainer>
      </div>
    )
  }
}

const PopContainer = styled.div`
  ${breakpoint.for_phone_only`
    display: none;
  `}
`

const MohrFooter = styled.div`
  z-index: 20;
  padding-bottom: ${props => props.onDark && '2em'};
  @media screen and (min-height: 600px) {
    position: ${props => props.onDark ? 'absolute' : ''};
    bottom: ${props => props.onDark && '2em'};
  }
  display: flex;
  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  justify-content: space-between;
  margin: 6em 0em 1em 0em;
  color: ${props => props.onDark ? Color.PrimarySoft : Color.NeutralDark};
  font-size: 0.8em;
  & li {
    display: block;
  }
  & li:not(:first-child):not(:last-child) {
    margin-right: 12px;
  }
  & li:first-child {
    margin-right: 6px;
  }
  & a {
    color: ${props => props.onDark ? Color.PrimarySoft : Color.Primary};
  }
  & p, & svg {
    margin-bottom: 0;
  }
`
const City = styled.button`
  ${breakpoint.for_phone_only`
    pointer-events: none;
  `}
  background: none;
  outline: none;
  border: 0;
  color: inherit;
  cursor: ${props => props.onDark ? 'pointer' : 'auto'};
  font: inherit;
  overflow: visible;
  padding: 0;
  -webkit-appearance: button;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
  &:hover {
    color: ${props => props.onDark ? Color.AccentBright : 'inherit'};
  }
  &:active {
    color: ${props => props.onDark ? Color.White : 'inherit'};
  }
`
const FooterLeft = styled.div`
  position: relative;
  z-index: 20;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  & span {
    padding-right: 2px;
  }
`
const FooterRight = styled.div`

`
const FooterTop = styled.div`
  position: relative;
  z-index: 20;
  flex-basis: 100%;
  font-size: 1.2em;
  & li {
    display: block;
  }
  margin-bottom: 1em;
`
const FooterContainer = styled.div`
  border-top: ${props => props.onDark ? `none` : `1px solid ${Color.NeutralLight}`};
  background: ${props => props.onDark ? `none` : `linear-gradient(180deg, ${Color.NeutralLight}, ${Color.White} 50%)`};
  margin-bottom: ${props => props.onDark ? '0em' : '3em'};
  ${breakpoint.for_phone_only`
    margin-bottom: 1.3em;
  `}
`
export default Footer
