import React, { useRef } from 'react'
import { animated, useSpring } from 'react-spring'
import useOnScreen from '../../Hooks/useOnScreen'
import { configMain } from '../../App'

import ListItem from '../ListItem/ListItem'

const List = ({title, data}) => {

  const ref = useRef()
  const onScreen = useOnScreen(ref, '-100px')

  const { opacity } = useSpring({
    opacity: onScreen ? 1 : 0,
    config: configMain
  })


  return (
    <section className="section">
      <animated.h2
        className="sub-heading"
        ref={ref}
        style={{
          opacity
        }}
      >
        {title}
      </animated.h2>
      <ul className="list">
        {data.map(item => (
          <ListItem
            key={item.href}
            href={item.href}
            title={item.title}
            desc={item.desc}
            Icon={item.Icon}
          />
        ))}
      </ul>
    </section>

  )
}

export default List
