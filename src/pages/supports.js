import React from 'react'
import styled from 'styled-components'
import * as Color from '../utils/colors'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentContainer from '../layouts/ContentContainer'
import Layout from '../layouts/index'

const ContactPage = ({ transition }) => (
  <Layout>
    <ContentContainer><Header/></ContentContainer>
    <div style={transition && transition.style}>
      <ContentContainer>
        <ul className="modernizrtest">
          <li className="cssgrid">cssgrid</li>
          <li className="cssgridlegacy">cssgridlegacy</li>
          <li className="inlinesvg">inlinesvg</li>
          <li className="setclasses">setclasses</li>
        </ul>
      </ContentContainer>
      <Footer/>
    </div>
  </Layout>
)


export default ContactPage
