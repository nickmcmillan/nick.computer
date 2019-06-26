import React, { useState } from 'react'
import Dragger from './Components/Dragger/Dragger'
import useLocation from 'wouter/use-location'

import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

import Title from './Components/Title/Title'
import SocialLinks from './Components/SocialLinks/SocialLinks'
import Detail from './Components/Detail/Detail'
// import Career from './Components/Career/Career'

import './index.scss';

import cardData from './data.js'

export const breakpoint = 800
export const configMain = { tension: 500, friction: 80, mass: 3 }
export const configBouncey = { mass: 5, tension: 2000, friction: 100 }

const App = () => {

  const [isExpanded, setIsExpanded] = useState(null)

  // Routing
  const [location, setLocation] = useLocation()
  const matchedLocationFromData = cardData.find(item => item.path === location)
  if (matchedLocationFromData) {
    setTimeout(() => {
      disableBodyScroll()
      setIsExpanded(matchedLocationFromData.title)
    }, 0)
  }

  console.log('ren app')
  

  return (
    <main className="container">

      <Title />
      <SocialLinks />

      <Dragger
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        setLocation={setLocation}
      />

      <Detail
        active={cardData.find(x => x.title === isExpanded)}
        handleClose={() => {
          setIsExpanded(null)
          clearAllBodyScrollLocks()
          setLocation('/')

          // if (window.innerWidth < breakpoint) return
          // setHovered(title) // keep it hovered, for z-index reasons
        }}
      />

      {/* <Career /> */}

    </main>
  )
}

export default App