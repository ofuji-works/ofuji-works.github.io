import React from 'react'
import SNSIcon from '../../components/svg/SNSIcon'

const Index: React.FC = () => {
  return (
    <>
      <div className="profile-block">
        <h3>Yuta Okafuji</h3>
        <p>Front-end developer</p>
        <p>Based in Hyogo</p>
      </div>
      <div className="sns-block">
        <div className="git-hub">
          <a href="https://github.com/ofuji-works" target="_brank">
            <SNSIcon height={50} width={50} name="github" />
          </a>
        </div>
        <div className="twitter sns">
          <a href="https://twitter.com/yuta66510630" target="_brank">
            <SNSIcon height={50} width={50} name="twitter" />
          </a>
        </div>
      </div>

      <style jsx>
        {`
          .profile-block {
            margin-top: 30vh;
          }
          .profile-block h3 {
            text-align: center;
            margin: 0 auto;
            font-size: 8vh;
            color: #707070;
          }
          .profile-block p {
            text-align: center;
            margin: 0;
            color: #707070;
            letter-spacing: 10px;
          }
          .sns-block {
            display: flex;
            align-content: center;
            justify-content: center;
            margin: 20px 0;
          }
          .sns-block a {
            margin: 0 5px;
          }
          @media screen and (max-width: 896px) {
            .profile-block {
              margin-top: 40vh;
              margin-left: 20px;
            }
            .profile-block h3 {
              text-align: left;
              margin: 0;
              font-size: 5vh;
              color: #707070;
            }
            .profile-block p {
              text-align: left;
              margin: 0;
              color: #707070;
              letter-spacing: 5px;
            }
            .sns-block {
              display: flex;
              align-content: center;
              justify-content: left;
              margin: 20px 0 20px 20px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Index
