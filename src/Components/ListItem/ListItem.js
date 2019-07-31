import React, { useRef, useState } from 'react'
import { animated, useSpring } from 'react-spring'

import useOnScreen from '../../Hooks/useOnScreen'
import { configMain, configBouncey } from '../../App'

import style from './ListItem.module.css'


const ListItem = ({desc, Icon, href, title}) => {

  const ref = useRef()
  const onScreen = useOnScreen(ref, '-100px')

  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)

  const { scale, opacity, color } = useSpring({
    scale: hovered ? 'scale(1.25)' : 'scale(0.5)',
    color: hovered ? '#fff' : '#333',
    opacity: hovered ? 1 : 0,
    config: configBouncey,
  })

  const { pressedScale } = useSpring({
    pressedScale: pressed ? 'scale(0.9)' : 'scale(1)',
    config: configBouncey,
  })

  const { opacityIo, height, x } = useSpring({
    opacityIo: onScreen ? 1 : 0,
    x: onScreen ? 0 : 100,
    config: configMain
  })

  return (
    <animated.li
      ref={ref}
      className={style.list}
      style={{
        overflow: x.interpolate(x => x < 1 ? 'visible' : 'hidden')
      }}
    >
      <animated.a
        href={href}
        className={style.anchor}
        target="_blank"
        rel="noopener noreferrer"
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPressed(false) }}
        style={{
          transform: x.interpolate(x => `translate3d(0,${x}%,0)`),
          // transform: pressedScale.interpolate(t => t),
          // opacity: opacityIo
        }}
      >
        <animated.div
          className={style.iconWrap}
          style={{
            color: color.interpolate(t => t),
          }}
        >
          <Icon className={style.icon} />
          <animated.div
            className="Social-anchor-circle"
            style={{
              transform: scale.interpolate(t => t),
              opacity: opacity.interpolate(t => t),
            }}
          />
        </animated.div>

        <div>
          <h3 className={style.title}>{title}</h3>
          <p className={style.para}>{desc}</p>
        </div>

        
      </animated.a>
    </animated.li>

  )
}

export default ListItem
