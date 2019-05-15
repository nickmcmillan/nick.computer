import fentonSm from './imgs/fenton-sm.png'
import fentonLg from './imgs/fenton-lg.png'
import brSm from './imgs/br-sm.jpg'
import brLg from './imgs/br-lg.jpg'
import mcfrench from './imgs/mcfrench.png'

import fentonSvg from './icons/fenton.svg'
import bikerepairSvg from './icons/bikerepair.svg'

// tech
import threeSvg from './icons/threejs.svg'
import craft from './icons/craft.svg'
import react from './icons/react.svg'
import redux from './icons/redux.svg'
import google from './icons/google.svg'

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
    imageLg: fentonLg,
    imageSm: fentonSm,
    intro: 'Combining ThreeJS and Cannon for 3D graphics with physics in the browser.',
    subtitle: 'A website for the Melbourne band Fenton.',
    description: '<p>Built as a playful online presence for the band which I\'m a part of.</p><p>It uses a combination of ThreeJS for the WebGL rendering and CannonJS which provides the physics. The models used were found online but were tweaked and simplified using Blender.</p><p>It works great on mobile and desktop, and on larger screens you can play around with a few of the camera and physics settings for fun.</p><p>Made in 2019. The source code is available on <a href="https://github.com/nickmcmillan/fenton-three-cannon" target="_blank">Github</a>.</p>',
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
        icon: google,
        title: 'Google Places APIs'
      }, 
      {
        icon: craft,
        title: 'Craft CMS'
      }, 
    ],
    url: 'https://www.bikerepair.com/',
    imageLg: brLg,
    imageSm: brSm,
    intro: 'Bikerepair.com is a curated list of high-end specialised bike shops.',
    subtitle: 'Hand-picked repair services that keep you riding',
    description: '<p><a href="https://www.bikerepair.com/" target="_blank">Bikerepair.com</a> is a curated list of high-end specialised bike shops.</p><p>I built the front-end using React + Redux, and used <a href="https://github.com/react-spring/react-spring" target="_blank">react-spring</a> for the transitions and animations throughout the site.</p><p>Data is provided by a headless instance of Craft CMS, combined with the Google Places API to fetch related bike shop ratings and customer reviews.</p><p>Built whilst at Momkai in 2018.</p>',
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
    imageLg: fentonLg,
    imageSm: fentonSm,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quos excepturi? Temporibus aspernatur a',
    theme: 'green'
  },
]