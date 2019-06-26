import React, { useState, useRef } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import Dragger from 'react-physics-dragger'
import useLocation from 'wouter/use-location'

import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

import useDimensions from './Hooks/useDimensions'
import useDebouncedWindowWidth from './Hooks/useDebouncedWindowWidth'

import Title from './Components/Title/Title'
import SocialLinks from './Components/SocialLinks/SocialLinks'
import Card from './Components/Card/Card'
import Detail from './Components/Detail/Detail'
// import Career from './Components/Career/Career'

import './index.scss';

import cardData from './data.js'

export const breakpoint = 800
export const configMain = { tension: 500, friction: 80, mass: 3 }
export const configBouncey = { mass: 5, tension: 2000, friction: 100 }

const App = () => {

  const [isExpanded, setIsExpanded] = useState(null)
  const draggerX = useRef(0)
  const [hovered, setHovered] = useState(null)
  const [outerRef, outerRefSize] = useDimensions()

  const windowWidth = useDebouncedWindowWidth(200)
  const isLarge = windowWidth > breakpoint // TODO: this

  // Routing
  const [location, setLocation] = useLocation()
  const matchedLocationFromData = cardData.find(item => item.path === location)
  if (matchedLocationFromData) {
    setTimeout(() => {
      disableBodyScroll()
      setIsExpanded(matchedLocationFromData.title)
    }, 0)
  }

  console.log('ren')
  

  return (
    <main className="container">

      <Title />
      <SocialLinks />

      <section ref={outerRef} className="section">

        <h2 className="sub-heading">Recent work</h2>

        <Dragger
          ResizeObserver={ResizeObserver}
          onFrame={e => draggerX.current = e.x}
          onStaticClick={clickedEl => {
            const btn = clickedEl.closest('button')
            if (!btn) return

            disableBodyScroll()
            const id = parseInt(btn.id, 10)
            setIsExpanded(cardData[id].title)
            setLocation(cardData[id].path)
          }}
          className="dragger"
          disabled={!!isExpanded}
        >
          {cardData.map((item, i) => (
            <Card
              key={item.title}
              id={i}
              draggerX={draggerX.current}
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

        <Detail
          active={cardData.find(x => x.title === isExpanded)}
          handleClose={title => {
            setIsExpanded(null)

            clearAllBodyScrollLocks()

            setLocation('/')

            if (window.innerWidth < breakpoint) return
            setHovered(title) // keep it hovered, for z-index reasons
          }}
        />

      </section>

      {/* <Career /> */}

    </main>
  )
}

export default App