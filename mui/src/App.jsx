import React from 'react';
import {Typography,AppBar,Card,CardActions,CardContent,CardMedia,Toolbar,CssBaseline,Grid, Container, Button} from '@material-ui/core'
import useStyles from './styles'
const cards = [1,2,3,4,5,6,7,8,9];

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline/>
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.container}>
        <div>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom >
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph >
              hello everyone this is a photo album and i'm trying to make this sentence as long as  dfisdufus  dijfsldkjfslkjd dfisjldkjf
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justifyContent ='center'>
                <Grid item >
                  <Button variant='contained' color='primary' >
                    see my photo
                  </Button>
                </Grid>
                <Grid item >
                  <Button variant='outline' color='primary' >
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card)=>
              <Grid item key={card} xs={12} sm={6} md={4} >
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMidea} image='https://source.unsplash.com/random'title='Image title'/>
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                      heading
                    </Typography>
                    <Typography>
                      this is card section.dssdfsdfsd.dfsdfsdfsdfegsdsfsdsfegsdsegrgsre
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='Primary'>View</Button>
                    <Button size='small' color='Primary'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            )} 
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
              footer
        </Typography>
        <Typography variant='subtitle1' align='center' gutterBottom>
              something dfssferter ffggfdfdsfg
        </Typography>
      </footer>
    </>
  );
}

export default App;
