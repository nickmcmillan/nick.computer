import React, { useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import Dragger from 'react-physics-dragger'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';



// import Title from './Title'
import SocialLinks from './SocialLinks'
import Card from './Card'

import './index.scss';
import './card.scss';

import ltfImg from './imgs/fenton.png'
// import ltfImg from './imgs/img.webp'



//   handleActivate = (item, i) => {
//     const btn = this.outerRefs[i]
//     const { x, y, width, height } = btn.getBoundingClientRect()
//     const centerX = (window.innerWidth / 2) - (width / 2) - x
//     const centerY = (window.innerHeight / 2) - (height / 2) - y
//     const screenY = window.innerHeight / height 
//     const screenX = window.innerWidth / width

//     this.setState({ 
//       active: i,
//       centerX,
//       centerY,
//       screenX,
//       screenY,
//     })

//   }

// }

const cardData = [
  {
    title: 'Fenton',
    image: ltfImg,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quos excepturi? Temporibus aspernatur a et quasi at quos',
    color: '#ccc',
  },
  // {
  //   title: 'Bike Repair',
  //   image: ltfImg,
  //   description: 'Lorem ipibus, saepe tempore, veniam neque iusto aperiam! Id!',
  //   color: 'blue',
  // },
  // {
  //   title: 'RealAs',
  //   image: ltfImg,
  //   description: 'Lorem ipsum dolor sit, am',
  //   color: '#fff',
  // },
  // {
  //   title: 'Tekentool',
  //   image: ltfImg,
  //   description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quos excepturi? Temporibus aspernatur a',
  //   color: 'green'
  // },
]

const App = () => {

  const [active, setActive] = useState(null)
  const [draggerX, setDraggerX] = useState(0)

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
            i={i}
            isActive={active === i}
            item={item}
            handleActivate={i => {
              if (i === active) {
                setActive(null)
                enableBodyScroll()
              } else {
                disableBodyScroll()
                setActive(i)

              }
            }}
          />
          
        ))}
      </Dragger>
    </main>
  )
}

export default App