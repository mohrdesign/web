import React from 'react'
import styled from 'styled-components'
import * as Color from '../utils/colors'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentContainer from '../layouts/ContentContainer'

const ContactPage = ({ transition }) => (
  <div>
    <ContentContainer><Header/></ContentContainer>
    <div style={transition && transition.style}>
      <ContentContainer>
        <PageIntro>Have an interesting project, or just need some help? Reach out to us.</PageIntro>
      </ContentContainer>
      <Footer/>
    </div>
  </div>
)

const PageIntro = styled.h3`
  color: ${Color.Primary};
  margin: 3em 0em 5em 0em;
  width: 22em;
  max-width: 90%;
  & p {
    font-size: 18px;
    line-height: 24px;
    color: ${Color.NeutralDark};
    padding-top: 1em;
  }
`

export default ContactPage
