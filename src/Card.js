import React, { useRef } from 'react'
import useElementResizer from './useElementResizer'
import { useSpring, animated } from 'react-spring'

const parallaxFactor = -12
const hoverY = -30
const padding = 0 // 16

const Card = ({
  isActive,
  item,
  i,
  handleActivate,
  draggerX,
}) => {
  
  // backdrop
  const refBackdrop = useRef(null);
  const { width: backdropWidth, height: backdropHeight, x: backdropX, y: backdropY } = useElementResizer(refBackdrop)
  const backdropCenterX = (window.innerWidth / 2) - (backdropWidth / 2) - backdropX - draggerX - padding
  const backdropCenterY = (window.innerHeight / 2) - (backdropHeight / 2) - backdropY //+ hoverY
  const backdropScreenX = window.innerWidth / backdropWidth
  const backdropOff = 'translate3d(0px, 0px, 0px) scale(1, 1)'
  const backdropOn = `translate3d(${backdropCenterX}px, ${backdropCenterY}px, 0px) scale(${backdropScreenX}, ${backdropScreenX})`
  const { transformBackdrop } = useSpring({
    transformBackdrop: isActive ? backdropOn : backdropOff,
    config: { mass: 1.5, tension: 400, friction: 40 }
  })
  const transformerRefOffsetLeft = useElementResizer(refBackdrop).left
  const parallaxVal = (draggerX + transformerRefOffsetLeft) / parallaxFactor

  // image
  const refImage = useRef(null);
  const { width: imageWidth, height: imageHeight, x: imageX, y: imageY } = useElementResizer(refImage)
  const imageCenterX = -imageX + (window.innerWidth / 2) - (imageWidth / 2) - draggerX - padding
  // const imageCenterX = -imageX + (imageWidth / 2) - (window.innerWidth /2 )// - draggerX - padding
  const imageCenterY = (window.innerHeight / 2) - (imageHeight /2 ) - imageY
  // const imageScreenX = window.innerWidth / imageWidth
  // const imageScreenY =  window.innerHeight / imageHeight

  const imageOff = `translate3d(${0}px, 0px, 0px) scale(2, 2)`
  const imageOn = `translate3d(${imageCenterX }px, ${imageCenterY}px, 0px) scale(${backdropScreenX}, ${backdropScreenX})`
  const { transformImage } = useSpring({
    transformImage: isActive ? imageOn : imageOff,
    config: { mass: 1.5, tension: 400, friction: 40 }
  })

  const { clipPath } = useSpring({
    clipPath: isActive ? `inset(${-500}px ${-1000}px ${-500}px ${-2000}px)` : `inset(${0}px ${0}px ${0}px ${0}px)`,
    config: { mass: 1.5, tension: 400, friction: 60 }
  })


  return (
    <button
      className={`item ${isActive ? 'is-active' : ''}`}
      key={`${item}-${i}`}
      onClick={() => handleActivate(i)}
      href="/"
    >
    
      <animated.div
        className="item_content"
        style={{
          transform: isActive ? `translateY(-200%)` : 'none'
        }}
      >
        <h2 className="item_title">{item.title}</h2>
        <p>{item.description}</p>
      </animated.div>

      <animated.div
        className="clipper"
        style={{ 
          clipPath: clipPath.interpolate(t => t),
          // overflow: isActive ? 'visible' : 'hidden',
        }}
    >

        <animated.img
          className="item_media"
          src={item.image}
          alt=""
          ref={refImage}
          style={{
            transform: transformImage.interpolate(t => t),
            // transformOrigin: isActive ? 'inherit' : 'bottom'
          }}
        // style={{
        //   transform: isActive ? `translate(${(backdropCenterX) - getTranslateX(this.mediaRefs[i])}px, ${backdropCenterY / 2}px) scale(5)` : 'scale(1.5)',
        //   filter: isActive ? 'blur(3px)' : 'none',
        // }}
        />

      </animated.div>


      <animated.div
        ref={refBackdrop}
        className="backdrop"
        style={{ transform: transformBackdrop.interpolate(t => t) }}
      />
    </button>
  )
}

export default Card