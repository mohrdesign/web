import styled from 'styled-components'
import { breakpoint } from './breakpoints'

const ContentContainer = styled.div`
  margin: 0 auto;
  ${breakpoint.for_phone_only`
    max-width: 90%;
    width: 540px;
    padding: 0 16px;
  `}
  ${breakpoint.for_tablet_portrait_up`
    width: 750px;
    max-width: 90%;
    padding: 0 24px;
  `}
  ${breakpoint.for_desktop_up`
    width: 960px;
    max-width: 90%;
    padding: 0 40px;
  `}
`
export default ContentContainer
