import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { breakpoint } from '../layouts/breakpoints'
import * as Color from '../utils/colors'
import { Link } from 'gatsby'
import { SplitText } from '../utils/FramerSplitText'
import { AnimatePresence, motion } from 'framer-motion'

class HomepageText extends React.Component {
  render() {
    return (
      <Intro>
        <AnimatePresence>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <SplitText
                initial={{ y: 5, opacity: 0, rotateX: 60 }}
                animate="visible"
                onAnimationComplete={definition => {
                  console.log("animation complete: ", definition)
                }}
                variants={{
                  visible: i => ({
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    transition: {
                      delay: i * 0.045,
                    }
                  })
                }}
              >
                We're human-centered designers with real human centers. Experiences — good and bad — become memories. We can partner with you to make your product or service the good kind of memorable.
              </SplitText>
            </motion.div>
        </AnimatePresence>
      </Intro>
      // <Intro>
      //   We're human-centered designers with real human centers. Experiences — good and bad — become memories. We can partner with you to make your product or service the good kind of memorable. <HPLink to="/expertise">Explore&nbsp;how.</HPLink>
      // </Intro>
    )
  }
}

const Intro = styled.h3`
  /* visibility: hidden; */
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
const HPLink = styled(Link)`
  color: ${Color.AccentBright};
  position: relative;
  z-index: 20;
  padding: 0px 5px;
  margin-left: -5px;
  text-decoration: none;
  transition: color 0.4s ease,
              background-color 0.4s ease;
  background-color: none;
  border-radius: 4px;
  &:hover {
    color: ${Color.White};
    background-color: ${Color.Primary};
  }
`

export default HomepageText
