import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { ReactComponent as BackIcon } from '../../icons/left.svg'

import './BackButton.scss'

import { configBouncey } from '../../App'

export default function BackButton({
  style,
  onClick
}) {

  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  
  const { scale, opacity } = useSpring({
    scale: hovered ? 'scale(1.25)' : 'scale(0.5)',
    opacity: hovered ? 1 : 0,
    config: configBouncey,
  })

  const { pressedScale } = useSpring({
    pressedScale: pressed ? 'scale(0.8)' : 'scale(1)',
    config: configBouncey,
  })

  return (
    <animated.button
      onClick={onClick}
      className="Back-btn"
      style={{
        color: hovered ? '#333' : 'currentColor',
        transform: pressedScale,
        ...style
      }}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false) }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      <BackIcon className="Back-icon" />
      <animated.div
        className="Back-btn-circle"
        style={{
          transform: scale,
          opacity,
        }}
      />
    </animated.button>
  )
}
