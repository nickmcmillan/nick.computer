import React, { useRef } from 'react'
import useElementResizer from './useElementResizer'
import { useSpring, animated } from 'react-spring'

import './Shadow.scss'

const parallaxFactor = -12
const hoverY = -30
const padding = 16

const config = { tension: 300, friction: 70, mass: 5 }

const Card = ({
  isActive,
  item,
  isHovered,
  handleHover,
  handleActivate,
  draggerX,
}) => {

  // image
  // const refImage = useRef(null);
  // const { width: imageWidth, height: imageHeight, x: imageX, y: imageY } = useElementResizer(refImage)

  // backdrop
  const refBackdrop = useRef(null);
  const { width: backdropWidth, height: backdropHeight, x: backdropX, y: backdropY } = useElementResizer(refBackdrop)
  
  // const imageCenterX = -imageX + (window.innerWidth / 2) - (imageWidth / 2) - draggerX - padding
  // const imageCenterY = (window.innerHeight / 2) - (imageHeight / 2) - imageY

  const backdropCenterX = (window.innerWidth / 2) - (backdropWidth / 2) - backdropX - draggerX - padding
  // const backdropCenterY = (window.innerHeight / 2) - (backdropHeight / 2) - backdropY - imageY//+ hoverY
  const backdropScaleX = window.innerWidth / backdropWidth
  // const backdropScaleY = window.innerHeight / backdropHeight

  // const bdScale = window.innerWidth >= window.innerHeight ? backdropY + (imageHeight / 2) : (backdropY + (imageHeight/2)) * 0.33

  
  const backdropOff = 'translate3d(0px, 0px, 0px) scale(1)'
  const backdropOn = `translate3d(${backdropCenterX}px, ${window.innerHeight - backdropHeight - backdropY }px, 0px) scale(${backdropScaleX })` //backdropScaleX
  const { transformBackdrop, cardTextTransform } = useSpring({
    cardTextTransform: isActive ? `translate3d(0px, ${-backdropHeight}px, 0px)` : `translate3d(0px, 0px, 0px)`,
    transformBackdrop: isActive ? backdropOn : backdropOff,
    config
  })
  const transformerRefOffsetLeft = useElementResizer(refBackdrop).left
  const parallaxVal = (draggerX + transformerRefOffsetLeft) / parallaxFactor

  // hover interaction spring
  const { shadowTransform, shadowOpacityUpper, shadowOpacityLower, zIndex, cardTransform } = useSpring({
    cardTransform: isHovered && !isActive ? `translate3d(0px, -20px, 0px)` : `translate3d(0px, 0px, 0px)`,
    shadowTransform: isHovered ? 'scale(1)' : 'scale(0.75)',
    shadowOpacityUpper: isHovered ? 1 : 0.1,
    shadowOpacityLower: isHovered ? 0.5 : 1,
    zIndex: isHovered || isActive ? 1 : 0,
    config: { tension: 600, friction: 80, mass: 2 },
  })
  
  
  // const imageCenterX = -imageX + (imageWidth / 2) - (window.innerWidth /2 )// - draggerX - padding
  
  // const imageScreenX = window.innerWidth / imageWidth
  // const imageScreenY =  window.innerHeight / imageHeight

  const imageOff = `translate3d(${parallaxVal}px, 0px, 0px) scale(1.5)` // 1.5
  const imageOn = `translate3d(${0}px, ${item.offsetY || 0}px, 0px) scale(1)` // 1.25
  // const imageOn = `translate3d(${imageCenterX }px, ${imageCenterY}px, 0px) scale(${backdropScaleX}, ${backdropScaleX})`
  const { transformImage } = useSpring({
    transformImage: isActive ? imageOn : imageOff,
    config//: { tension: 400, friction: 80, mass: 4 }
  })

  return (
    <animated.button
      className={`item ${isActive ? 'is-active' : ''}`}
      key={item.title}
      onClick={() => handleActivate(item.title)}
      onFocus={() => handleHover(item.title)}
      onMouseEnter={() => handleHover(item.title)}
      onMouseLeave={() => handleHover(null)}
      onBlur={() => handleHover(null)}
      href="/"
      style={{
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
          // transform: shadowTransform.interpolate(t => t),
          opacity: shadowOpacityLower.interpolate(t => t),
        }}
      />

      <animated.div
        className="item_content"
        style={{
          transform: cardTextTransform.interpolate(t => t),
        }}
      >
        <h2 className="item_title">{item.title}</h2>
        <p>{item.intro}</p>
      </animated.div>
      
      <animated.div
        ref={refBackdrop}
        className="backdrop"
        style={{
          transform: transformBackdrop.interpolate(t => t),
          backgroundColor: item.theme,
        }}
      >
        {/* <animated.div
          className="filter"
        /> */}
        <animated.img
          className="item_media"
          src={isActive ? item.imageLg : item.imageSm} // perf: switch for larger version when active
          alt=""
          // ref={refImage}
          style={{
            // mixBlendMode: isActive ? 'lighten' : 'inherit',
            transform: transformImage.interpolate(t => t),
          }}
        />

      </animated.div>
    </animated.button>
  )
}

export default Card