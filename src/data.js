import fentonSm from './imgs/fenton-sm.png'
import ltfImg from './imgs/fenton.png'
import bgLg from './imgs/br.jpg'
import mcfrench from './imgs/mcfrench.png'

import fentonSvg from './icons/fenton.svg'
import bikerepairSvg from './icons/bikerepair.svg'
import threeSvg from './icons/threejs.svg'

export default [
  {
    title: 'Fenton',
    offsetY: 60,
    logo: fentonSvg,
    icons: [
      threeSvg,
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
      threeSvg,
    ],
    url: 'https://www.bikerepair.com/',
    imageLg: bgLg,
      imageSm: bgLg,
    intro: 'blahblahahah',
    subtitle: 'Bike shops and stuff',
    description: '<p>Built using a combination of ThreeJS for the 3D rendering and CannonJS which provides the physics.</p><p>The models used were found online but were tweaked and simplified using Blender.</p><p>It works great on mobile and desktop, and on larger screens you can play around with a few of the camera and physics settings for fun.</p><p>Made in 2019. The source code is available on <a href="https://github.com/nickmcmillan/fenton-three-cannon" target="_blank">Github</a>.</p>',
    theme: '#d7dfff',
  },
  {
    title: 'mcfrench.co',
    imageLg: mcfrench,
    imageSm: mcfrench,
    description: 'Lorem ipsum dolor sit, am',
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