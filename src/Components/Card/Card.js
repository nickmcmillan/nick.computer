import React, { useRef, useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'

import './Card.scss';
import './Shadow.scss'

import { breakpoint, configMain } from '../../App'

// const parallaxFactor = -23
// const configMain = { tension: 1000, friction: 200, mass: 5 }
// const configMain = { tension: 400, friction: 100, mass: 0.1 }

const Card = ({
  isActive,
  shouldHide,
  item,
  id,
  isHovered,
  handleHover,
  draggerX = 0,
  containerX = 0,
  isLarge,
}) => {
  
  const refBackdrop = useRef(null)

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    const { width, height, x, y } = refBackdrop.current.getBoundingClientRect()
    setWidth(width)
    setHeight(height)
    setX(x)
    setY(y)
  }, [isLarge, isActive]) // when should we re-measure?

  const winWidth = window.innerWidth
  const winHeight = window.innerHeight

  const cardMargin = 32
  const expandedX = (winWidth / 2) - (width / 2) - draggerX - containerX - (width + cardMargin) * id
  const expandedY = winHeight - height - y
  const expandedScaleX = winWidth / width
  const expandedScaleY = winHeight / height

  const backdropOff = 'translate3d(0px, 0px, 0px) scale(1)'
  const backdropOn = `translate3d(${expandedX}px, ${expandedY}px, 0px) scale(${(winWidth < breakpoint && winWidth < winHeight) ? expandedScaleY : expandedScaleX })`

  const { transformBackdrop, cardTextTransform } = useSpring({
    cardTextTransform: isActive ? `translate3d(0px, ${-height - y * 2}px, 0px)` : `translate3d(0px, 0px, 0px)`,
    transformBackdrop: isActive ? backdropOn : backdropOff,
    config: configMain
  })

  // hover interaction spring
  const { shadowTransform, shadowOpacityUpper, shadowOpacityLower, zIndex, cardTransform } = useSpring({
    cardTransform: isHovered && !isActive ? `translate3d(0px, -2.5%, 0px)` : `translate3d(0px, ${shouldHide ? 50 : 0}%, 0px)`,
    shadowTransform: isHovered ? 'scale(1)' : 'scale(0.75)',
    shadowOpacityUpper: isHovered ? 1 : 0.1,
    shadowOpacityLower: isHovered ? 0.5 : 1,
    zIndex: isActive ? 1 : 0,
    config: configMain,
  })

  const parallaxVal = (draggerX + x) / (isLarge ? -20 : -10)
  const imageOff = `translate3d(${parallaxVal}px, 0px, 0px) scale(1.5)` // 1.5
  const imageOn = `translate3d(0px, ${isLarge ? item.offsetY || 0 : 0}px, 0px) scale(1.1)` // 1.25
  const { transformImage, opacityImage } = useSpring({
    transformImage: isActive ? imageOn : imageOff,
    opacityImage: winWidth < breakpoint && isActive ? 0 : isActive ? item.activeOpacity || 1 : 1, // fade out on mobile
    // config: configMain
  })

  return (
    <animated.button
      id={id}
      ref={refBackdrop}
      className={`card ${isActive ? 'is-active' : ''}`}
      key={item.title}
      onFocus={() => handleHover(item.title)}
      onMouseEnter={() => handleHover(item.title)}
      onMouseLeave={() => handleHover(null)}
      onBlur={() => handleHover(null)}
      href="/"
      style={{
        color: item.textColor || '#333',
        transform: cardTransform.interpolate(t => t),
        zIndex: zIndex.interpolate(t => Math.ceil(t)), // smooths out shoadow transition when hovering from one card to another
      }}
    >

      <animated.div
        className="shadow shadow-upper"
        style={{
          opacity: shadowOpacityUpper.interpolate(t => t),
          transform: shadowTransform.interpolate(t => t),
        }}
      />

      <animated.div
        className="shadow shadow-lower"
        style={{
          opacity: shadowOpacityLower.interpolate(t => t),
        }}
      />

      <animated.div
        className="card_content"
        style={{
          transform: cardTextTransform.interpolate(t => t),
        }}
      >
        {item.logo ? <img className="Icon-project Icon--card" src={item.logo} alt={`${item.title} logo`} /> : <p className="Icon-fallback Icon--card">{item.title}</p>}
        <p>{item.intro}</p>
      </animated.div>
      
      <animated.div
        className="backdrop"
        style={{
          transform: transformBackdrop.interpolate(t => t),
          backgroundColor: item.theme,
          borderRadius: isActive ? '0px' : '12px',
          // boxShadow: isActive ? '-60px 60px 40px 10px rgba(51, 51, 51, 0.15)' : 'none',
        }}
      >
        <animated.img
          className="card_media"
          // perf: switch for larger version when active,
          // but only if its on a large screen
          src={!isActive || !isLarge ? item.imageSm : item.imageLg}
          // src={winWidth < breakpoint ? item.imageSm : item.imageLg}
          alt=""
          style={{
            transform: transformImage.interpolate(t => t),
            opacity: opacityImage.interpolate(t => t),
          }}
        />

      </animated.div>
    </animated.button>
  )
}

export default Card