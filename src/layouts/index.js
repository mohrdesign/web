import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Mohr Design"
      meta={[
        {
          name: 'description',
          content: 'We create meaningful experiences that forever shape a users connection with a brand.'
        },
        {
          name: 'keywords',
          content: 'design, ux, experiences, research'
        },
      ]}
    >
      <html lang="en" />
      <script src="/modernizr.js" type="text/javascript" />
    </Helmet>
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

const HeaderContainer = styled.div`
  background: lightgray;
  margin-bottom: 1.45rem;
`
const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const StyledLink = styled(Link)`
  color: hsla(0, 0%, 0%, 0.8);
  text-decoration: none;
`

export default TemplateWrapper
