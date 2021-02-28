import { FC } from 'react'
import { Container, Grid, AppBar, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: 'rgba( 0, 0, 0, 0.25 )',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      backdropFilter: 'blur( 15px )',
      border: '1px solid rgba( 255, 255, 255, 0.18 )',
      minHeight: 64,
    },
  }),
)

const Layout: FC = (props) => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <AppBar className={classes.root}>
            <Typography variant="h6"></Typography>
          </AppBar>
          <div style={{ marginTop: 70 }}>{props.children}</div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Layout
