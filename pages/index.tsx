import React from 'react'

const Index: React.FC = () => {
  return (
    <>
      <div className="title-block">
        <h3>ofuji.works</h3>
        <p>Front-end developer</p>
      </div>
      <style jsx>{`
        .title-block {
          padding: 20px 30px;
        }
        .title-block h3 {
          margin-left: -5px;
          font-size: 5vh;
          margin: 0;
          color: #707070;
        }
        .title-block p {
          font-size: 1vh;
          letter-spacing: 10px;
          margin: 0;
          color: #707070;
        }
        @media screen and (max-width: 896px) {
          .title-block {
            padding: 0;
            text-align: center;
            margin-top: 40vh;
          }
        }
      `}</style>
    </>
  )
}

export default Index
