import React from 'react'

interface IProps {
  name: string
  height: number
  width: number
}

const SNSIcon: React.FC<IProps> = (props) => {
  switch (props.name) {
    case 'twitter':
      return <Twitter height={props.height} width={props.width} />
    case 'github':
      return <Github height={props.height} width={props.width} />
    default:
      return <></>
  }
}

const Github: React.FC<{ height: number; width: number }> = (props) => {
  return (
    <>
      <svg
        id="Layer_2"
        data-name="Layer 2"
        width={props.width}
        height={props.height}
      >
        <g id="github" data-name="icons Q2">
          <path
            id="パス_16"
            data-name="パス 16"
            d="M24,1.9a21.6,21.6,0,0,0-6.8,42.2c1,.2,1.8-.9,1.8-1.8V39.4c-6,1.3-7.9-2.9-7.9-2.9a6.5,6.5,0,0,0-2.2-3.2C6.9,31.9,9,32,9,32a4.3,4.3,0,0,1,3.3,2c1.7,2.9,5.5,2.6,6.7,2.1a5.4,5.4,0,0,1,.5-2.9C12.7,32,9,28,9,22.6A10.7,10.7,0,0,1,11.9,15a6.2,6.2,0,0,1,.3-6.4,8.9,8.9,0,0,1,6.4,2.9,15.1,15.1,0,0,1,5.4-.8,17.1,17.1,0,0,1,5.4.7,9,9,0,0,1,6.4-2.8,6.5,6.5,0,0,1,.4,6.4A10.7,10.7,0,0,1,39,22.6C39,28,35.3,32,28.5,33.2a5.4,5.4,0,0,1,.5,2.9v6.2a1.8,1.8,0,0,0,1.9,1.8A21.7,21.7,0,0,0,24,1.9Z"
            fill="#000000"
          />
        </g>
      </svg>
      <style jsx>{`
        #github path:hover {
          fill: black;
        }
      `}</style>
    </>
  )
}

const Twitter: React.FC<{ height: number; width: number }> = (props) => {
  return (
    <>
      <svg
        id="Layer_2"
        data-name="Layer 2"
        width={props.width}
        height={props.height}
      >
        <g id="twitter" data-name="icons Q2">
          <path
            id="パス_15"
            data-name="パス 15"
            d="M46,10.2a18.3,18.3,0,0,1-5.2,1.5,9.4,9.4,0,0,0,4-5,23.2,23.2,0,0,1-5.7,2.2A9.1,9.1,0,0,0,23.4,15a7.6,7.6,0,0,0,.3,2.1A25.8,25.8,0,0,1,5.1,7.7a8.5,8.5,0,0,0-1.3,4.5,8.9,8.9,0,0,0,4.1,7.5,8.1,8.1,0,0,1-4.1-1.1h0A8.9,8.9,0,0,0,11,27.5a8.6,8.6,0,0,1-2.4.4l-1.7-.2A9.2,9.2,0,0,0,15.4,34,18.2,18.2,0,0,1,4.2,37.8H2a25.1,25.1,0,0,0,13.8,4.1c16.6,0,25.7-13.8,25.7-25.7V14.9A18.3,18.3,0,0,0,46,10.2Z"
            fill="#000000"
          />
        </g>
      </svg>
      <style jsx>
        {`
          #twitter path:hover {
            fill: #1a92da;
          }
        `}
      </style>
    </>
  )
}

export default SNSIcon
