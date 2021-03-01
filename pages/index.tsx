import { FC, useState, useEffect } from 'react'
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Fade,
} from '@material-ui/core'

// interface IProps {}

interface ICardProps {
  timeout: number
}

const Index: FC = () => {
  const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8]

  const Items = items.map((item, i) => {
    return <ItemCard key={`${item}-id`} timeout={500 + 300 * i} {...item} />
  })

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {Items}
      </Grid>
    </Container>
  )
}

const ItemCard: FC<ICardProps> = (props) => {
  const [mount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  console.log(props)
  return (
    <>
      <Fade in={mount} timeout={props.timeout}>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="app"
                height="150"
                image="/images/sample.jpg"
              />
              <CardContent>
                <Typography component="h2">App Title</Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  app's description space
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Fade>
    </>
  )
}

export default Index
