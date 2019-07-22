import React, { useRef, useState } from 'react'
import { useTrail, animated, useChain, useSpring } from 'react-spring'
import { useInView, InView } from 'react-intersection-observer'

import ListItem from '../ListItem/ListItem'
import { ReactComponent as GithubIcon } from '../../icons/github.svg'
import { configBouncey } from '../../App'

import './OpenSource.scss'

const items = [
  {
    href: 'https://github.com/nickmcmillan/react-physics-dragger',
    title: 'React Physics Dragger',
    desc: 'A simple, no-frills horiztonal dragger/slider with physics',
  },
  {
    href: 'https://github.com/nickmcmillan/react-pig',
    title: 'React Pig',
    desc: 'Arrange images in a responsive, progressive-loading grid managed in JavaScript using CSS transforms',
  },
]


const OpenSource = () => {

  // const ref = useRef()

  // const trail = useTrail(items.length, {
  //   ref: springRef,
  //   config: configBouncey,
  //   opacity: 1,
  //   from: { opacity: 0 },
  // })

  // useChain([springRef], [1])

  // const [ref, inView] = useInView(ref, {
  //   threshold: 0.5,
  // })
  // const props = useSpring({ opacity: inView ? 1 : 0 })



  return (
    <section className="section">
      <h2 className="sub-heading">Open Source Work</h2>
      <ul className="list">
        {items.map(item => {
          return (
            <ListItem
              href={item.href}
              title={item.title}
              desc={item.desc}
            />
          )})}

      </ul>
    </section>
  )
}

export default OpenSource
