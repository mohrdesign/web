import React from 'react'
import styled from 'styled-components'
import * as Color from '../utils/colors'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentContainer from '../layouts/ContentContainer'
import Section from '../components/Section'
// import ArticleHeader from '../components/ArticleHeader'
// import ArticleImage from '../components/ArticleImage'
import ContactSection from '../components/ContactSection'
import AnimatedSVG from '../components/svgs/AnimatedSVG'
import { breakpoint } from '../layouts/breakpoints'
import GridImage from '../../static/grid.svg'
import CircleImage from '../../static/primitive-circle-purple.svg'
import CircleImageSm from '../../static/primitive-circle-small-purple.svg'
import TriangleImage from '../../static/primitive-triangle-purple.svg'
import Img from 'gatsby-image'

const AccessibilityPartOne = () => {
  return (
    <div>
      <ContentContainer><Header/></ContentContainer>
      <Helmet>
        <html className="secondarypage"/>
      </Helmet>
      <ContentContainer>
        <Grid>
          <Title>Accessibility Talk Pt 1: Defaults</Title>
          <HeroImage></HeroImage>
          <ArticleContent>
            <ArticleText>
              <ParagraphTitle>Introduction</ParagraphTitle>
              <p>Mohr Design has been working on accessibility designs over the last two years, using the user’s experience to guide us. Most organizations are still figuring out the best way to approach accessibility (a11y) design, so we reached out to accessibility expert, Thomas Logan (owner of Equal Entry), for advice on how to create a delightful experience for our users with disabilities. See below for that conversation.</p>
              <SecondaryParagraphTitle>Cort Langworthy</SecondaryParagraphTitle>
              <p>When is it appropriate to deviate from the default top left to bottom right tab order? Priority of communication is taken care of for sighted users in many different ways through the use of typography color and other basic design techniques. But in doing so creates a mismatch between visual design and an a11y considerate experience. Creating a custom tab order can and should compensate for that of course, but when do golden paths for the accessible user rise to a level where we should break from this typical pattern?</p>
              <SecondaryParagraphTitle>Thomas Logan</SecondaryParagraphTitle>
              <p>For the logo consideration a "Skip to content" link should be thought about. We basically avoid having the logo be the first thing someone encounters by adding the Skip to content link that allows a keyboard user to skip over both the homepage logo and the various repetitive navigation links that exist at the top of the page.</p>
            </ArticleText>
            {/* <ArticleFigure sizes={data.thomasImage.sizes}></ArticleFigure> */}
            {/* <ArticleImage alt="Skip to content link on Google"/> */}
          </ArticleContent>
        </Grid>
        <Primitives/>
      </ContentContainer>
      <Footer/>
    </div>
  )
}

const BaseGrid = props => `
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1em;
`

const Grid = styled.div`
  ${BaseGrid}
`
const Title = styled.h1`
  grid-column: 3 / span 8;
  text-align: center;
  color: ${Color.Black};
  margin: 2em 0em 1em;
  font-weight: 800;
  ${breakpoint.for_phone_only`
    font-size: 29px;
    line-height: 36px;
    grid-column: 2 / span 10;
  `}
  ${breakpoint.for_tablet_portrait_up`
    font-size: 40px;
    line-height: 48px;
  `}
  ${breakpoint.for_tablet_landscape_up`
    font-size: 50px;
    line-height: 56px;
  `}
`
const HeroImage = styled.div`
  border-radius: 25px;
  height: 310px;
  background-image: ${Color.GradientDark};
  ${breakpoint.for_phone_only`
    grid-column: span 12;
    margin-bottom: 2em;
  `}
  ${breakpoint.for_tablet_portrait_up`
    grid-column: span 12;
    margin-bottom: 3em;
  `}
  ${breakpoint.for_tablet_landscape_up`
    grid-column: span 12;
  `}
  ${breakpoint.for_desktop_up`
    grid-column: 2 / span 10;
  `}
`

const BaseText = props => `
  color: ${Color.Black};
  margin: 0em;
  font-weight: 400;
  ${breakpoint.for_phone_only`
    font-size: 15px;
    line-height: 21px;
    grid-column: span 12;
  `}
  ${breakpoint.for_tablet_portrait_up`
    font-size: 16px;
    line-height: 25px;
    grid-column: 2 / span 10;
  `}
  ${breakpoint.for_tablet_landscape_up`
    font-size: 18px;
    line-height: 29px;
    grid-column: 2 / span 10;
  `}
  ${breakpoint.for_desktop_up`
    font-size: 18px;
    line-height: 29px;
    grid-column: 3 / span 8;
  `}
`

const ArticleContent = styled.div`
  ${BaseText}
`
const ParagraphTitle = styled.div`
  ${BaseText}
  font-weight: 600;
  margin-bottom: 0px;
`
const SecondaryParagraphTitle = styled.div`
  ${BaseText}
  ${breakpoint.for_phone_only`
    font-size: 11.6px;
    line-height: 21px;
  `}
  ${breakpoint.for_tablet_portrait_up`
    font-size: 12.5px;
    line-height: 25px;
  `}
  ${breakpoint.for_tablet_landscape_up`
    font-size: 14px;
    line-height: 29px;
  `}
  ${breakpoint.for_desktop_up`
    font-size: 14px;
    line-height: 29px;
  `}
  font-weight: 500;
  margin-bottom: 0px;
  color: ${Color.Primary};
`
const ArticleText = styled.div`
`
const ArticleFigure = styled.div`
`
const Subhead = styled.h4`
  color: ${Color.NeutralDark};
  width: 22em;
  max-width: 90%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  opacity: 0.8;
  ${breakpoint.for_phone_only`
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  `}
  ${breakpoint.for_tablet_portrait_up`
    font-size: 20px;
    line-height: 30px;
  `}
  ${breakpoint.for_tablet_landscape_up`
    font-size: 24px;
    line-height: 36px;
  `}
`

const Primitives = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.2;
  overflow: hidden;
  background-image:    url(${CircleImageSm}),
                       url(${CircleImage}),
                       url(${TriangleImage});
  background-repeat:   no-repeat,
                       no-repeat,
                       no-repeat;
  ${breakpoint.for_phone_only`
    background-position: right -5em top 106em,
                         right -10em top -5em,
                         left -8em top 65em;
    background-size: 70%,90%,55%;
  `}
  ${breakpoint.for_tablet_portrait_up`
    background-position: right -13em top 106em,
                         right -10em top -5em,
                         left -8em top 65em;
    background-size: 50%,70%,35%;
  `}
  ${breakpoint.for_tablet_landscape_up`
    background-size: 40%,60%,35%;
  `}
  ${breakpoint.for_desktop_up`
    background-size: 35%,50%,35%;
  `}
  ${breakpoint.for_big_desktop_up`
    background-position: calc(50% + 40em) calc(0% + 90em),
                         calc(50% + 30em) calc(0% + -5em),
                         calc(50% - 34em) calc(0% + 65em);
    background-size: 400px, 690px, 450px;
  `}
`


export default AccessibilityPartOne
