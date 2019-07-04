import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import { configBouncey } from '../../App'

export default function SocialLink({
  svg,
  href,
  screenReaderText,
  style,
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
    <li>
      <animated.a
        href={href}
        className="social-anchor"
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPressed(false) }}
        target="_blank"
        rel="noopener noreferrer" 
        style={{
          transform: pressedScale.interpolate(t => t),
          opacity: style.interpolate(t => t)
        }}
      >

        {svg}

        <span className="u-visually-hidden">
          {screenReaderText}
        </span>

        <animated.div
          className="Social-anchor-circle"
          style={{
            transform: scale.interpolate(t => t),
            opacity: opacity.interpolate(t => t),
          }}
        />
      </animated.a>
    </li>
  )
}
