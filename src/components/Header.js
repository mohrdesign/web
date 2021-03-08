import React from 'react'
import Link from 'gatsby-link'
import { NavLink } from './Links'
import * as Color from '../utils/colors'
import styled from 'styled-components'
import Wordmark from './Wordmark'
import { breakpoint } from '../layouts/breakpoints'

export const Header = (props) => {
  const activeStyling = !props.onDark
    ? { opacity: '1.0', boxShadow: `0px 1.25px 0px 0px ${Color.Primary}`}
    : { opacity: '1.0', boxShadow: `0px 1.25px 0px 0px ${Color.AccentBright}`}
  return (
    <MohrHeader {...props}>
      <HeaderLeft>
        <Link to="/"><Wordmark {...props}/></Link>
      </HeaderLeft>
      <HeaderRight>
        <ul>
          <li><NavLink {...props} activeStyles={activeStyling} to='/expertise'>Expertise</NavLink></li>
          <li><NavLink {...props} activeStyles={activeStyling} to='/team'>Team</NavLink></li>
          {/* <li><NavLink {...props} activeStyles={activeStyling} to='/accessibility-part-one-defaults'>Accessibility</NavLink></li> */}
          {/* <li><NavLink {...props} activeStyles={activeStyling} to='/contact'>Contact</NavLink></li> */}
        </ul>
      </HeaderRight>
    </MohrHeader>
  )
}

const MohrHeader = styled.nav`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  ${breakpoint.for_phone_only`
    margin-top: 1.1em;
  `}
  ${breakpoint.for_tablet_portrait_up`
    margin-top: 1.5em;
  `}
  ${breakpoint.for_tablet_landscape_up`
    margin-top: 5em;
  `}
  & li {
    display: inline-block;
  }
  & li:not(:last-child) {
    margin-right: 16px;
  }
  & a {
    color: ${props => props.onDark ? Color.White : Color.Primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
const HeaderLeft = styled.div`
  ${breakpoint.for_phone_only`
    width: 75px;
    height: 27px;
  `}
`
const HeaderRight = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  ${breakpoint.for_phone_only`
    font-size: 0.92em;
    vertical-align: text-top;
  `}
  & li {
    padding-top: 3px;
  }
`
export default Header
