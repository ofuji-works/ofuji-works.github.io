import React from 'react'
import Top from '../components/TopSection'
import About from '../components/AboutSection'

const Index: React.FC = () => {
  return (
    <>
      <div className="sections">
        <section id="top">
          <Top />
        </section>
        <section id="collection"></section>
        <section id="about">
          <About />
        </section>
      </div>
      <style jsx>{`
        .sections {
          height: 100vh;
          width: 100%;
          scroll-snap-type: y;
          overflow: scroll;
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
