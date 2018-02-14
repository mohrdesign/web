import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { breakpoint } from '../layouts/breakpoints'
import * as Color from '../utils/colors'
import Link from 'gatsby-link'
import { TimelineLite } from 'gsap'
if (typeof document !== `undefined`) {
  const SplitText = require("../utils/SplitText");
}

class HomepageText extends React.Component {
  componentDidMount() {
    const intro = ReactDOM.findDOMNode(this.refs.mount);
    const tl = new TimelineLite;
    const text = new SplitText(intro, {type:"words"});
    const words = text.words;
    tl.staggerFrom(words, 0.8, {
      opacity:0,
      y:10,
      rotationX:60,
      ease:Expo.easeOut
    }, 0.04, "+=0.4");
  }
  render() {
    return (
      <Intro ref="mount">
        We're human-centered designers with real human centers. Experiences — good and bad — become memories. We can partner with you to make your product or service the good kind of memorable. <HPLink to="/expertise">Explore how.</HPLink>
      </Intro>
    )
  }
}

const Intro = styled.h3`
  color: ${Color.White};
  margin-top: 3em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  cursor: default;
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
const HPLink = styled(Link)`
  color: ${Color.AccentBright};
  position: relative;
  z-index: 20;
  padding: 0px 5px;
  margin-left: -5px;
  text-decoration: none;
  transition: color 0.4s ease,
              background-color 0.4s ease;
  background-color: none;
  border-radius: 4px;
  &:hover {
    color: ${Color.White};
    background-color: ${Color.Primary};
  }
`

export default HomepageText
