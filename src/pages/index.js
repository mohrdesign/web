import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import * as Color from '../utils/colors'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentContainer from '../layouts/ContentContainer'
import { breakpoint } from '../layouts/breakpoints'
import HomepageText from '../components/HomepageText'
import Layout from '../layouts/index'

const HomePage = ({ transition }) => (
  <Layout>
    <ContentContainer><Header onDark /></ContentContainer>
    <Helmet>
      <html className="homepage"/>
    </Helmet>
    <ContentContainer>
      <HomepageText/>
    </ContentContainer>
    <Footer onDark />
  </Layout>
)

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
`

export default HomePage
