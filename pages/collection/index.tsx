import React from 'react'

const content = [
  {
    title: 'number1',
    description: 'sample app',
  },
  {
    title: 'number1',
    description: 'sample app',
  },
  {
    title: 'number1',
    description: 'sample app',
  },
  {
    title: 'number1',
    description: 'sample app',
  },
]

const Card: React.VFC = () => {
  return (
    <>
      <div className="card">
        <div className="imageBlock">
          <img src="https://placehold.jp/150x150.png" />
        </div>
      </div>
      <style jsx>
        {`
          .card {
            padding: 15% 10% 0;
            height: 60vh;
            width: 100vw;
            display: inline-block;
            scroll-snap-align: start;
          }
          .imageBlock {
            width: 100%;
            height: 100%;
            background-color: red;
          }
        `}
      </style>
    </>
  )
}

const Index: React.VFC = () => {
  const Contents = content.map((ele, index) => {
    return <Card key={`index-${index}`} />
  })

  return (
    <>
      <div className="carousel">{Contents}</div>
      <style jsx>{`
        .carousel {
          overflow-x: auto;
          white-space: nowrap;
          scroll-snap-type: x;
        }
        .carousel::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  )
}

export default Index
