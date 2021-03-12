import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import * as Color from '../utils/colors'

export const FooterLink = ({ className, children, to, style = {} }) => {
  return (
    <StyledFooterLink className={className} to={to} style={style}>{children}</StyledFooterLink>
  )
}

export const BodyLink = ({ className, children, to, style = {} }) => {
  return (
    <StyledBodyLink className={className} to={to} style={style}>{children}</StyledBodyLink>
  )
}

export const FooterEmailLink = ({ className, children, href, style = {} }) => {
  return (
    <StyledALink className={className} href={href} style={style}>{children}</StyledALink>
  )
}

const StyledFooterLink = styled(Link)`
  color: ${Color.Primary};
  text-decoration: none;
  &:hover {
    box-shadow: 0px 1.25px 0px 0px ${Color.Primary};
  }
  &.onDark {
    color: ${Color.PrimarySoft};
    text-decoration: none;
  }
  &.onDark:hover {
    box-shadow: 0px 0px 0px 0px ${Color.Primary};
    color: ${Color.AccentBright};
  }
`

const StyledBodyLink = styled(Link)`
  color: ${Color.Primary};
  text-decoration: none;
  &:hover {
    box-shadow: 0px 1.25px 0px 0px ${Color.Primary};
  }
  &.onDark {
    color: ${Color.PrimarySoft};
    text-decoration: none;
  }
  &.onDark:hover {
    box-shadow: 0px 0px 0px 0px ${Color.Primary};
    color: ${Color.AccentBright};
  }
`

const StyledALink = styled.a`
  color: ${Color.Primary};
  text-decoration: none;
  &:hover {
    box-shadow: 0px 1.25px 0px 0px ${Color.Primary};
  }
  &.onDark {
    color: ${Color.PrimarySoft};
    text-decoration: none;
  }
  &.onDark:hover {
    box-shadow: 0px 0px 0px 0px ${Color.Primary};
    color: ${Color.AccentBright};
  }
`

export const NavLink = ({ props, children, to, activeStyles = {}, style = {} }) => {
  return (
    <StyledNavLink {...props} to={to} style={style} activeStyle={activeStyles}>{children}</StyledNavLink>
  )
}

const StyledNavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  text-transform: none;
  font-weight: 500;
  vertical-align: text-top;
`
