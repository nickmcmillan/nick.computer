import React, { useRef } from 'react'
import { useTrail, useChain } from 'react-spring'

import SocialLink from './SocialLink'
import { configBouncey } from '../../App'

import './SocialLinks.scss'

const links = [
  {
    href: "mailto:nick.a.mcmillan@gmail.com?subject=Let's make a website&body=So what's up?",
    screenReaderText: "E-mail",
    svg: <svg className="social-icon" viewBox="0 0 512 512"><path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z" /></svg>
  },
  {
    href: 'https://github.com/nickmcmillan/',
    screenReaderText: 'Github',
    svg: <svg className="social-icon" viewBox="0 0 512 512"><path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"></path></svg>,
  },
  {
    href: 'https://codepen.io/hey-nick/',
    screenReaderText: 'Codepen',
    svg: <svg className="social-icon" viewBox="0 0 512 512"><path d="M427 201.9c-0.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4 3.3 16.3 0L420.6 320.4c4-2.6 6.6-7.4 6.6-12.2V203.9C427.1 203.2 427.1 202.6 427 201.9 427 201.7 427.1 202.6 427 201.9zM270.7 127.1l115.2 76.8 -51.5 34.4 -63.8-42.7V127.1zM241.3 127.1v68.6l-63.8 42.7 -51.5-34.4L241.3 127.1zM114.3 231.4l36.8 24.6 -36.8 24.6V231.4zM241.3 384.9L126.1 308.1l51.5-34.4 63.8 42.6V384.9zM256 290.8l-52-34.8 52-34.8 52 34.8L256 290.8zM270.7 384.9V316.3l63.8-42.6 51.5 34.4L270.7 384.9zM397.7 280.6l-36.8-24.6 36.8-24.6V280.6z" /></svg>,
  },
  {
    href: 'https://www.linkedin.com/in/nickmcmillan/',
    screenReaderText: 'LinkedIn',
    svg: <svg className="social-icon" viewBox="0 0 512 512"><path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" /></svg>,
  },
  // {
  //   href: 'https://soundcloud.com/listentofenton',
  //   screenReaderText: 'Soundcloud',
  //   svg: <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M3.4 67.3L5 60.3l-1.6-7.2c0-0.2-0.5-0.4-1-0.4 -0.5 0-0.9 0.2-1 0.4L0 60.3l1.4 7c0 0.2 0.5 0.4 1 0.4C2.9 67.7 3.3 67.5 3.4 67.3zM13.6 71.2L15 60.3l-1.4-16.7c0-0.4-0.6-0.8-1.2-0.8 -0.6 0-1.2 0.3-1.2 0.8L10 60.3l1.2 10.8c0 0.4 0.6 0.8 1.2 0.8C13.1 71.9 13.6 71.6 13.6 71.2zM23.8 71L25 60.4l-1.2-22.3c0-0.5-0.6-0.9-1.4-0.9 -0.8 0-1.4 0.4-1.4 0.9L20 60.4l1 10.6c0 0.5 0.6 0.9 1.4 0.9C23.2 71.9 23.8 71.5 23.8 71zM34 70.8L35 60.4l-1-22.4c0-0.6-0.7-1.1-1.6-1.1 -0.9 0-1.6 0.5-1.6 1.1L30 60.4l0.9 10.5c0 0.6 0.7 1.1 1.6 1.1C33.3 71.9 34 71.5 34 70.8zM44.2 70.7L45 60.4l-0.8-25.7c0-0.7-0.8-1.3-1.8-1.3 -1 0-1.8 0.6-1.8 1.3L40 60.4c0 0 0.7 10.3 0.7 10.3 0 0.7 0.8 1.3 1.8 1.3C43.4 72 44.2 71.4 44.2 70.7zM51.4 72C51.4 72 86.9 72 87.1 72 94.2 72 100 66.4 100 59.5c0-6.9-5.8-12.5-12.9-12.5 -1.8 0-3.4 0.3-5 1C81.1 36.8 71.4 28 59.5 28c-2.9 0-5.7 0.6-8.2 1.5 -1 0.4-1.2 0.7-1.2 1.5v39.6C50 71.3 50.6 71.9 51.4 72z" fill="currentColor" /></svg>,
  // },
]

const SocialLinks = ({inert}) => {

  const springRef = useRef()

  const trail = useTrail(links.length, {
    ref: springRef,
    config: configBouncey,
    y: 0,
    opacity: 1,
    // delay: 200,
    from: { y: 100, opacity: 0 },
  })

  useChain([springRef], [0.5])

  return (
    <ul className="social-links" inert={inert ? '' : undefined}>
      {trail.map((style, index) => {
        const item = links[index]
        return (
          <SocialLink
            style={style}
            key={item.href}
            href={item.href}
            screenReaderText={item.screenReaderText}
            svg={item.svg}
          />
        )
      })}
    </ul>
  )
}

export default SocialLinks
