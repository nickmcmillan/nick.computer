import React, { useRef } from 'react'
import useElementResizer from './useElementResizer'
import { useSpring, animated } from 'react-spring'

const parallaxFactor = -12
const hoverY = -30
const padding = 16

const tension = 400

const config = { tension: 200, friction: 30, mass: 2.2 }

const Card = ({
  isActive,
  item,
  i,
  handleActivate,
  draggerX,
}) => {

  // image
  const refImage = useRef(null);
  const { width: imageWidth, height: imageHeight, x: imageX, y: imageY } = useElementResizer(refImage)

  
  // backdrop
  const refBackdrop = useRef(null);
  const { width: backdropWidth, height: backdropHeight, x: backdropX, y: backdropY } = useElementResizer(refBackdrop)
  
  const imageCenterX = -imageX + (window.innerWidth / 2) - (imageWidth / 2) - draggerX - padding
  const imageCenterY = (window.innerHeight / 2) - (imageHeight / 2) - imageY
  
  console.log(imageY, imageHeight, backdropY, backdropHeight)

  const backdropCenterX = (window.innerWidth / 2) - (backdropWidth / 2) - backdropX - draggerX - padding
  const backdropCenterY = (window.innerHeight / 2) - (backdropHeight / 2) - backdropY - imageY//+ hoverY
  const backdropScaleX = window.innerWidth / backdropWidth
  const backdropScaleY = window.innerHeight / backdropHeight

  
  const backdropOff = 'translate3d(0px, 0px, 0px) scale(1)'
  const backdropOn = `translate3d(${backdropCenterX}px, ${-imageY - backdropY}px, 0px) scale(${backdropScaleX })` //backdropScaleX
  const { transformBackdrop } = useSpring({
    transformBackdrop: isActive ? backdropOn : backdropOff,
    config
  })
  const transformerRefOffsetLeft = useElementResizer(refBackdrop).left
  const parallaxVal = (draggerX + transformerRefOffsetLeft) / parallaxFactor

  
  
  // const imageCenterX = -imageX + (imageWidth / 2) - (window.innerWidth /2 )// - draggerX - padding
  
  // const imageScreenX = window.innerWidth / imageWidth
  // const imageScreenY =  window.innerHeight / imageHeight

  const imageOff = `translate3d(${0}px, 0px, 0px) scale(1.5)` // 1.5
  const imageOn = `translate3d(${0}px, 0px, 0px) scale(1)` // 1.25
  // const imageOn = `translate3d(${imageCenterX }px, ${imageCenterY}px, 0px) scale(${backdropScaleX}, ${backdropScaleX})`
  const { transformImage } = useSpring({
    transformImage: isActive ? imageOn : imageOff,
    config
  })

  // console.log(imageCenterY, backdropCenterY, imageY, backdropY)

  // const { clipPath } = useSpring({
  //   clipPath: isActive ? `inset(${-window.innerHeight/2}px ${-165}px ${-165}px ${-195}px round 0 0 0 0)` : `inset(${0}px ${0}px ${0}px ${0}px round 0 0 12px 12px)`,
  //   config: { mass: 0.5, tension: tension * 0.5, friction: 40 }
  // })


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
        ref={refBackdrop}
        className="backdrop"
        style={{ 
          transform: transformBackdrop.interpolate(t => t),
          // clipPath: clipPath.interpolate(t => t),
        }}
      >
        {/* <animated.div
          className="clipper"
          style={{
            clipPath: clipPath.interpolate(t => t),
            // overflow: isActive ? 'visible' : 'hidden',
          }}
        > */}

          <animated.img
            className="item_media"
            src={item.image}
            alt=""
            ref={refImage}
            style={{
              transform: transformImage.interpolate(t => t),
            }}
          // style={{
          //   transform: isActive ? `translate(${(backdropCenterX) - getTranslateX(this.mediaRefs[i])}px, ${backdropCenterY / 2}px) scale(5)` : 'scale(1.5)',
          //   filter: isActive ? 'blur(3px)' : 'none',
          // }}
          />

        {/* </animated.div> */}
      </animated.div>
    </button>
  )
}

export default Card