import { FC, useState } from 'react'
import {
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  Link,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: 'rgba( 0, 0, 0, 0.25 )',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      backdropFilter: 'blur( 15px )',
      border: '1px solid rgba( 255, 255, 255, 0.18 )',
    },
    menuButton: {
      border: 'solid 1px #FFFFFF',
      color: '#FFFFFF',
    },
    sideMenuPaper: {
      background: 'rgba( 255, 255, 255, 0.30 )',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      backdropFilter: 'blur( 15px )',
      border: '1px solid rgba( 255, 255, 255, 0.18 )',
    },
  }),
)

const SideMenu: FC = () => {
  const classes = useStyles()

  return (
    <>
      <List>
        <ListItem>
          <Link href="https://github.com/ofuji-works/">
            <IconButton className={classes.menuButton}>
              <GitHubIcon />
            </IconButton>
          </Link>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Link href="https://twitter.com/yuta66510630">
            <IconButton className={classes.menuButton}>
              <TwitterIcon />
            </IconButton>
          </Link>
        </ListItem>
      </List>
    </>
  )
}

const Layout: FC = (props) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <AppBar className={classes.root}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                onClick={() => {
                  setOpen(!open)
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6"></Typography>
            </Toolbar>
          </AppBar>
          <div style={{ marginTop: 70 }}>{props.children}</div>
        </Grid>
      </Grid>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => {
          setOpen(!open)
        }}
        classes={{
          paper: classes.sideMenuPaper,
        }}
      >
        <SideMenu />
      </Drawer>
    </Container>
  )
}

export default Layout
