import React, { useRef, useState } from 'react'
import { useTrail, animated, useChain, useSpring } from 'react-spring'
import { useInView, InView } from 'react-intersection-observer'

import { ReactComponent as GithubIcon } from '../../icons/github.svg'

import useOnScreen from '../../Hooks/useOnScreen'
import { configBouncey } from '../../App'

// import './ListItem.scss'



const ListItem = ({desc, href, title}) => {

  // const ref = useRef()

  // const trail = useTrail(items.length, {
  //   ref: springRef,
  //   config: configBouncey,
  //   opacity: 1,
  //   from: { opacity: 0 },
  // })

  // useChain([springRef], [1])

  const ref = useRef();
  const onScreen = useOnScreen(ref, '10px');

  console.log(onScreen)
  


  // const [ref, inView] = useInView(ref, {
  //   threshold: 0.5,
  // })
  // const props = useSpring({ opacity: inView ? 1 : 0 })



  return (
    <li
      className="list-item"
      key={href}
    >
      <a href={href} className="list-anchor" target="_blank" rel="noopener noreferrer">
        <div>
          <GithubIcon className="List-icon" />
        </div>

        <div>
          <h3 className="list-title">{title}</h3>
          <p>{desc}</p>
        </div>
      </a>
    
    </li>

  )
}

export default ListItem
