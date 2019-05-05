import React from 'react'
import { useTransition, animated } from 'react-spring'


import './Detail.scss'
import './Icon.scss'
import {ReactComponent as BackIcon } from './icons/left.svg'
import {ReactComponent as OpenIcon } from './icons/open.svg'

const config = { tension: 300, friction: 70, mass: 5 }

export default function Detail({
  active,
  handleClose
}) {

  const transitions = useTransition(active, null, {
    from:  { transform: 'translate3d(-150%, 0, 0)'},
    enter: { transform: 'translate3d(0, 0, 0)' },
    leave: { transform: 'translate3d(-150%, 0, 0)' },
    config
  })
  
  return <>
    {transitions.map(({ item, key, props }) => item && (
      <animated.div
        style={props}
        key={key}
        className="Detail"
      >

        <button className="Back-btn" onClick={() => handleClose(item.title)}>
          <BackIcon className="Back-icon" />
        </button>

        <div className="Detail-panel Detail-panel--primary">
          <img className="Icon-project" src={item.logo} />
          {/* <h2 className="Detail-subtitle">{item.title}</h2> */}
          <h1 className="Detail-title">
            <a className="Detail-anchor" href={item.url} target="_blank">
              {item.subtitle}
              <OpenIcon />
            </a>
          </h1>
        </div>

        <div className="Detail-panel Detail-panel--secondary">
          <div className="Detail-paragraph" dangerouslySetInnerHTML={{__html: item.description}} />

          <h3>Technologies used</h3>

          <div className="Detail-iconlist">
            {item.icons.map(({icon, title}) => (
              <img className="Icon-list-item" src={icon} key={icon} title={title} />
            ))}
          </div>
        </div>



      </animated.div>
    ))}

    
  </>
}
