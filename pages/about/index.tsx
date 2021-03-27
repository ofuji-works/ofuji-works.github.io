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
          </div>
        </Grid>
      </Grid>
      <style jsx>
        {`
          .profile-block h3 {
            text-align: center;
            margin: 0 auto;
            font-size: 5vh;
            color: #707070;
          }
          .profile-block p {
            font-size: 10px;
            text-align: center;
            margin: 0;
            color: #707070;
            letter-spacing: 10px;
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
              font-size: 5vh;
              color: #707070;
            }
            .profile-block p {
              text-align: left;
              font-size: 10px;
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
