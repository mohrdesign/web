import React from 'react'
import styled from 'styled-components'
import Transition from 'react-transition-group/Transition';

const transitionStyles = {
  entering: { opacity: 0, /*display: 'none'*/ },
  entered:  { opacity: 1, /*display: 'inline-block'*/ }
};

const FadeTransition = ({ in: inProp, children, duration = 500, delay = 0 }) => (
  <Transition in={inProp} timeout={duration} mountOnEnter={true} unmountOnExit={true}>
    {(state) => (
      <div style={{
        transition: `opacity ${duration}ms ease-in-out`,
        transitionDelay: `${delay}ms`,
        opacity: 0,
        // display: 'none',
        display: 'inline-block',
        ...transitionStyles[state]
      }}>
        {children}
      </div>
    )}
  </Transition>
);


export default FadeTransition
