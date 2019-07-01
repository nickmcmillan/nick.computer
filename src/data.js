import fentonSm from './imgs/fenton-sm.png'
import fentonLg from './imgs/fenton-lg.png'
import brSm from './imgs/br-sm.jpg'
import brLg from './imgs/br-lg.jpg'
import realasSm from './imgs/realas-sm.jpg'
import realasLg from './imgs/realas-lg.jpg'

import mcfrenchLg from './imgs/mcfrench-lg.jpg'
import mcfrenchSm from './imgs/mcfrench-sm.jpg'

import realAsSvg from './icons/realas.svg'
import fentonSvg from './icons/fenton.svg'
import bikerepairSvg from './icons/bikerepair.svg'

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
    offsetY: 80,
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
    description: '<p>Built as a playful online presence for the band which I\'m a part of.</p><p>I\'ve used the popular <a href="https://threejs.org/" rel="noopener nofollow" target="_blank">three.js</a> and combined it with <a href="https://schteppe.github.io/cannon.js/" rel="noopener nofollow" target="_blank">cannon.js</a> which provides the physics. I downloaded most of the models from online marketplaces and cleaned them up using Blender - simplifying model complexity greatly reduces filesize.</p><p>It works great on mobile and desktop, and on larger screens you can play around with a few of the camera and physics settings for fun.</p><p>Made in 2019. The source code is available on <a href="https://github.com/nickmcmillan/fenton-three-cannon" rel="noopener nofollow" target="_blank">Github</a>.</p>',
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
    description: '<p>Whilst at Accenture I worked in a dedicated and agile team on-site at ANZ. We developed a real estate search tool which boasts having Australia’s most accurate real estate price prediction algorithm - designed to solve the problem of inaccurate price estimates in Australian property listings.</p><p>I started the project from scratch with a basic prototype built in React. Over the course of 6 months I helped develop multiple iterations of the app, eventually building up a small front-end team until finally handing the finished codebase and documentation over to ANZ.</p><p>Launched in 2017.</p>',
    theme: '#465b9b',
    textColor: '#fff',
  },
  {
    title: 'mcfrench.co',
    path: '/mcfrench',
    activeOpacity: 0.9,
    offsetY: 50,
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
    description: '<p>I wanted a way to share my photo collection from the 1.5 year period where my partner and I lived in my second favourite city, Amsterdam (Melbourne being my number one).</p><p>The collection was enormous though. So my challenge was to find a way to organise and layout the photos - all in a single page - and without the browser choking on 3000+ images.</p><p>Inspired by <a href="https://medium.com/google-design/google-photos-45b714dfbed1">Antin Harasymiv\'s write-up</a> of how Google Photos does it, I forked <a href="https://github.com/schlosser/pig.js/" rel="noopener nofollow" target="_blank">previous work</a> and extended it into an open-source module for React called <a href="https://github.com/nickmcmillan/react-pig" rel="noopener nofollow" target="_blank">React Pig</a>.</p><p>I wrote Node functions which bulk upload images to Cloudinary. I chose Cloudinary as they support on-the-fly image resizing and have a well documented API.</p><p>React Pig works great. It can render thousands of images, creating a seemless scrolling experience with lazy-loading, clickable thumbnails, and can even group images by dates</p>',
    theme: '#dce9f8',
  },
  {
    title: 'Bike Repair',
    path: '/bike-repair',
    offsetY: 0,
    activeOpacity: 1,
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
    intro: 'A curated search tool for specialised bike shops.',
    subtitle: 'Hand-picked repair services that keep you riding',
    description: '<p><a href="https://www.bikerepair.com/" target="_blank">Bikerepair.com</a> is a curated search tool for specialised bike shops.</p><p>I built the front-end using React + Redux for the UI and state management, <a href="https://github.com/google-map-react/google-map-react" rel="noopener nofollow" target="_blank">Google Maps React</a> for the map, and <a href="https://github.com/react-spring/react-spring" rel="noopener nofollow" target="_blank">react-spring</a> for the transitions and animations throughout the site.</p><p>Craft CMS runs on the backend to provide all the bike shop data which is then combined with ratings and customer reviews from Google Places API.</p><p>Built whilst at Momkai in 2018.</p>',
    theme: '#1a8acc',
    textColor: '#fff'
  },
  // {
  //   title: 'Tekentool',
  //   imageLg: fentonLg,
  //   imageSm: fentonSm,
  //   description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quos excepturi? Temporibus aspernatur a',
  //   theme: 'green'
  // },
]