import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  main: {
    height: '100vh',
    position: 'fixed',
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
        <Grid item xs={11} md={6}>
          <div className="imgBlock"></div>
        </Grid>
      </Grid>
      <style jsx>{`
        .imgBlock {
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
      `}</style>
    </>
  )
}

export default Index
