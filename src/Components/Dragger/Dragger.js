import React, { useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import Dragger from 'react-physics-dragger'

import { disableBodyScroll } from 'body-scroll-lock'

import useDimensions from '../../Hooks/useDimensions'
import useDebouncedWindowWidth from '../../Hooks/useDebouncedWindowWidth'
import Card from '../Card/Card'

import cardData from '../../data.js'

export const breakpoint = 800
export const configMain = { tension: 500, friction: 80, mass: 3 }
export const configBouncey = { mass: 5, tension: 2000, friction: 100 }

const App = ({ isExpanded, setIsExpanded, setLocation }) => {

  const [draggerX, setDraggerX] = useState(0)
  const [hovered, setHovered] = useState(null)
  const [outerRef, outerRefSize] = useDimensions()

  const windowWidth = useDebouncedWindowWidth(200)
  const isLarge = windowWidth > breakpoint // TODO: this

  console.log('ren drag')

  return (
    
    <section ref={outerRef} className="section">

      <h2 className="sub-heading">Recent work</h2>

      <Dragger
        friction={0.9}
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
        // className="dragger"
        disabled={!!isExpanded}
      >
        {cardData.map((item, i) => (
          <Card
            key={item.title}
            id={i}
            draggerX={draggerX}
            containerX={outerRefSize.x}
            shouldHide={isExpanded && isExpanded !== item.title} // whether the card should translate downwards
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

        ))}
      </Dragger>

    </section>
  )
}

export default App
