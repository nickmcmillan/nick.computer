import React, { useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import Dragger from 'react-physics-dragger'
import useDimensions from 'react-use-dimensions'

import Title from './Title'
import SocialLinks from './SocialLinks'
import Card from './Card'
import Detail from './Detail'

import './index.scss';


import cardData from './data.js'

export const breakpoint = 800

const App = () => {

  const [active, setActive] = useState(null)
  const [draggerX, setDraggerX] = useState(0)
  const [hovered, setHovered] = useState(null)
  const [outerRef, stepSize] = useDimensions()

  return (
    <>
      <main className="container" ref={outerRef}>

        <Title />
        <SocialLinks />

        <Dragger
          ResizeObserver={ResizeObserver}
          onFrame={e => setDraggerX(e.x)}
          onStaticClick={clickedEl => {
            const btn = clickedEl.closest('button')
            if (!btn) return
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
              containerX={stepSize.x}
              shouldHide={active && active !== item.title} // whether the card should translate downwards
              isActive={active === item.title}
              isHovered={hovered === item.title}
              item={item}
              
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


      </main>
      <Detail
        active={cardData.find(x => x.title === active)}
        handleClose={title => {
          setActive(null)
          if (window.innerWidth < breakpoint) return
          setHovered(title) // keep it hovered, for z-index reasons
        }}
      />
    </>
  )
}

export default App