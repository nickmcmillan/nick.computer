import React, { useRef } from 'react'
import { animated, useSpring } from 'react-spring'
import useOnScreen from '../../Hooks/useOnScreen'
import { configMain } from '../../App'

import ListItem from '../ListItem/ListItem'

const List = ({title, data, inert}) => {

  const ref = useRef()
  const onScreen = useOnScreen(ref, '-100px')

  const { x } = useSpring({
    x: onScreen ? 0 : 100,
    config: configMain
  })

  return (
    <section className="section" inert={inert ? '' : undefined}>
      <div className="sub-heading-wrapper" ref={ref}>
        <animated.h2
          className="sub-heading"
          style={{
            transform: x.interpolate(x => `translate3d(0,${x}%,0)`),
          }}
        >
          {title}
        </animated.h2>
      </div>

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
