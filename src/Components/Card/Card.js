import React, { useRef, useEffect, useState } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import { disableBodyScroll } from 'body-scroll-lock'

import './Card.scss'
import './Shadow.scss'

import { breakpoint } from '../../App'

const configMain = { tension: 90, friction: 21, mass: 1 }

const Card = React.memo(({
  isActive,
  shouldHide,
  item,
  id,
  isHovered,
  handleHover,
  draggerX = 0,
  containerX = 0,
  isLarge,
  inert,
  style,
  setIsExpanded,
  setLocation,
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
  const { shadowTransform, shadowOpacityUpper, shadowOpacityLower, zIndex, cardTransformY } = useSpring({
    cardTransformY: isHovered && !isActive ? -2.5 : shouldHide ? 20 : 0,
    shadowTransform: isHovered ? 'scale(1)' : 'scale(0.75)',
    shadowOpacityUpper: isHovered ? 1 : 0.1,
    shadowOpacityLower: isHovered ? 0.5 : 1,
    zIndex: isActive ? 10 : 0,
    from: { shadowOpacityLower: -1000 },
    config: configMain,
  })

  const parallaxVal = (draggerX + x) / -20
  const imageOff = `translate3d(${parallaxVal}px, 0px, 0px) scale(1.5)` // 1.5
  const imageOn = `translate3d(0px, ${isLarge ? item.offsetY || 0 : 0}px, 0px) scale(1)` // 1.25
  const { transformImage, opacityImage } = useSpring({
    transformImage: isActive ? imageOn : imageOff,
    opacityImage: winWidth < breakpoint && isActive ? 0 : 1, // fade out on mobile
    config: configMain,
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
      inert={inert ? '' : undefined}
      onKeyPress={e => {
        if (e.key === 'Enter') {
          disableBodyScroll()
          setIsExpanded(item.title)
          setLocation(item.path)
        }
      }}
      style={{
        color: item.textColor || '#333',
        transform: cardTransformY.interpolate(y => `translate3d(0, ${y}%, 0)`),
        opacity: style.opacity,
        zIndex: zIndex.interpolate(t => Math.ceil(t)), // smooths out shoadow transition when hovering from one card to another
      }}
    >

      <animated.div
        className="shadow shadow-upper"
        style={{
          opacity: shadowOpacityUpper,
          transform: shadowTransform,
        }}
      />

      <animated.div
        className="shadow shadow-lower"
        style={{
          opacity: shadowOpacityLower,
        }}
      />

      <animated.div
        className="card_content"
        style={{
          transform: interpolate([style.y, cardTextTransform], (y, cardTextTransform) => `translate3d(0, ${y }%, 0) ${cardTextTransform}`),
        }}
      >
        {item.logo ? <img className="Icon-project Icon--card" src={item.logo} alt={`${item.title} logo`} /> : <p className="Icon-fallback Icon--card">{item.title}</p>}
        <p>{item.intro}</p>
      </animated.div>
      
      <animated.div
        className="backdrop"
        style={{
          transform: interpolate([style.y, transformBackdrop], (y, transformBackdrop) => `translate3d(0, ${y}%, 0) ${transformBackdrop}`),
          backgroundColor: item.theme,
          // borderRadius: isActive ? '0px' : '12px',
        }}
      >
        <animated.img
          className="card_media"
          // perf: switch for larger version when active,
          // but only if its on a large screen
          // src={!isActive || !isLarge ? item.imageSm : item.imageLg}
          src={item.imageLg}
          alt=""
          style={{
            transform: transformImage,
            opacity: opacityImage,
          }}
        />

      </animated.div>
    </animated.button>
  )
})

export default Card