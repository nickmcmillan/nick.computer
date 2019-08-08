import fentonSm from './imgs/fenton-sm.jpg'
import fentonLg from './imgs/fenton-lg.jpg'
import brSm from './imgs/br-sm.jpg'
import brLg from './imgs/br-lg.jpg'
import realasSm from './imgs/realas-sm.jpg'
import realasLg from './imgs/realas-lg.jpg'

import mcfrenchLg from './imgs/mcfrench-lg.jpg'
import mcfrenchSm from './imgs/mcfrench-sm.jpg'

import drawingtoolLg from './imgs/drawingtool-lg.png'
import drawingtoolSm from './imgs/drawingtool-sm.png'

import realAsSvg from './icons/realas.svg'
import fentonSvg from './icons/fenton.svg'
import bikerepairSvg from './icons/bikerepair.svg'
import knvbSvg from './icons/knvb.svg'

// technology used
import { ReactComponent as ThreeIcon } from './icons/threejs.svg'
import { ReactComponent as CraftIcon } from './icons/craft.svg'
import { ReactComponent as ReactIcon } from './icons/react.svg'
import { ReactComponent as ReduxIcon } from './icons/redux.svg'
import { ReactComponent as Google } from './icons/google.svg'
import { ReactComponent as ReactSpring } from './icons/react-spring.svg'
import { ReactComponent as Cloudinary } from './icons/cloudinary.svg'
import { ReactComponent as Blender } from './icons/blender.svg'

export default [
  {
    title: 'Fenton',
    path: '/fenton',
    offsetY: 50,
    logo: fentonSvg,
    icons: [
      {
        Icon: Blender,
        title: 'Blender'
      },
      {
        Icon: ThreeIcon,
        title: 'three.js'
      },
    ],
    url: 'https://www.listentofenton.com/',
    imageLg: fentonLg,
    imageSm: fentonSm,
    intro: 'A three.js website for the Melbourne band Fenton',
    subtitle: 'A three.js website for the Melbourne band Fenton',
    description: '<p>Built as a playful online presence for the band which I\'m a part of.</p><p>I\'ve used the popular <a href="https://threejs.org/" rel="noopener nofollow" target="_blank">three.js</a> library and combined it with <a href="https://schteppe.github.io/cannon.js/" rel="noopener nofollow" target="_blank">cannon.js</a> which provides the physics. The models were found online and cleaned up using Blender - simplifying model complexity greatly reduced filesize.</p><p>It works great on mobile and desktop, and on larger screens you can play around with a few of the camera and physics settings for fun.</p><p>Made in 2019. The source code is available on <a href="https://github.com/nickmcmillan/fenton-three-cannon" rel="noopener nofollow" target="_blank">Github</a>.</p>',
    theme: '#f4f592',
  },
  {
    title: 'Realas',
    path: '/realas',
    offsetY: 0,
    logo: realAsSvg,
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
    ],
    url: 'https://www.realas.com/',
    imageLg: realasLg,
    imageSm: realasSm,
    intro: 'A search tool for Australian real estate property prices',
    subtitle: 'Australia’s most accurate real estate price predictions',
    description: '<p>Whilst at Accenture I worked in a dedicated and agile team to develop a real estate search tool which boasts having Australia’s most accurate real estate price prediction algorithm. It\'s designed to solve the problem of inaccurate price estimates in Australian property listings.</p><p>I joined the project to build a basic prototype, which quickly escalated, and ultimately over 8 months I developed it through multiple iterations into a fully featured app.</p><p>I helped build up and headed a small front-end team of 3 which worked alongside a larger team focused on the prediction logic and AEM backend. Towards the end of the project I worked on-site at ANZ to document and handover the codebase to their in-house team.</p><p>Launched in 2017.</p>',
    theme: '#465b9b',
    textColor: '#fff',
  },
  {
    title: 'mcfrench.co',
    path: '/mcfrench',
    offsetY: 40,
    icons: [
      {
        Icon: ReactIcon,
        title: 'React'
      },
      {
        Icon: ReactSpring,
        title: 'React Spring'
      },
      {
        Icon: Cloudinary,
        title: 'Cloudinary'
      },
    ],
    url: 'https://www.mcfrench.co',
    imageLg: mcfrenchLg,
    imageSm: mcfrenchSm,
    intro: 'A photo collection of our time spent living in Amsterdam',
    subtitle: 'A photo collection of our time spent living in Amsterdam',
    description: '<p>I wanted a way to share my photo collection from the 1.5 years where my partner and I lived in our favourite European city.</p><p>The collection was enormous (3000+ images!) and so the challenge became to find a way to load it all and lay it out - all in a single page.</p><p>Inspired by <a href="https://medium.com/google-design/google-photos-45b714dfbed1" rel="noopener nofollow" target="_blank">Antin Harasymiv\'s write-up</a> of how Google Photos approaches it, I forked <a href="https://github.com/schlosser/pig.js/" rel="noopener nofollow" target="_blank">previous work</a> and extended it into an open-source module for React called <a href="https://github.com/nickmcmillan/react-pig" rel="noopener nofollow" target="_blank">React Pig</a>.</p><p>React Pig works great. It can handle rendering of thousands of images, lazy-loading and conditionally rendering photos based on your scroll speed and direction, creating a seemless photo browsing experience.</p>',
    theme: '#dce9f8',
  },
  {
    title: 'Bike Repair',
    path: '/bike-repair',
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
        Icon: ReactSpring,
        title: 'React Spring'
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
    intro: 'A curated search tool for specialised bike shops',
    subtitle: 'Hand-picked repair services that keep you riding',
    description: '<p><a href="https://www.bikerepair.com/" rel="noopener nofollow" target="_blank">Bikerepair.com</a> is a curated search tool for specialised bike shops.</p><p>I built the front-end using React + Redux for the UI and state management, <a href="https://github.com/google-map-react/google-map-react" rel="noopener nofollow" target="_blank">Google Maps React</a> for the map, and <a href="https://github.com/react-spring/react-spring" rel="noopener nofollow" target="_blank">react-spring</a> for the transitions and animations throughout the site.</p><p>Craft CMS runs on the backend to provide all the bike shop data which is then combined with ratings and customer reviews from Google Places API.</p><p>Built whilst at <a href="https://www.momkai.com/" rel="noopener nofollow" target="_blank">Momkai</a> in 2018.</p>',
    theme: '#0a6cbc',
    textColor: '#fff'
  },
  {
    title: 'KNVB Drawing Tool',
    path: '/drawing-tool',
    offsetY: 55,
    logo: knvbSvg,
    icons: [
    ],
    url: 'https://knvbdrawingtool.netlify.com/',
    imageLg: drawingtoolLg,
    imageSm: drawingtoolSm,
    intro: 'A web-based 2D drawing tool for strategising soccer matches',
    subtitle: 'A web-based 2D drawing tool for strategising soccer matches',
    description: '<p>A web-based 2D drawing tool created for soccer coaches and strategists to plan and visualise manoeuvres for their team. It gives the user complete control to draw curved lines signalling direction of play, and to drag/drop assets (such as cones, balls, players) anywhere on the pitch.</p><p>Built for the KNVB (Royal Dutch Football Association) whilst working at <a href="https://www.momkai.com/" rel="noopener nofollow" target="_blank">Momkai</a> in 2018.</p> <p>The tool has been integrated into KNVB’s internal systems, used as both a strategy and an educational tool - allowing them to create, save and share designs with team mates. The example URL I’ve provided is a stand-alone demo.</p>',
    theme: '#7ccaa0',
    textColor: '#fff'
  },
]