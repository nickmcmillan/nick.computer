import React, { useRef } from 'react'
import useElementResizer from './useElementResizer'
import { useSpring, animated } from 'react-spring'

const parallaxFactor = -12

const Card = ({
  active,
  item,
  i,
  setOuterRefs,
  // setMediaRefs,
  handleActivate,
  draggerX,
}) => {

  const refBackdrop = useRef(null);
  const refTransformer = useRef(null);
  const { width, height, x, y } = useElementResizer(refBackdrop)

  const transformerRefOffsetLeft = useElementResizer(refBackdrop).left

  const centerX = (window.innerWidth / 2) - (width / 2) - x - draggerX
  const centerY = (window.innerHeight / 2) - (height / 2) - y

  const backdropOff = 'translate3d(0px, 0px, 0)'
  const backdropOn = `translate3d(${centerX}px, ${centerY}px, 0px)`


  const { transformBackdrop } = useSpring({
    transformBackdrop: (active === i) ? backdropOn : backdropOff,
    config: { mass: 1.5, tension: 400, friction: 40 }
  })

  return (
    <button
      className={`item ${active === i ? 'is-active' : ''}`}
      key={`${item}-${i}`}
      onClick={() => handleActivate(i)}
      href="/"
    >
      <animated.div
        ref={refBackdrop}
        className={`backdrop ${active === i ? 'backdrop--is-active' : ''}`}
        style={{
          transform: transformBackdrop.interpolate(t => t)
        }}
      />

      <div
        className="inner"
      // style={{ overflow: active === i ? 'inherit' : 'hidden' }}
      >

        <animated.div
          className="item_content"
          style={{
            transform: active === i ? `translateY(-200%)` : 'none'
          }}
        >
          <h2 className="item_title">{item.title}</h2>
          <p>{item.description}</p>
        </animated.div>

        <div
          className="transitioner"
          style={{
            transform: `translateX(${(draggerX + transformerRefOffsetLeft) / parallaxFactor }px)`
          }}
          ref={refTransformer}
        >

          <img
            className="item_media"
            src={item.image}
            alt=""
          // style={{
          //   transform: active === i ? `translate(${(this.state.centerX) - getTranslateX(this.mediaRefs[i])}px, ${this.state.centerY / 2}px) scale(5)` : 'scale(1.5)',
          //   filter: active === i ? 'blur(3px)' : 'none',
          // }}
          />

          {/* <video
                    src={item.video}
                    className="item_media"
                    autoPlay
                    playsInline
                    muted
                    loop
                  /> */}
        </div>



      </div>
    </button>
  )
}

export default Card