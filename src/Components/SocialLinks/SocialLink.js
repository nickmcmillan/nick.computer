import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import { configBouncey } from '../../App'

export default function SocialLink({
  style,
  svg,
  href,
  screenReaderText,
}) {

  const [hovered, setHovered] = useState(false)
  
  const { scale, opacity } = useSpring({
    scale: hovered ? 'scale(1.25)' : 'scale(0.5)',
    opacity: hovered ? 1 : 0,
    config: configBouncey,
  })

  return (
    <li>
      <a
        href={href}
        className="social-anchor"
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        target="_blank"
        rel="noopener noreferrer" 
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
      </a>
    </li>
  )
}
