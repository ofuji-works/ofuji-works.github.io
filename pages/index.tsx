import React, { useState, useEffect } from 'react'

const Index: React.FC = () => {
  const [apply, setApply] = useState<boolean>(false)

  useEffect(() => {
    setApply(true)
    return () => {
      setApply(false)
    }
  }, [])

  return (
    <>
      <div className="title-block">
        <h3 className={apply ? 'glitch fadeIn' : ''}>ofuji.works</h3>
        <p className="type">Front-end developer</p>
      </div>
      <style jsx>{`
        .title-block {
          position: fixed;
          margin-top: 40vh;
          padding: 20px 30px 0px 100px;
        }
        .title-block h3 {
          margin-left: -5px;
          font-size: 8vh;
          margin: 0;
          color: #000000;
        }
        .title-block p {
          font-size: 1vh;
          width: 38ch;
          letter-spacing: 1ch;
          overflow: hidden;
          white-space: nowrap;
          margin: 0;
          color: #000000;
        }
        @media screen and (max-width: 896px) {
          .title-block {
            padding: 0 30px;
            text-align: left;
            margin-top: 40vh;
          }
          .title-block h3 {
            font-size: 5vh;
          }
        }
        .glitch {
          animation: flash 0.03s infinite, skew 3s infinite;
        }
        .type {
          animation: type 4s steps(38) infinite;
        }
        .fadeIn {
          animation: fadeIn 1s forwards;
        }
        @keyframes flash {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0.8;
          }
        }
        @keyframes skew {
          0% {
            transform: none;
          }
          33% {
            transform: none;
          }
          33.1% {
            transform: skewX(50deg);
          }
          33.6% {
            transform: skewX(-50deg);
          }
          33.9% {
            transform: none;
          }
          66% {
            transform: none;
          }
          66.3% {
            transform: skewX(15deg);
          }
          66.6% {
            transform: skewX(-15deg);
          }
          66.9% {
            transform: none;
          }
          77% {
            transform: none;
          }
          77.3% {
            transform: skewX(20deg);
          }
          77.6% {
            transform: skewX(-20deg);
          }
          77.9% {
            transform: none;
          }
        }
        @keyframes type {
          from {
            width: 0;
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(50%);
          }
          100% {
            opacity: 1;
            transform: translateY(0%);
          }
        }
      `}</style>
    </>
  )
}

export default Index
