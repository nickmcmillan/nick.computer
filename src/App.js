import React, { Component } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import Dragger from 'react-physics-dragger'

import Title from './Title'
import SocialLinks from './SocialLinks'

import './index.scss';
import './card.scss';
// import './list.scss'

// import fentonMp4 from './vids/listentofenton.mp4'
// import brMp4 from './vids/br.mp4'
// import realasMp4 from './vids/realas.mp4'
// import tekentoolMp4 from './vids/tekentool.mp4'

import ltfImg from './imgs/ltf.jpg'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.videoRefs = []
    this.outerRefs = []

    this.state = {
      friction: 0.9,
      items: [
        {
          title: 'Listen to Fenton',
          // video: fentonMp4,
          image: ltfImg,
          color: '#ccc',
        },
        {
          title: 'Bike Repair',
          // video: brMp4,
          image: ltfImg,
          color: 'blue',
        },
        {
          title: 'RealAs',
          // video: realasMp4,
          image: ltfImg,
          color: '#fff',
        },
        {
          title: 'Tekentool',
          // video: tekentoolMp4,
          image: ltfImg,
          color: 'green'
        },
      ]
    }
  }

  setVideoRefs = ref => {
    this.videoRefs.push(ref)
  }
  
  setOuterRefs = ref => {
    this.outerRefs.push(ref)
  }

  handleOnMove = val => {
    const parallaxFactor = -12
    this.videoRefs.forEach((ref, i) => {
      const x = val.x + this.outerRefs[i].offsetLeft
      ref.style.transform = `translateX(${x / (parallaxFactor )}px)`
    })
  }

  render() {
    return (
      <main className="container">

        <Title />
        <SocialLinks />
        
        <Dragger
          ResizeObserver={ResizeObserver}
          padding={-16}
          onMove={this.handleOnMove}
          className="dragger"
        >
          {this.state.items.map((item, i) => (

            <button className="item" key={`${item}-${i}`} style={{ backgroundColor: item.color }} ref={this.setOuterRefs}>

              <div className="inner">
              
                <div className="item_content">
                  <h2 className="item_title">{item.title}</h2>
                </div>
                
                <div className="transitioner" ref={this.setVideoRefs}>

                  <img
                    className="item_media"
                    src={item.image}
                    alt=""
                  />

                  {/* <video
                    src={item.video}
                    className="item_media"
                    autoPlay
                    playsInline
                    muted
                    loop
                  /> */}
                </div>
              </div>
            </button>
          ))}
        </Dragger>
      </main>
    )
  }
}
