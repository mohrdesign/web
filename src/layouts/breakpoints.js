import { css } from 'styled-components'

export const breakpoint = {
  for_phone_only: (...args) => css`
    @media (max-width: 599px) {
      ${css(...args)}
    }
  `,
  for_tablet_portrait_up: (...args) => css`
    @media (min-width: 600px) {
      ${css(...args)}
    }
  `,
  for_tablet_landscape_up: (...args) => css`
    @media (min-width: 900px) {
      ${css(...args)}
    }
  `,
  for_desktop_up: (...args) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `,
  for_big_desktop_up: (...args) => css`
    @media (min-width: 1800px) {
      ${css(...args)}
    }
  `
};
