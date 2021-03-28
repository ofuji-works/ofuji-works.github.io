import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SNSIcon from '../../components/svg/SNSIcon'

const useStyles = makeStyles({
  main: {
    position: 'fixed',
    height: '100vh',
  },
  item: {
    // background: 'rgba(255, 255, 255, 0.25)',
    // boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    // backdropFilter: 'blur(4px)',
    // borderRadius: '10px',
    // border: '1px solid rgba(255, 255, 255, 0.18)',
  },
  cardMain: {
    minHeight: 'inherit',
  },
})

const Index: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <Grid
        container
        justify="center"
        direction="row"
        alignContent="center"
        className={classes.main}
      >
        <Grid item className={classes.item} xs={11} md={6}>
          <div className="content">
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
        </Grid>
      </Grid>
      <style jsx>
        {`
          .profile-block h3 {
            text-align: center;
            margin: 0 auto;
            font-size: 8vh;
            color: #000000;
          }
          .fadeIn {
            animation: fadeIn 1s forwards;
          }
          .fadeInDescriptionBlock {
            animation: fadeIn 3s forwards;
          }
          .type {
            animation: type 3s forwards;
            animation-delay: 3s;
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
          .profile-block p {
            font-size: 1vh;
            text-align: center;
            margin: 0;
            color: #000000;
            letter-spacing: 10px;
            animation: fadeIn 2s forwards;
          }
          .descriptionBlock {
            margin-top: 20px;
          }
          .descriptionBlock p {
            text-align: center;
            font-size: 2vh;
          }
          .sns-block {
            display: flex;
            justify-content: center;
            margin: 20px 0;
          }
          .sns-block a {
            margin: 0 5px;
          }
          @media screen and (max-width: 896px) {
            .profile-block {
              margin-left: 20px;
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
              margin-left: 20px;
            }
            .descriptionBlock p {
              text-align: left;
              font-size: 10px;
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
