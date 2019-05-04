import React from 'react'
import { useTransition, animated } from 'react-spring'


import './Detail.scss'

const config = { tension: 300, friction: 70, mass: 5 }

export default function Detail({
  active
}) {

  const transitions = useTransition(active, null, {
    from: { 
      // backgroundColor: active ? active.theme : '',
      transform: 'translate3d(-150%,0,0)'
    },
    enter: { transform: 'translate3d(0,0,0)' },
    leave: { transform: 'translate3d(-150%,0,0)' },
    config
  })
  return transitions.map(({ item, key, props }) => item && (
    <animated.div
      style={props}
      key={key}
      className="Detail"
    >

      <h2>{item.title}</h2>
      <h1 className="Detail-title">{item.subtitle}</h1>
      
      <div dangerouslySetInnerHTML={{__html: item.description}} />
      <ul>
        <li>isjeofiajseo fsaoeifj aseofi</li>
        <li>lorem</li>
        <li>ois foe aseofij aseofi </li>
        <li>lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae fugiat, expedita reprehenderit totam voluptate nulla rem magnam vel consectetur blanditiis nihil laboriosam veritatis quibusdam repellat quae inventore perspiciatis ipsum ipsa?</li>
        <li>lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae fugiat, expedita reprehenderit totam voluptate nulla rem magnam vel consectetur blanditiis nihil laboriosam veritatis quibusdam repellat quae inventore perspiciatis ipsum ipsa?</li>
        <li>lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae fugiat, expedita reprehenderit totam voluptate nulla rem magnam vel consectetur blanditiis nihil laboriosam veritatis quibusdam repellat quae inventore perspiciatis ipsum ipsa?</li>
        <li>lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae fugiat, expedita reprehenderit totam voluptate nulla rem magnam vel consectetur blanditiis nihil laboriosam veritatis quibusdam repellat quae inventore perspiciatis ipsum ipsa?</li>
      </ul>
    </animated.div>
  ))
}
