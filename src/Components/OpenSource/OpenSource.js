import React from 'react'

import ListItem from '../ListItem/ListItem'
import { ReactComponent as GithubIcon } from '../../icons/github.svg'
import { ReactComponent as CodePenIcon } from '../../icons/codepen.svg'

const items = [
  {
    href: 'https://github.com/nickmcmillan/react-physics-dragger',
    title: 'React Physics Dragger',
    desc: 'A simple, no-frills horiztonal dragger/slider with physics.',
    Icon: GithubIcon,
  },
  {
    href: 'https://github.com/nickmcmillan/react-pig',
    title: 'React Pig',
    desc: 'Arrange images in a responsive, progressive-loading grid managed in JavaScript using CSS transforms.',
    Icon: GithubIcon,
  },
  {
    href: 'https://codepen.io/collection/DYxPGN/',
    title: 'Generic reusable',
    desc: 'A collection of common re-usable components. Created to save time given these components are often always the same.',
    Icon: CodePenIcon,
  },
]


const OpenSource = () => {

  return (
    <section className="section">
      <h2 className="sub-heading">Open Source Work</h2>
      <ul className="list">
        {items.map(item => {
          return (
            <ListItem
              key={item.href}
              href={item.href}
              title={item.title}
              desc={item.desc}
              Icon={item.Icon}
            />
          )})}

      </ul>
    </section>
  )
}

export default OpenSource
