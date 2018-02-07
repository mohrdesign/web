import React from 'react'
import styled from 'styled-components'
import { breakpoint } from '../layouts/breakpoints'
import * as Color from '../utils/colors'
import FadeTransition from './FadeTransition'
import AnimatedWord from './AnimatedWord'
import createFragment from 'react-addons-create-fragment'; // ES6
import Link from 'gatsby-link'


const transform = (node, index) => {
  if (node.type === 'tag' && node.name === 'span') {
    return React.createElement(
      AnimatedWord,
      generatePropsFromAttributes(node.attribs, index),
      processNodes(node.children, transform)
    )
  } else if (node.type === 'tag' && node.name === 'accent') {
    return React.createElement(
      Accent,
      generatePropsFromAttributes(node.attribs, index),
      processNodes(node.children, transform)
    )
  }
}

let wordCount = 0

class HomepageText extends React.Component {
  componentWillUnmount() {
    wordCount = 0;
  }
  createAnimatedWords({input, cta = false}) {
    const str = input.split(/ | /);
    const wrapEachWord = str.map((word, index) => {
      let res;
      if( word === `\u2014` || word === 'bad' || word === 'Experiences') {
        res = (<AnimatedWord show={true} id={'word-' + wordCount} delay={wordCount*10}>{word + ` `}</AnimatedWord>)
      } else {
        res = (<AnimatedWord show={true} id={'word-' + wordCount} delay={wordCount*10}>{word}&nbsp;</AnimatedWord>)
      }
      wordCount = wordCount + 1;
      return res
    })
    return wrapEachWord
  }
  buildIntroText() {
    const textIntro = this.createAnimatedWords({
      input: "We’re human-centered designers with real human centers. Experiences \u2014 good and bad \u2014 become memories. We can partner with you to make your product or service the good kind of memorable.",
      cta: false,
      show: true
    })
    const textCTA = this.createAnimatedWords({
      input: "Explore\u00A0how.",
      cta: true
    })
    const ctaFragment = createFragment({
      ctaWords: textCTA
    })
    const fullText = createFragment({
      intro: textIntro,
      cta: (<HPLink to="/expertise">{ctaFragment}</HPLink>)
    });
    return <Intro>{fullText}</Intro>
  }
  render() {
    return (
      <div>
        {this.buildIntroText()}
      </div>
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
const Accent = styled.span`
  color: ${Color.AccentBright};
  cursor: pointer;
`
const HPLink = styled(Link)`
  color: ${Color.AccentBright};
  padding-left: 5px;
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
