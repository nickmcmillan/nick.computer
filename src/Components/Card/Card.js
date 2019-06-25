import React, { useRef, useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'

import './Card.scss';
import './Shadow.scss'

import { breakpoint } from '../../App'

const parallaxFactor = -20
const config = { tension: 300, friction: 70, mass: 5 }
const configHover = { tension: 400, friction: 100, mass: 0.1 }

const Card = ({
  isActive,
  shouldHide,
  item,
  id,
  isHovered,
  handleHover,
  draggerX,
  containerX,
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
  const backdropOn = `translate3d(${expandedX}px, ${expandedY}px, 0px) scale(${(winWidth < winHeight && winWidth < breakpoint) ? expandedScaleY : expandedScaleX })`

  const { transformBackdrop, cardTextTransform } = useSpring({
    cardTextTransform: isActive ? `translate3d(0px, ${-height - y * 2}px, 0px)` : `translate3d(0px, 0px, 0px)`,
    transformBackdrop: isActive ? backdropOn : backdropOff,
    config
  })

  // hover interaction spring
  const { shadowTransform, shadowOpacityUpper, shadowOpacityLower, zIndex, cardTransform } = useSpring({
    cardTransform: isHovered && !isActive ? `translate3d(0px, -2.5%, 0px)` : `translate3d(0px, ${shouldHide ? 50 : 0}%, 0px)`,
    shadowTransform: isHovered ? 'scale(1)' : 'scale(0.75)',
    shadowOpacityUpper: isHovered ? 1 : 0.1,
    shadowOpacityLower: isHovered ? 0.5 : 1,
    zIndex: isActive ? 1 : 0,
    config: configHover,
  })

  const parallaxVal = (draggerX + x) / parallaxFactor
  const imageOff = `translate3d(${parallaxVal}px, 0px, 0px) scale(1.5)` // 1.5
  const imageOn = `translate3d(0px, ${item.offsetY || 0}px, 0px) scale(1.25)` // 1.25
  const { transformImage, opacityImage } = useSpring({
    transformImage: isActive ? imageOn : imageOff,
    opacityImage: winWidth < breakpoint && isActive ? 0 : 1, // fade out on mobile
    config
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
          // borderRadius: isActive ? '0px' : '12px',
        }}
      >
        <h2 className="card_title">{item.title}</h2>
        <p>{item.intro}</p>
      </animated.div>
      
      <animated.div
        className="backdrop"
        style={{
          transform: transformBackdrop.interpolate(t => t),
          backgroundColor: item.theme,
          borderRadius: isActive ? '0px' : '12px',
        }}
      >
        <animated.img
          className="card_media"
          // perf: switch for larger version when active,
          // but only if its on a large screen
          // src={isHovered || isActive ? item.imageLg : item.imageSm}
          // src={!isActive || !isLarge ? item.imageSm : item.imageLg}
          src={winWidth < breakpoint ? item.imageSm : item.imageLg}
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