import React, { useState } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'

import { configBouncey } from '../../App'

export default function SocialLink({
  svg,
  href,
  screenReaderText,
  style,
}) {

  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  
  const { scale, opacity, color } = useSpring({
    scale: hovered ? 1.25 : 0.5,
    color: hovered ? '#fff' : '#333',
    opacity: hovered ? 1 : 0,
    config: configBouncey,
  })

  const { pressedScale } = useSpring({
    pressedScale: pressed ? 0.8 : 1,
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
          color,
          opacity: style.opacity,
          transform: interpolate([style.y, pressedScale], (y, pressedScale) => `translateY(${y}%) scale(${pressedScale})`),
        }}
      >

        {svg}

        <span className="u-visually-hidden">
          {screenReaderText}
        </span>

        <animated.div
          className="Social-anchor-circle"
          style={{
            transform: scale.interpolate(s => `scale(${s})`),
            opacity,
          }}
        />
      </animated.a>
    </li>
  )
}
