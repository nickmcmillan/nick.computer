import React, { useRef } from 'react'
import useElementResizer from './useElementResizer'
import { useSpring, animated } from 'react-spring'

import './Ccard.scss';
import './Shadow.scss'

import { breakpoint } from './App'

const parallaxFactor = -12
const config = { tension: 300, friction: 70, mass: 5 }

const Card = ({
  isActive,
  shouldHide,
  item,
  id,
  isHovered,
  handleHover,
  draggerX,
}) => {

  // backdrop
  const refBackdrop = useRef(null)
  const { 
    width: backdropWidth,
    height: backdropHeight,
    x: backdropX,
    y: backdropY,
    left: transformerRefOffsetLeft
  } = useElementResizer(refBackdrop)
  const backdropCenterX = (window.innerWidth / 2) - (backdropWidth / 2) - backdropX - draggerX
  const backdropScaleX = window.innerWidth / backdropWidth
  const backdropScaleY = window.innerHeight / backdropHeight

  const backdropOff = 'translate3d(0px, 0px, 0px) scale(1)'
  const backdropOn = `translate3d(${backdropCenterX}px, ${window.innerHeight - backdropHeight - backdropY}px, 0px) scale(${window.innerWidth < backdropWidth ? backdropScaleY : backdropScaleX })` //backdropScaleX
  const { transformBackdrop, cardTextTransform } = useSpring({
    cardTextTransform: isActive ? `translate3d(0px, ${-backdropHeight}px, 0px)` : `translate3d(0px, 0px, 0px)`,
    transformBackdrop: isActive ? backdropOn : backdropOff,
    config
  })

  // hover interaction spring
  const { shadowTransform, shadowOpacityUpper, shadowOpacityLower, zIndex, cardTransform } = useSpring({
    cardTransform: isHovered && !isActive ? `translate3d(0px, -2.5%, 0px)` : `translate3d(0px, ${shouldHide ? 50 : 0}%, 0px)`,
    shadowTransform: isHovered ? 'scale(1)' : 'scale(0.75)',
    shadowOpacityUpper: isHovered ? 1 : 0.1,
    shadowOpacityLower: isHovered ? 0.5 : 1,
    zIndex: isHovered || isActive ? 1 : 0,
    config: { tension: 600, friction: 80, mass: 2 },
  })

  const pullImageDown = 0

  const parallaxVal = (draggerX + transformerRefOffsetLeft) / parallaxFactor
  const imageOff = `translate3d(${parallaxVal}px, 0px, 0px) scale(1.5)` // 1.5
  const imageOn = `translate3d(${0}px, ${pullImageDown}px, 0px) scale(1.25)` // 1.25
  const { transformImage, opacityImage } = useSpring({
    transformImage: isActive ? imageOn : imageOff,
    opacityImage: window.innerWidth < breakpoint && isActive ? 0 : 1,
    config//: { tension: 400, friction: 80, mass: 4 }
  })

  return (
    <animated.button
      id={id}
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
        zIndex: zIndex.interpolate(t => Math.round(t)), // smooths out shoadow transition when hovering from one card to another
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
        ref={refBackdrop}
        className="backdrop"
        style={{
          transform: transformBackdrop.interpolate(t => t),
          backgroundColor: item.theme,
          borderRadius: isActive ? '0px' : '12px',
        }}
      >
        <animated.img
          className="card_media"
          src={isActive ? item.imageLg : item.imageSm} // perf: switch for larger version when active
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