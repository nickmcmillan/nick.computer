import React, { Component } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import Dragger from 'react-physics-dragger'

import './index.scss';
import './card.scss';
import './list.scss'
import './social-links.scss'

import fentonMp4 from './vids/listentofenton.mp4'
import brMp4 from './vids/br.mp4'
import realasMp4 from './vids/realas.mp4'
import tekentoolMp4 from './vids/tekentool.mp4'

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
          video: fentonMp4,
          image: ltfImg,
          color: '#ccc',
        },
        {
          title: 'Bike Repair',
          video: brMp4,
          image: ltfImg,
          color: 'blue',
        },
        {
          title: 'RealAs',
          video: realasMp4,
          image: ltfImg,
          color: '#fff',
        },
        {
          title: 'Tekentool',
          video: tekentoolMp4,
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
      <div className="container">

        <div className="title">
          <svg className="logo" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="197" height="219.7" viewBox="0 0 197 219.7"
            xmlSpace="preserve">
            <title>Nick McMillan</title>
            <path fill="currentColor" d="M0.8 8.1h5.9l31.9 22.8V8.1h20.6v58.5h-7.9L21.3 46.5v20.1H0.8V8.1zM79.5 0c3.6 0 6.2 0.8 8 2.3C89.2 3.8 90.1 5.7 90 8c0 2.3-1.1 4.5-3.3 6.4 -2.2 2-5.2 2.9-8.8 2.9 -5.2 0-8.4-1.6-9.7-4.7 -0.4-0.9-0.5-1.9-0.5-2.9 0-1.1 0.3-2.2 0.8-3.4s1.3-2.2 2.3-3.1C73 1.1 75.9 0 79.5 0zM89.4 66.6H68.2V21.1h21.2V66.6zM124.5 52.7c2.5 0 6-1.7 10.7-5.2v17.9c-8 3-15.4 3.5-22.2 1.3 -6.8-2.2-11.6-6.1-14.4-11.6 -1.4-2.8-2.1-6.2-2.1-10 0-7.7 2.6-13.9 7.9-18.6s12.1-7.1 20.6-7.1c3.5 0 6.6 0.5 9.4 1.6V35c-0.7-0.6-1.6-0.8-2.8-0.8 -1.2 0-2.5 0.4-3.8 1.1 -1.4 0.8-2.6 1.8-3.7 3 -2.6 2.9-3.9 5.9-3.9 9 0 3.1 0.9 4.8 2.8 5.2C123.5 52.6 124 52.7 124.5 52.7zM163.8 51.9c-0.3 0.6-0.5 1-0.6 1.2v13.5h-19.3V5h19v29.7l8.6-13.6H193L179 41l16.3 25.6H173L163.8 51.9zM0.6 83.9h8.1l27.1 25.5 27.9-25.5h7.8V140H48.3v-18.2L34 137.6l-14-15.3V140H0.6V83.9zM104.2 126.7c2.4 0 5.8-1.7 10.3-5v17.2c-7.7 2.9-14.8 3.3-21.3 1.2 -6.5-2.1-11.1-5.8-13.8-11.2 -1.4-2.7-2-5.9-2-9.6 0-7.4 2.5-13.3 7.6-17.9s11.6-6.9 19.8-6.9c3.4 0 6.4 0.5 9.1 1.5v13.5c-0.6-0.5-1.5-0.8-2.7-0.8 -1.1 0-2.4 0.4-3.7 1.1 -1.3 0.7-2.5 1.7-3.6 2.9 -2.5 2.8-3.7 5.7-3.7 8.7 0 3 0.9 4.6 2.7 5C103.3 126.6 103.8 126.7 104.2 126.7zM122.8 83.9h8.1l27.1 25.5 27.9-25.5h7.8V140h-23.1v-18.2l-14.3 15.8 -14-15.3V140h-19.4V83.9zM11.4 154.5c3.4 0 6 0.7 7.6 2.2 1.7 1.4 2.5 3.3 2.5 5.5 0 2.2-1.1 4.3-3.2 6.2 -2.1 1.9-5 2.8-8.5 2.8 -5 0-8.1-1.5-9.3-4.5 -0.4-0.8-0.5-1.8-0.5-2.8 0-1 0.2-2.1 0.7-3.2s1.2-2.1 2.2-3C5.1 155.5 7.9 154.5 11.4 154.5zM20.9 218.4H0.5v-43.7h20.4V218.4zM49.4 218.4H29.5v-59.2h19.9V218.4zM77.9 218.4H58v-59.2h19.9V218.4zM90.3 214.5c-1.9-1.7-3.4-3.9-4.5-6.6 -1.1-2.7-1.7-5.5-1.7-8.6 0-3.1 0.3-5.7 0.9-8 1.2-4.5 3.4-8.2 6.4-11.3 1.5-1.5 3.1-2.8 4.9-3.8 3.7-2.1 7.5-3.2 11.6-3.2 4.1 0 7.6 1.3 10.7 4 1 0.9 1.8 1.9 2.6 3l5-5.4h11.5v43.7h-11.5l-5-7.3c-3.8 5.7-9.7 8.5-17.5 8.5 -2.2 0-4.5-0.4-6.9-1.2C94.3 217.6 92.1 216.3 90.3 214.5zM118.7 188c-0.8-0.5-1.9-0.7-3-0.7 -1.2 0-2.4 0.4-3.7 1.2 -1.3 0.8-2.5 1.9-3.5 3.1 -2.3 2.8-3.4 5.7-3.4 8.6 0 2.1 0.6 3.5 1.9 4.4 1.2 0.8 3 0.7 5.4-0.3 2.4-1 4.5-2.3 6.4-3.9V188zM169.8 186.6c-1.9 0-2.8 1.5-2.8 4.5v27.3h-20.9v-43.7h11.5l5 6.8c1.9-2.6 4.5-4.7 7.8-6.2 3.3-1.5 6.4-2.3 9.3-2.3 5.3 0 9.5 1.4 12.6 4.2 3.1 2.8 4.7 6.6 4.7 11.3v29.8h-21v-21.1C176 190.2 173.9 186.6 169.8 186.6z" />
          </svg>
          <h1>I’m a freelance website developer who likes React, motion, and design.</h1>
        </div>

        <ul className="social-links">
          <li>
            <a className="social-anchor" href="mailto:nick.a.mcmillan@gmail.com?subject=Let's make a website&body=So what's up?">
              <svg className="social-icon" viewBox="0 0 512 512">
                <path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z" /></svg>
              <span className="social-links-text">
                E-mail
              </span>
            </a>
          </li>
          <li>
            <a className="social-anchor" href="https://codepen.io/hey-nick/" target="_blank" rel="noopener noreferrer">
              <svg className="social-icon" viewBox="0 0 512 512">
                <path d="M427 201.9c-0.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4 3.3 16.3 0L420.6 320.4c4-2.6 6.6-7.4 6.6-12.2V203.9C427.1 203.2 427.1 202.6 427 201.9 427 201.7 427.1 202.6 427 201.9zM270.7 127.1l115.2 76.8 -51.5 34.4 -63.8-42.7V127.1zM241.3 127.1v68.6l-63.8 42.7 -51.5-34.4L241.3 127.1zM114.3 231.4l36.8 24.6 -36.8 24.6V231.4zM241.3 384.9L126.1 308.1l51.5-34.4 63.8 42.6V384.9zM256 290.8l-52-34.8 52-34.8 52 34.8L256 290.8zM270.7 384.9V316.3l63.8-42.6 51.5 34.4L270.7 384.9zM397.7 280.6l-36.8-24.6 36.8-24.6V280.6z" /></svg>
              <span className="social-links-text">
                Codepen
              </span>
            </a>
          </li>
          <li>
            <a className="social-anchor" href="https://github.com/nickmcmillan/" target="_blank" rel="noopener noreferrer">
              <svg className="social-icon" viewBox="0 0 512 512">
                <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"></path>
              </svg>
              <span className="social-links-text">
                Github
              </span>
            </a>
          </li>
          <li>
            <a className="social-anchor" href="https://www.linkedin.com/in/nickmcmillan/" target="_blank" rel="noopener noreferrer">
              <svg className="social-icon" viewBox="0 0 512 512">
                <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" /></svg>
              <span className="social-links-text">
                LinkedIn
              </span>
            </a>
          </li>
        </ul>
        
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
      </div>
    )
  }
}
