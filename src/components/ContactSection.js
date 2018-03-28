import React from 'react'
import * as Color from '../utils/colors'
import styled from 'styled-components'
import ContentContainer from '../layouts/ContentContainer'
import Link from 'gatsby-link'
import GridImage from '../../static/grid.svg'
import CircleImage from '../../static/primitive-circle.svg'
import TriangleImage from '../../static/primitive-triangle.svg'
import { breakpoint } from '../layouts/breakpoints'


const ContactSection = (props) => {
  const labels = [
    "Get in touch with us to find out how we can work with you.",
    "What are you waiting for? Find out how we can partner with you on your next project.",
    "You deserve Mohr. Tell us about your next project.",
    "Mohr is More. Let's make something memorable together.",
    "It’s time to start doing less and getting Mohr."
  ]
  const index = Math.floor(Math.random() * Math.floor(5))
  return (
    <SectionContainer dark={props.dark}>
      <ContentContainer>
        <Contact>
          <ContactLabel dark={props.dark}>{labels[index]}</ContactLabel>
          <ContactInfo dark={props.dark}>
            <p>Say Hello</p>
            <p><a href="mailto:hello@mohr.design">hello@mohr.design</a></p>
            <p><a href="tel:19172049393">‭+1 917 204 9393</a></p>
          </ContactInfo>
        </Contact>
      </ContentContainer>
    </SectionContainer>
  )
}

const Contact = styled.div`
  margin: 6em 0em 4em 0em;
  ${breakpoint.for_phone_only`
    margin: 2em 0em 0em 0em;
  `}
`

const SectionContainer = styled.div`
  margin: 2em 0em 0em 0em;
  ${breakpoint.for_phone_only`
    padding: 1em 0em;
  `}
  ${breakpoint.for_tablet_portrait_up`
    padding: 2em 0em;
  `}
  ${breakpoint.for_tablet_landscape_up`
    padding: 4em 0em;
  `}
  position: relative;
  overflow: hidden;
  background-image:    ${props => props.dark
                        ? `url(${TriangleImage}),
                           url(${GridImage}),
                           ${Color.GradientDark}`
                        : ''};

  background-repeat:   ${props => props.dark
                        ? 'no-repeat, no-repeat, no-repeat'
                        : ''};

  background-position: ${props => props.dark
                        ? `right 55em top -5em,
                           right -28em bottom -11em,
                           left 0 top 0`
                        : ''};
  ${breakpoint.for_phone_only`
    background-position: ${props => props.dark
                          ? `right 14em top -15em,
                             right -55em bottom -11em,
                             left 0 top 0`
                          : ''};
  `}
  ${breakpoint.for_tablet_portrait_up`
    background-position: ${props => props.dark
                          ? `right 40em top -10em,
                             right -34em bottom -11em,
                             left 0 top 0`
                          : ''};
  `}
  ${breakpoint.for_desktop_up`
    background-position: ${props => props.dark
                          ? `right 55em top -5em,
                             right -28em bottom -11em,
                             left 0 top 0`
                          : ''};
  `}
`

const ContactLabel = styled.h3`
  margin: 0em 0em 2em 0em;
  color: ${props => props.dark ? Color.AccentBright : Color.NeutralDark};
  width: 18em;
  max-width: 90%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  opacity: ${props => props.dark ? '1.0' : '0.8' };
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
const ContactInfo = styled.div`
  position: relative;
  z-index: 20;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 0em 0em 2em 0em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  & p {
    margin: 0;
    padding: 0;
  }
  & p:first-child {
    font-weight: 500;
    color: ${props => props.dark ? Color.White : Color.Primary};
  }
  & a {
    text-decoration: none;
    color: ${props => props.dark ? Color.AccentBright : Color.Primary};
    opacity: ${props => props.dark ? '1.0' : '0.8' };
  }
  & a:hover {
    opacity: 1;
    color: ${props => props.dark ? Color.White : Color.Primary};
  }
`
export default ContactSection
