import React from 'react'
import Link from 'gatsby-link'
import { FooterLink, FooterEmailLink } from './Links'
import * as Color from '../utils/colors'
import styled from 'styled-components'
import Pin from './Pin'
import ContentContainer from '../layouts/ContentContainer'
import { breakpoint } from '../layouts/breakpoints'


export const Footer = (props) => {
  return (
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
              {/* <li><Pin {...props}/></li> */}
              {/* <li><p><Pin {...props}/> Brooklyn / Denver / Portland</p></li> */}
              <li><p>Brooklyn / Denver / Portland</p></li>
              { props.onDark && (<li><FooterEmailLink className='onDark' href='mailto:hello@mohr.design'>hello@mohr.design</FooterEmailLink></li>) }
              {/* <li><p><span class="copyright">&copy;</span>Copyright Mohr Design, Inc. 2018</p></li> */}
            </ul>
          </FooterLeft>
          <FooterRight>
          </FooterRight>
        </MohrFooter>
      </ContentContainer>
    </FooterContainer>
  )
}

const MohrFooter = styled.div`
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
const FooterLeft = styled.div`
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
