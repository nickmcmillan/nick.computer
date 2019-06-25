import React, { useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import Dragger from 'react-physics-dragger'

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import useDimensions from './Hooks/useDimensions'
import useDebouncedWindowWidth from './Hooks/useDebouncedWindowWidth'

import Title from './Components/Title/Title'
import SocialLinks from './Components/SocialLinks/SocialLinks'
import Card from './Components/Card/Card'
import Detail from './Components/Detail/Detail'

import './index.scss';
import './career.scss';

import cardData from './data.js'

export const breakpoint = 800

const App = () => {

  const [active, setActive] = useState(null)
  const [draggerX, setDraggerX] = useState(0)
  const [hovered, setHovered] = useState(null)
  const [outerRef, outerRefSize] = useDimensions()

  const windowWidth = useDebouncedWindowWidth(200)
  const isLarge = windowWidth > breakpoint

  return (
    <>
      <main className="container" >

        <Title />
        <SocialLinks />

        <section ref={outerRef} className="section">

          <h2 className="sub-heading">Selected work</h2>

          <Dragger
            friction={0.92}
            ResizeObserver={ResizeObserver}
            onFrame={e => setDraggerX(e.x)}
            onStaticClick={clickedEl => {
              const btn = clickedEl.closest('button')
              if (!btn) return
              disableBodyScroll()
              const id = parseInt(btn.id, 10)
              setActive(cardData[id].title)
            }}
            className="dragger"
            disabled={!!active}
          >
            {cardData.map((item, i) => (
              <Card
                key={item.title}
                id={i}
                draggerX={draggerX}
                containerX={outerRefSize.x}
                shouldHide={active && active !== item.title} // whether the card should translate downwards
                isActive={active === item.title}
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

        <section className="section">
          <h2 className="sub-heading">Career</h2>
          <ul className="career">
            <li>Job</li>
            <li>job</li>
            <li>job</li>
            <li>job</li>
          </ul>

        </section>

      </main>

      <Detail
        active={cardData.find(x => x.title === active)}
        handleClose={title => {
          setActive(null)
          
          enableBodyScroll()

          if (window.innerWidth < breakpoint) return
          setHovered(title) // keep it hovered, for z-index reasons
        }}
      />

    </>
  )
}

export default App