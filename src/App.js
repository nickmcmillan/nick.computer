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


function getTranslateX(el) {
  var style = window.getComputedStyle(el);
  var matrix = new window.WebKitCSSMatrix(style.webkitTransform);
  console.log('translateX: ', matrix.m41);
  return matrix.m41
}

export default class App extends Component {

  constructor(props) {
    super(props)
    this.videoRefs = []
    this.outerRefs = []

    this.state = {
      friction: 0.9,
      activeCard: null,
      centerX: 0,
      centerY: 0,
      screenX: 0,
      screenY: 0,
      items: [
        {
          title: 'Fenton',
          // video: fentonMp4,
          image: ltfImg,
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quos excepturi? Temporibus aspernatur a et quasi at quos',
          color: '#ccc',
        },
        {
          title: 'Bike Repair',
          // video: brMp4,
          image: ltfImg,
          description: 'Lorem ipibus, saepe tempore, veniam neque iusto aperiam! Id!',
          color: 'blue',
        },
        {
          title: 'RealAs',
          // video: realasMp4,
          image: ltfImg,
          description: 'Lorem ipsum dolor sit, am',
          color: '#fff',
        },
        {
          title: 'Tekentool',
          // video: tekentoolMp4,
          image: ltfImg,
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quos excepturi? Temporibus aspernatur a',
          color: 'green'
        },
      ]
    }
  }

  setVideoRefs = ref => this.videoRefs.push(ref)
  setOuterRefs = ref => this.outerRefs.push(ref)

  handleOnMove = val => {
    const parallaxFactor = -12
    this.videoRefs.forEach((ref, i) => {
      const x = val.x + this.outerRefs[i].offsetLeft
      ref.style.transform = `translateX(${x / (parallaxFactor )}px)`
    })
  }

  handleActivate = (item, i) => {
    console.log(this.videoRefs[0])
    const btn = this.outerRefs[i]
    const { x, y, width, height } = btn.getBoundingClientRect()
    const centerX = (window.innerWidth / 2) - (width / 2) - x
    const centerY = (window.innerHeight / 2) - (height / 2) - y
    const screenY = window.innerHeight / height 
    const screenX = window.innerWidth / width

    this.setState({ 
      activeCard: i,
      centerX,
      centerY,
      screenX,
      screenY,
    })

  }

  render() {
    
    
    return (
      <main className="container">

        {/* <Title /> */}
        <SocialLinks />
        
        <Dragger
          ResizeObserver={ResizeObserver}
          padding={-16}
          onMove={this.handleOnMove}
          className="dragger"
          disabled={this.state.activeCard}
        >
          {this.state.items.map((item, i) => (

            <button
              className={`item ${this.state.activeCard === i && 'is-active'}`}
              key={`${item}-${i}`}
              style={{ backgroundColor: item.color }}
              ref={this.setOuterRefs}
              onClick={() => this.handleActivate(item, i)}
              href="/"
            >
              <div
                className="backdrop"
                style={{
                  transform: this.state.activeCard === i ? `translate(${this.state.centerX}px, ${this.state.centerY}px) scale(${this.state.screenX}, ${this.state.screenY})` : 'none'
                }}
              />

              <div
                className="inner"
                style={{ overflow: this.state.activeCard === i ? 'inherit' : 'hidden' }}
              >

                <div
                  className="item_content"
                  style={{
                    transform: this.state.activeCard === i ? `translateY(-200%)` : 'none'
                  }}
                >
                  <h2 className="item_title">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                
                <div className="transitioner" ref={this.setVideoRefs}>

                  <img
                    className="item_media"
                    src={item.image}
                    alt=""
                    style={{
                      transform: this.state.activeCard === i ? `translate(${this.state.centerX - getTranslateX(this.videoRefs[i])}px, ${this.state.centerY / 2}px) scale(5)` : 'none'
                    }}
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
