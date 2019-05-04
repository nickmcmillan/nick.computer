import fentonSm from './imgs/fenton-sm.png'
import ltfImg from './imgs/fenton.png'
import bgLg from './imgs/br.jpg'

export default [
  {
    title: 'Fenton',
    offsetY: 80,
    url: 'https://www.listentofenton.com/',
    github: 'https://github.com/nickmcmillan/fenton-three-cannon',
    year: '2019',
    imageLg: ltfImg,
    imageSm: fentonSm,
    intro: 'Combining ThreeJS and Cannon for 3D graphics with physics in the browser.',
    subtitle: 'A website for the Melbourne band Fenton.',
    description: '<p>Built to increase my experience with 3D in the browser using ThreeJS combined with CannonJS which provides the physics.</p><p>The models were mostly found online and were tweaked using Blender.</p><p>It works great on mobile and desktop, and on larger screens you can play around with a few of the camera and physics settings for fun.</p>',
    theme: '#d7dfff',
  },
  {
    title: 'Bike Repair',
    offsetY: 0,
    imageLg: bgLg,
    imageSm: bgLg,
    description: 'Lorem ipibus, saepe tempore, veniam neque iusto aperiam! Id!',
    theme: '#0054ac',
  },
  {
    title: 'RealAs',
    imageLg: ltfImg,
    imageSm: fentonSm,
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