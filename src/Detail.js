import React, { useRef, } from 'react'
import { useTransition, useSpring,  useChain, animated } from 'react-spring'
import { ReactComponent as BackIcon } from './icons/left.svg'
import { ReactComponent as OpenIcon } from './icons/open.svg'


import './Detail.scss'
import './Icon.scss'

const config = { tension: 300, friction: 70, mass: 5 }

export default function Detail({
  active,
  handleClose
}) {

  const springRef = useRef()

  const imageOff = `translate3d(${0}%, ${32}px, 0px)`
  const imageOn = `translate3d(${0}%, ${0}px, 0px)`

  const { transform, opacity } = useSpring({
    ref: springRef,
    opacity: active ? 1 : 0,
    transform: active ? imageOn : imageOff,
    config
  })

  const transRef = useRef()

  const transitions = useTransition(active, null, {
    ref: transRef,
    unique: true,
    from:  { transform: 'translate3d(-150%, 0, 0)'},
    enter: { transform: 'translate3d(0, 0, 0)' },
    leave: { transform: 'translate3d(-150%, 0, 0)' },
    config,
  })

  useChain(active ? [springRef, transRef] : [transRef, springRef], [active ? 0.5 : 0, 0 ])

  return <>
    {transitions.map(({ item, key, props }) => item && (
      // <div key={key}>

        <section
          key={key}
          className="Detail"
          style={{
            color: item.textColor || '#333'
          }}
        >
        {/* <animated.div
          className="Detail-background" 
          style={{
            background: `linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, ${item.theme} 70%)`,
            opacity: opacity.interpolate(t => t)
          }}
        /> */}
        {/* <div className="Detail-inner"> */}
        
          <animated.button className="Back-btn" onClick={() => handleClose(item.title)} style={{ opacity: opacity.interpolate(t => t) }}>
            <BackIcon className="Back-icon" />
          </animated.button>

          <animated.div
            className="Detail-panel Detail-panel--primary"
            style={props}
          >
            {item.logo ? <img className="Icon-project" src={item.logo} alt={`${item.title} logo`} /> : <p className="Icon-fallback">{item.title}</p>}
            
            <h1 className="Detail-title">
              <a
                className="Detail-anchor"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.subtitle}
                <OpenIcon />
              </a>
            </h1>
          </animated.div>

          <animated.div 
            className="Detail-panel Detail-panel--secondary"
            style={{
              opacity: opacity.interpolate(t => t),
              // transform: transform.interpolate(t => t),
            }}
          >
            <div className="Detail-paragraph" dangerouslySetInnerHTML={{__html: item.description}} />

            <h3>Technologies used</h3>

            <div className="Detail-iconlist">
              {item.icons.map(({Icon, title}) => <Icon className="Icon-list-item" key={title} title={title} /> )}
            </div>
          </animated.div>


        </section>
      // </div>

    ))}
  </>
}
