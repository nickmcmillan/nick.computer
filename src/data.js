import fentonSm from './imgs/fenton-sm.png'
import ltfImg from './imgs/fenton.png'
import bgLg from './imgs/br.jpg'
import mcfrench from './imgs/mcfrench.png'

import fentonSvg from './icons/fenton.svg'
import bikerepairSvg from './icons/bikerepair.svg'

// tech
import threeSvg from './icons/threejs.svg'
import craft from './icons/craft.svg'
import react from './icons/react.svg'
import redux from './icons/redux.svg'

export default [
  {
    title: 'Fenton',
    offsetY: 60,
    logo: fentonSvg,
    icons: [
      {
        icon: threeSvg,
        title: 'three.js'
      },
    ],
    url: 'https://www.listentofenton.com/',
    imageLg: ltfImg,
    imageSm: fentonSm,
    intro: 'Combining ThreeJS and Cannon for 3D graphics with physics in the browser.',
    subtitle: 'A website for the Melbourne band Fenton.',
    description: '<p>Built using a combination of ThreeJS for the 3D rendering and CannonJS which provides the physics.</p><p>The models used were found online but were tweaked and simplified using Blender.</p><p>It works great on mobile and desktop, and on larger screens you can play around with a few of the camera and physics settings for fun.</p><p>Made in 2019. The source code is available on <a href="https://github.com/nickmcmillan/fenton-three-cannon" target="_blank">Github</a>.</p>',
    theme: '#d7dfff',
  },
    {
    title: 'Bike Repair',
    offsetY: 0,
    logo: bikerepairSvg,
    icons: [
      {
        icon: react,
        title: 'React'
      },
      {
        icon: redux,
        title: 'Redux'
      },
      {
        icon: craft,
        title: 'Craft CMS'
      }, 
    ],
    url: 'https://www.bikerepair.com/',
    imageLg: bgLg,
    imageSm: bgLg,
    intro: 'Bikerepair.com is a curated list of high-end boutique bike shops.',
      subtitle: 'Hand-picked repair services that keep you riding',
    description: '<p>I build the front-end using React, Redux, and react-spring for the transitions/logo animation. I worked with a back-end developer who developed the APIs and headless CMS.</p>',
    theme: '#d4e9ff',
  },
  {
    title: 'mcfrench.co',
    icons: [
      {
        icon: react,
        title: 'React'
      },
      {
        icon: redux,
        title: 'Redux'
      },
      {
        icon: craft,
        title: 'Craft CMS'
      },
    ],
    url: 'https://www.mcfrench.co',
    imageLg: mcfrench,
    imageSm: mcfrench,
    intro: 'blahblahahah',
    subtitle: 'A photo collection of our time spent living in Amsterdam.',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, beatae autem consequatur quas natus, rerum corporis labore, optio omnis inventore maxime aspernatur voluptatum? Mollitia cumque laboriosam neque architecto enim necessitatibus!',
    theme: '#fff',
  },
  {
    title: 'Tekentool',
    imageLg: ltfImg,
    imageSm: fentonSm,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quos excepturi? Temporibus aspernatur a',
    theme: 'green'
  },
]