import React from 'react'
import * as Color from '../utils/colors'

function Pin (props) {
  const fill = Color.Primary
  return (
    <svg width="7" height="12" viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="0%" y1="0%" x2="100%" y2="66.9786625%" id="light">
          <stop stopColor="#FFFFFF" offset="30%"></stop>
          <stop stopColor="#19FFCD" offset="100%"></stop>
        </linearGradient>
      </defs>
      <style>
        {`.pin-fill { fill:${fill}; }`}
      </style>
      <g id="pin" fill="none" fillRule="evenodd">
        <path d="M2.157 5.88A3.001 3.001 0 0 1 3 0a3 3 0 0 1 .843 5.88L3.333 12h-.666l-.51-6.12z" id="pin-icon" className="pin-fill"/>
      </g>
    </svg>
  )
}
export default Pin
