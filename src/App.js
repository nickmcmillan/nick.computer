import React, { useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import Dragger from 'react-physics-dragger'
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Title from './Title'
import SocialLinks from './SocialLinks'
import Card from './Card'
import Detail from './Detail'

import './index.scss';
import './card.scss';

import cardData from './data.js'

const App = () => {

  const [active, setActive] = useState(null)
  const [draggerX, setDraggerX] = useState(0)
  const [hovered, setHovered] = useState(null)

  return (
    <>
      <main className="container">

        <Title />
        <SocialLinks />

        <Dragger
          ResizeObserver={ResizeObserver}
          onFrame={e => setDraggerX(e.x)}
          onStaticClick={clickedEl => {
            const btn = clickedEl.closest('button')
            const id = parseInt(btn.id, 10)
            setActive(cardData[id].title)
          }}
          className="dragger"
          disabled={active}
        >
          {cardData.map((item, i) => (
            <Card
              id={i}
              draggerX={draggerX}
              key={item.title}
              shouldHide={!!active && active !== item.title} // whether the card should translate downwards
              isActive={active === item.title}
              isHovered={hovered === item.title}
              item={item}
              
              handleHover={i => {
                if (i === null) {
                  setHovered(null)
                } else {
                  setHovered(item.title)
                }
                
              }}
            />
            
          ))}
        </Dragger>


      </main>
      <Detail
        active={cardData.find(x => x.title === active)}
        handleClose={(i) => {
          setActive(null)
          // TODO: focus on active card here
        }}
      />
    </>
  )
}

export default App