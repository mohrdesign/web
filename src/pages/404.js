import React from 'react'
import styled from 'styled-components'
import * as Color from '../utils/colors'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BodyLink } from '../components/Links'
import PageIntro from '../components/PageIntro'
import ContentContainer from '../layouts/ContentContainer'
import { breakpoint } from '../layouts/breakpoints'


const NotFoundPage = () => (
  <div>
    <ContentContainer><Header/></ContentContainer>
    <ContentContainer>
      <PageIntro withSubhead>Page not found.</PageIntro>
      <Subhead>The page you're looking for doesn't exist. Head back to <BodyLink to="/">our homepage.</BodyLink></Subhead>
    </ContentContainer>
    <Footer/>
  </div>
)

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
    margin-bottom: 3em;
  `}
  ${breakpoint.for_tablet_portrait_up`
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 5em;
  `}
  ${breakpoint.for_tablet_landscape_up`
    font-size: 24px;
    line-height: 36px;
  `}
`

export default NotFoundPage
