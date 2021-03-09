import React from 'react'
import styled from 'styled-components'
import * as Color from '../utils/colors'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentContainer from '../layouts/ContentContainer'
import Section from '../components/Section'
import PageIntro from '../components/PageIntro'
import ContactSection from '../components/ContactSection'
import AnimatedSVG from '../components/svgs/AnimatedSVG'
import { breakpoint } from '../layouts/breakpoints'
import GridImage from '../../static/grid.svg'
import CircleImage from '../../static/primitive-circle-purple.svg'
import CircleImageSm from '../../static/primitive-circle-small-purple.svg'
import TriangleImage from '../../static/primitive-triangle-purple.svg'
import ExpertiseItem from '../components/ExpertiseItem'
import Layout from '../layouts/index'

class ExpertisePage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout>
        <ContentContainer><Header/></ContentContainer>
        <Helmet>
          <html className="secondarypage"/>
        </Helmet>
        <ContentContainer>
          <PageIntro withSubhead>Every project is an opportunity to make things better for our clients and their customers.</PageIntro>
          <Subhead>Here’s a look at how we partner with organizations to create and transform products and services.</Subhead>
          <ExpertiseGrid>
            <Illustration className="svg-one"><AnimatedSVG bOffset="50px" svg="understanding"/></Illustration>
            <ExpertiseItem
              className="content-one"
              name="Understanding"
              descIntro="There are no right solutions to the wrong problem. "
              desc="We plan and conduct human-centered design research to uncover the best audience and opportunity for your offering."
              activities={["Usability Testing & Validation","Ethnographic Research","Competitive Analysis","Heuristic Evaluation"]}
            />
            <Illustration className="svg-two"><AnimatedSVG svg="articulating"/></Illustration>
            <ExpertiseItem
              className="content-two"
              name="Articulating"
              descIntro="Good ideas come to life through good communication. "
              desc="Before we put pen to paper (or stylus to screen), we carefully frame the problem to align everyone and to set clear measurements."
              activities={["Product & Content Strategy","Roadmap & Opportunity Definition","Personas & Experience Flows","Investor Pitch Decks & Materials"]}
            />
            <Illustration className="svg-three"><AnimatedSVG svg="making"/></Illustration>
            <ExpertiseItem
              className="content-three"
              name="Making"
              descIntro="The best way to validate an idea is to bring it to life. "
              desc="We prototype early and often to quickly validate ideas and create feedback loops from client teams and core users."
              activities={["Information Architecture","UX & Visual Design","Participatory Design Workshops","High- & Low-Fidelity Prototyping", "Concept Validation"]}
            />
            <Illustration className="svg-four"><AnimatedSVG svg="executing" duration={2400}/></Illustration>
            <ExpertiseItem
              className="content-four"
              name="Executing"
              descIntro="Because we love when a plan comes together, we work with you to make it happen. "
              desc="We set up design and engineering teams with efficient systems that scale and lead to stronger, more resilient final products."
              activities={["Planning & Design Support","Agile Development","Design Language Systems","Design Pattern Documentation"]}
            />
          </ExpertiseGrid>
          <Primitives/>
        </ContentContainer>
        <ContactSection dark/>
        <Footer/>
      </Layout>
    )
  }
}
const Illustration = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  ${breakpoint.for_phone_only`
    width: 100%;
  `}
  align-items: center;
  ${breakpoint.for_tablet_portrait_up`
    align-items: flex-start;
  `}
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

const ExpertiseGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${breakpoint.for_tablet_portrait_up`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      'svg-1 con-1'
      'svg-2 con-2'
      'con-3 svg-3'
      'con-4 svg-4';
      & .svg-one {
        grid-area: svg-1;
        justify-content: centered;
        margin: 0 auto;
      }
      & .svg-two {
        grid-area: svg-2;
        justify-content: centered;
        margin: 0 auto;
      }
      & .svg-three {
        grid-area: svg-3;
        padding-left: 2em;
      }
      & .svg-four {
        grid-area: svg-4;
        padding-left: 2em;
      }
  `}
  ${breakpoint.for_desktop_up`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      'svg-1 con-1 .'
      '. svg-2 con-2'
      'con-3 svg-3 .'
      '. con-4 svg-4';
    & .svg-one {
      grid-area: svg-1;
      justify-content: flex-end;
    }
    & .svg-two {
      grid-area: svg-2;
      justify-content: flex-end;
    }
    & .svg-three {
      grid-area: svg-3;
      padding-left: 1em;
    }
    & .svg-four {
      grid-area: svg-4;
      padding-left: 1em;
    }
  `}
  margin: 6em 0em 0em 0em;
  ${breakpoint.for_phone_only`
    margin: 2em 0em 0em 0em;
  `}
  & .svg-one {
    grid-area: svg-1;
  }
  & .svg-two {
    grid-area: svg-2;
  }
  & .svg-three {
    grid-area: svg-3;
  }
  & .svg-four {
    grid-area: svg-4;
  }
  & .content-one {
    grid-area: con-1;
  }
  & .content-two {
    grid-area: con-2;
  }
  & .content-three {
    grid-area: con-3;
  }
  & .content-four {
    grid-area: con-4;
  }
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
export default ExpertisePage
