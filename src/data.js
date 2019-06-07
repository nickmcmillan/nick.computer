import fentonSm from './imgs/fenton-sm.png'
import fentonLg from './imgs/fenton-lg.png'
import brSm from './imgs/br-sm.jpg'
import brLg from './imgs/br-lg.jpg'
import mcfrench from './imgs/mcfrench.png'

import fentonSvg from './icons/fenton.svg'
import bikerepairSvg from './icons/bikerepair.svg'

// tech
import { ReactComponent as ThreeIcon } from './icons/threejs.svg'
import { ReactComponent as CraftIcon } from './icons/craft.svg'
import { ReactComponent as ReactIcon } from './icons/react.svg'
import { ReactComponent as ReduxIcon } from './icons/redux.svg'
import { ReactComponent as Google } from './icons/google.svg'

export default [
  {
    title: 'Fenton',
    offsetY: 0,
    logo: fentonSvg,
    icons: [
      {
        Icon: ThreeIcon,
        title: 'three.js'
      },
    ],
    url: 'https://www.listentofenton.com/',
    imageLg: fentonLg,
    imageSm: fentonSm,
    intro: 'Smash some instruments!',
    subtitle: 'A website for the Melbourne band Fenton.',
    description: '<p>Built as a playful online presence for the band which I\'m a part of.</p><p>Built as a playful online presence for the band which I\'m a part of.</p><p>In terms of the code it uses a combination of ThreeJS and CannonJS which provides the physics. The models used were found online but were tweaked and cleaned up using Blender to make them download as fast as possible.</p><p>It works great on mobile and desktop, and on larger screens you can play around with a few of the camera and physics settings for fun.</p><p>Made in 2019. The source code is available on <a href="https://github.com/nickmcmillan/fenton-three-cannon" target="_blank">Github</a>.</p>',
    theme: '#d7dfff',
  },
  {
    title: 'mcfrench.co',
    icons: [
      {
        Icon: ReactIcon,
        title: 'React'
      }
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
    title: 'Bike Repair',
    offsetY: 0,
    logo: bikerepairSvg,
    icons: [
      {
        Icon: ReactIcon,
        title: 'React'
      },
      {
        Icon: ReduxIcon,
        title: 'Redux'
      },
      {
        Icon: Google,
        title: 'Google Places APIs'
      },
      {
        Icon: CraftIcon,
        title: 'Craft CMS'
      },
    ],
    url: 'https://www.bikerepair.com/',
    imageLg: brLg,
    imageSm: brSm,
    intro: 'A curated search tool for specialised bike shops.',
    subtitle: 'Hand-picked repair services that keep you riding',
    description: '<p><a href="https://www.bikerepair.com/" target="_blank">Bikerepair.com</a> is a curated search tool for specialised bike shops.</p><p>I built the front-end using React + Redux for the UI and state management, <a href="https://github.com/google-map-react/google-map-react" target="_blank">Google Maps React</a> for the map, and <a href="https://github.com/react-spring/react-spring" target="_blank">react-spring</a> for the transitions and animations throughout the site.</p><p>Craft CMS runs on the backend to provide all the bike shop data which is then combined with ratings and customer reviews from Google Places API.</p><p>Built whilst at Momkai in 2018.</p>',
    theme: '#0268bb',
    textColor: '#fff'
  },
  {
    title: 'Tekentool',
    imageLg: fentonLg,
    imageSm: fentonSm,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quos excepturi? Temporibus aspernatur a',
    theme: 'green'
  },
]