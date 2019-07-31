import React, { useState, useRef } from 'react'
import { useSpring, animated, useTrail, useChain } from 'react-spring'
import ResizeObserver from 'resize-observer-polyfill'
import Dragger from 'react-physics-dragger'

import { disableBodyScroll } from 'body-scroll-lock'

import useDimensions from '../../Hooks/useDimensions'
import useDebouncedWindowWidth from '../../Hooks/useDebouncedWindowWidth'
import Card from '../Card/Card'

import cardData from '../../data.js'

import styles from './Dragger.module.css'

export const breakpoint = 800
export const configMain = { tension: 500, friction: 80, mass: 3 }
export const configBouncey = { mass: 5, tension: 2000, friction: 100 }

const DraggerContainer = ({ isExpanded, setIsExpanded, setLocation }) => {

  const [draggerX, setDraggerX] = useState(0)
  const [hovered, setHovered] = useState(null)
  const [outerRef, outerRefSize] = useDimensions()

  const windowWidth = useDebouncedWindowWidth(400)
  const isLarge = windowWidth > breakpoint // TODO: this

  const { y } = useSpring({
    y: 0,
    config: configMain,
    immediate: isExpanded,
    delay: 1200,
    from: { y: 100 }
  })

  const springRef = useRef()

  const trail = useTrail(cardData.length, {
    ref: springRef,
    config: { mass: 2, tension: 160, friction: 24 },
    y: 0,
    opacity: 1,
    delay: 500,
    // onRest: (a) => {
      
    // },
    immediate: isExpanded,
    from: { y: 20, opacity: 0 },
  })

  useChain([springRef], [0])

  return (
    <section ref={outerRef} className="section">

      <div className="sub-heading-wrapper">
        <animated.h2
          className="sub-heading"
          style={{
            transform: y.interpolate(y => `translate3d(0,${y}%,0)`),
          }}
        >
          Recent Work
        </animated.h2>
      </div>

      <Dragger
        ResizeObserver={ResizeObserver}
        onFrame={e => setDraggerX(e.x)}
        onStaticClick={clickedEl => {
          const btn = clickedEl.closest('button')
          if (!btn) return

          disableBodyScroll()

          const id = parseInt(btn.id, 10)
          setIsExpanded(cardData[id].title)
          setLocation(cardData[id].path)
        }}
        className={styles.Dragger}
        disabled={!!isExpanded}
      >
        {trail.map((style, index) => {
          const item = cardData[index]
          return (
            <Card
              key={item.title}
              id={index}
              style={style}
              draggerX={draggerX}
              containerX={outerRefSize.x}
              shouldHide={isExpanded && isExpanded !== item.title} // whether the card should translate downwards
              inert={isExpanded && isExpanded !== item.title}
              isActive={isExpanded === item.title}
              isHovered={hovered === item.title}
              item={item}
              isLarge={isLarge}
              handleHover={i => {
                if (i === null) {
                  setHovered(null)
                } else {
                  if (window.innerWidth < breakpoint) return
                  setHovered(item.title)
                }
              }}
            />
          )
        })}
      </Dragger>

    </section>
  )
}

export default DraggerContainer
