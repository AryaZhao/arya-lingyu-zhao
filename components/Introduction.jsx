import {
  YouTube, GitHub, AlternateEmail, LinkedIn,
} from '@material-ui/icons';
import {
  Box, Typography, Grid, IconButton,
} from '@material-ui/core';

const headshotStyle = {
  display: 'block',
  marginBottom: '3%',
  width: '30%',
  borderRadius: '50%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '50px',
};

const Introduction = () => (
  <Box id="introduction">
    <img style={headshotStyle} src="/headshot.jpg" />
    <Typography variant="h4" align="center" gutterBottom>Arya Lingyu Zhao</Typography>
    <Typography variant="h6" align="center">CS enthusiast, flutist, Broadway fan</Typography>
    <Typography variant="h6" align="center" gutterBottom>
      B.S. Computer Science @ Columbia University
      <br />
      Graduating in May 2021
    </Typography>
    <br />
    <Grid container justify="center" spacing={10}>
      <Grid item>
        <IconButton color="inherit" href="mailto:lingyu.zhao@columbia.edu" target="_blank"><AlternateEmail /></IconButton>
      </Grid>

      <Grid item>
        <IconButton color="inherit" href="https://www.linkedin.com/in/arya-lingyu-zhao" target="_blank"><LinkedIn /></IconButton>
      </Grid>
      <Grid item>
        <IconButton color="inherit" href="https://github.com/AryaZhao" target="_blank"><GitHub /></IconButton>
      </Grid>
      <Grid item>
        <IconButton color="inherit" href="https://www.youtube.com/channel/UCM9HMBZjUXnoZej-xxFaCyQ" target="_blank"><YouTube /></IconButton>
      </Grid>
    </Grid>
    <Typography variant="body1" align="center">
      This page is built with React, Next, JSX, and Mateiral UI.
      {' '}
      <a href="https://github.com/AryaZhao/arya-lingyu-zhao.git">codes here</a>
    </Typography>
  </Box>
);

export default Introduction;
