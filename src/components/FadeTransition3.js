import React from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

// const FadeTransition = ({ in: inProp, children, duration = 500, delay = 0 }) => (
//   <CSSTransition in={inProp} timeout={duration} classNames="fade" mountOnEnter={true} unmountOnExit={true}>
//     {children}
//   </CSSTransition>
// );


const FadeTransition = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);


export default FadeTransition
