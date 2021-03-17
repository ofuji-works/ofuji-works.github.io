import React from 'react'

interface IProps {
  height: number
  width: number
}

const LeafSVG: React.FC<IProps> = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 48.49 35.722"
      >
        <g id="leaf-object" transform="translate(-0.998 -7.481)">
          <path
            id="branch"
            d="M0,0A38.689,38.689,0,0,0,9.979,11.31c6.119,4.334,14.5,6.026,14.5,6.026"
            transform="translate(46.77 40.485) rotate(180)"
            fill="none"
            stroke="#707070"
            strokeLinecap="round"
            strokeWidth="4"
            strokeDasharray="50 0"
          />
          <path
            id="leaf"
            d="M42.685,37.171h0a20.072,20.072,0,0,1-7.673,6.5c-4.357,2.063-11.007,2.448-19.135-4.639-6.015-6.921-7.42-13.464-8.3-19.82,3.83-.871,2.75-.526,13.192-3.032C43.747,10.526,45.848,29.457,45.71,31.557"
            transform="translate(-4.352 -5.614)"
            fill="none"
            stroke="#707070"
            strokeLinecap="round"
            strokeWidth="4"
            strokeDasharray="100 0"
          />
        </g>
      </svg>
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        #branch {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: dash 1s linear forwards;
        }
        #leaf {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: dash 1s linear forwards;
        }
      `}</style>
    </>
  )
}

export default LeafSVG
