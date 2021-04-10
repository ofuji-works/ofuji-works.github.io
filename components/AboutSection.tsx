import React from 'react'
import SNSIcon from './svg/SNSIcon'

const Index: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="profile-content">
          <div className="profile-block">
            <h3 className="fadeIn">Yuta Okafuji</h3>
            <p>Front-end developer</p>
            <p>Based in Hyogo</p>
          </div>
          <div className="descriptionBlock fadeInDescriptionBlock">
            <p>
              神戸Sier企業に所属。
              <br />
              3Dモーショングラフィックスに興味を持ち、
              <br />
              WebGLを学習しています。
              <br />
              React / typescriptでの開発がお気に入りです。
            </p>
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
        </div>
      </div>
      <style jsx>
        {`
          .container {
            position: relative;
            height: 100vh;
          }
          .profile-content {
            position: absolute;
            top: calc(35vh + 100px);
            left: 15vw;
            opacity: 0;
          }
          .profile-block h3 {
            text-align: left;
            margin: 0;
            margin-left: -5px;
            font-size: 8vh;
            color: #000000;
          }
          .profile-block p {
            font-size: 1vh;
            text-align: left;
            margin: 0;
            color: #000000;
            letter-spacing: 10px;
            animation: fadeIn 2s forwards;
          }
          .descriptionBlock {
            margin-top: 20px;
          }
          .descriptionBlock p {
            text-align: left;
            font-size: 1.5vh;
          }
          .sns-block {
            display: flex;
            margin: 20px 0;
          }
          .sns-block a {
            margin: 0 5px;
          }
          @media screen and (max-width: 896px) {
            .profile-content {
              left: 10vw;
            }
            .profile-block h3 {
              text-align: left;
              margin: 0;
              margin-left: -5px;
              font-size: 5vh;
              color: #000000;
            }
            .profile-block p {
              text-align: left;
              font-size: 1vh;
              margin: 0;
              color: #000000;
              letter-spacing: 5px;
            }
            .descriptionBlock {
              margin-top: 20px;
            }
            .descriptionBlock p {
              text-align: left;
              font-size: 10px;
            }
            .sns-block {
              display: flex;
              align-content: center;
              justify-content: left;
              margin: 20px 0 20px 0;
            }
          }
        `}
      </style>
    </>
  )
}

export default Index
