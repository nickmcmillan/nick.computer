import React, { useRef, useEffect } from 'react'
import { useTransition, useSpring,  useChain, animated } from 'react-spring'
import { ReactComponent as OpenIcon } from '../../icons/open.svg'
import BackButton from '../BackButton/BackButton'

import './Detail.scss'
import '../../Icon.scss'

import { breakpoint } from '../../App'

const config = { tension: 300, friction: 70, mass: 5 }

export default function Detail({
  active,
  handleClose
}) {

  const springRef = useRef()

  const { opacity } = useSpring({
    ref: springRef,
    opacity: active ? 1 : 0,
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

  // scroll to top when detail becomes active
  useEffect(() => {
    if (window.innerWidth < breakpoint) return
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [active])

  return <>
    {transitions.map(({ item, key, props }) => item && (

      <section
        key={key}
        className="Detail"
        style={{
          color: item.textColor || '#333',
          pointerEvents: active ? 'all' : 'none', // so cards are interactive faster
        }}
      >
      

        <div className="Detail-panel Detail-panel--primary">
          <BackButton
            onClick={handleClose}
            style={{ 
              opacity: opacity.interpolate(t => t),

            }}

          />

          <animated.div
            
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
        </div>

        <animated.div 
          className="Detail-panel Detail-panel--secondary"
          style={{
            opacity: opacity.interpolate(t => t),
          }}
        >
          <div className="Detail-paragraph" dangerouslySetInnerHTML={{__html: item.description}} />

          <h3>Technologies used</h3>

          <div className="Detail-iconlist">
            {item.icons.map(({Icon, title}) => <Icon className="Icon-list-item" key={title} title={title} /> )}
          </div>
        </animated.div>

      </section>

    ))}
  </>
}
