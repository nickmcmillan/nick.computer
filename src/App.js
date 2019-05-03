import React, { useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import Dragger from 'react-physics-dragger'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// import Title from './Title'
import SocialLinks from './SocialLinks'
import Card from './Card'
import Detail from './Detail'

import './index.scss';
import './card.scss';

import fentonSm from './imgs/fenton-sm.png'
import ltfImg from './imgs/fenton.png'


const cardData = [
  {
    title: 'Fenton',
    image: ltfImg,
    imageSm: fentonSm,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quos excepturi? Temporibus aspernatur a et quasi at quos',
    color: '#ccc',
  },
  {
    title: 'Bike Repair',
    image: ltfImg,
    imageSm: fentonSm,
    description: 'Lorem ipibus, saepe tempore, veniam neque iusto aperiam! Id!',
    color: 'blue',
  },
  {
    title: 'RealAs',
    image: ltfImg,
    imageSm: fentonSm,
    description: 'Lorem ipsum dolor sit, am',
    color: '#fff',
  },
  {
    title: 'Tekentool',
    image: ltfImg,
    imageSm: fentonSm,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quos excepturi? Temporibus aspernatur a',
    color: 'green'
  },
]

const App = () => {

  const [active, setActive] = useState(null)
  const [draggerX, setDraggerX] = useState(0)
  const [hovered, setHovered] = useState(null)

  console.log(active)
  

  return (
    <main className="container">

      {/* <Title /> */}
      <SocialLinks />

      <Dragger
        ResizeObserver={ResizeObserver}
        padding={-16}
        onMove={e => setDraggerX(e.x)}
        className="dragger"
        disabled={active}
      >
        {cardData.map((item, i) => (
          <Card
            draggerX={draggerX}
            key={item.title}
            isActive={active === item.title}
            isHovered={hovered === item.title}
            item={item}
            handleActivate={i => {
              if (i === active) {
                setActive(null)
                enableBodyScroll()
              } else {
                disableBodyScroll()
                setActive(item.title)

              }
            }}
            handleHover={i => {
              if (i === hovered) {
                setHovered(null)
              } else {
                setHovered(item.title)
              }
            }}
          />
          
        ))}
      </Dragger>

      {active && <Detail />}
      

    </main>
  )
}

export default App