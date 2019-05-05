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
        padding={-16}
        onMove={e => setDraggerX(e.x)}
        className="dragger"
        disabled={active}
      >
        {cardData.map((item, i) => (
          <Card
            draggerX={draggerX}
            key={item.title}
            isActive={active === item.title}
            isHovered={hovered === item.title}
            item={item}
            handleActivate={i => {
              if (i === active) {
                setActive(null)
                // enableBodyScroll()
              } else {
                // disableBodyScroll()
                setActive(item.title)
              }
            }}
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
        handleClose={() => setActive(false)}
      />
    </>
  )
}

export default App