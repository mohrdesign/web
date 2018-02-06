import React from 'react'
import * as Color from '../utils/colors'
import styled from 'styled-components'
import GridImage from '../../static/grid.svg'
import CircleImage from '../../static/primitive-circle.svg'
import TriangleImage from '../../static/primitive-triangle.svg'
import { breakpoint } from '../layouts/breakpoints'


const Section = ({children}) => {
  return (
    <SectionContainer dark>
      {children}
    </SectionContainer>
  )
}

const SectionContainer = styled.div`
  margin: 2em 0em 0em 0em;
  padding: 5em 0em 5em 0em;
  ${breakpoint.for_phone_only`
    padding: 2em 0em 0em 0em;    
  `}
  position: relative;
  overflow: hidden;
  background-image:    url(${TriangleImage}),
                       url(${CircleImage}),
                       ${props => props.dark && Color.GradientDark};
  background-repeat:   no-repeat,
                       no-repeat,
                       no-repeat;
  background-position: right 55em top -5em,
                       right -8em bottom -15em,
                       left 0 top 0;
`
export default Section
