import React, { useRef } from 'react'
import { animated, useSpring } from 'react-spring'

import useOnScreen from '../../Hooks/useOnScreen'
import { configMain } from '../../App'

import style from './ListItem.module.css'


const ListItem = ({desc, Icon, href, title}) => {

  const ref = useRef()
  const onScreen = useOnScreen(ref, '-100px')

  const { opacity } = useSpring({
    opacity: onScreen ? 1 : 0,
    config: configMain
  })

  return (
    <animated.li
      ref={ref}
      style={{
        opacity
      }}
    >
      <a href={href} className={style.anchor} target="_blank" rel="noopener noreferrer">
        <div>
          <Icon className={style.icon} />
        </div>

        <div>
          <h3 className={style.title}>{title}</h3>
          <p>{desc}</p>
        </div>
      </a>
    
    </animated.li>

  )
}

export default ListItem
