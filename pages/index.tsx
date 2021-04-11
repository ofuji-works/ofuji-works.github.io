import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import Top from '../components/TopSection'
import Collection from '../components/CollectionSection'
import About from '../components/AboutSection'

const Index: React.FC = () => {
  useEffect(() => {
    ScrollTrigger.defaults({ scroller: '.sections' })
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.title-block', {
      scrollTrigger: {
        trigger: '#top',
        toggleActions: 'play complelte restart reverse',
        // markers: true,
      },
      opacity: 1,
      y: +100,
      duration: 1,
    })
    gsap.to('.profile-content', {
      scrollTrigger: {
        trigger: '#about',
        toggleActions: 'restart none restart none',
        // markers: true,
      },
      opacity: 1,
      y: -100,
      duration: 2,
      delay: 1,
    })
  }, [])

  return (
    <>
      <div className="sections">
        <section id="top">
          <Top />
        </section>
        <section id="collection">
          <Collection />
        </section>
        <section id="about">
          <About />
        </section>
      </div>
      <style jsx>{`
        .sections {
          position: absolute;
          height: 100vh;
          width: 100%;
          scroll-snap-type: y mandatory;
          scroll-snap-points-y: repeat(100vh);
          scroll-snap-stop: always;
          overflow-y: scroll;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .sections::-webkit-scrollbar {
          display: none;
        }
        section {
          height: 100vh;
          width: 100%;
          scroll-snap-align: start;
        }
      `}</style>
    </>
  )
}

export default Index
