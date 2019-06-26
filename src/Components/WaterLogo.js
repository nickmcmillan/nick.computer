import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

export default function WaterLogo({
  path,
  alt,
  viewBox
}) {

  const [open, toggle] = useState(false)
  const { freq, scale, transform, opacity } = useSpring({
    reverse: !open,
    from: { scale: 0, freq: '0.0175, 0.02' },
    to: { scale: 150, freq: '0.0, 0.1' },
    config: { tension: 50, friction: 80, mass: 3 }
  })

  return (
    <div
      className="Icon-project"
      onMouseOver={() => toggle(true)}
      onMouseOut={() => toggle(false)}
    >
      <animated.svg style={{ transform, opacity }} viewBox={viewBox}>
        <defs>
          <filter id="water">
            <AnimFeTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="1.5" result="TURB" seed="8" />
            <AnimFeDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="TURB" result="DISP" scale={scale} />
          </filter>
        </defs>
        <g filter="url(#water)">
          {/* <animated.text >helloooo</animated.text> */}
          <animated.g
            fill="#333"
          >
            {path}
          </animated.g>
        </g>
      </animated.svg>
      <span className="u-visually-hidden">{alt}</span>
    </div>
  )
}
