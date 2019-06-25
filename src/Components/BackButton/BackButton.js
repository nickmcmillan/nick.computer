import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { ReactComponent as BackIcon } from '../../icons/left.svg'

import './BackButton.scss'
const config = { mass: 5, tension: 2000, friction: 100 }

export default function BackButton({
  style,
  onClick
}) {

  const [hovered, setHovered] = useState(false)

  console.log(hovered)
  
  const { scale, opacity } = useSpring({
    // color: hovered ? '#fff' : 'currentColor',
    scale: hovered ? 'scale(1.25)' : 'scale(0.5)',
    opacity: hovered ? 1 : 0,
    config
  })

  return (
    <animated.button
      onClick={onClick}
      className="Back-btn"
      style={{
        color: hovered ? '#333' : 'currentColor',
        // color: color.interpolate(t => t),
        ...style
      }}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <BackIcon className="Back-icon" />
      <animated.div
        className="Back-btn-circle"
        style={{
          transform: scale.interpolate(t => t),
          opacity: opacity.interpolate(t => t),
        }}
      />
    </animated.button>
  )
}
