// import { styled } from '@material-ui/core/styles';
import {YouTube, GitHub, Email,LinkedIn } from '@material-ui/icons';
import {Box, Typography, Grid} from '@material-ui/core';


const headshotStyle = {
    display:'block',
    marginBottom: '3%',
    width: '30%',
    borderRadius: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px'
  }

export const Introduction = () => {
  return (
    <Box id='introduction'>
      <img style = {headshotStyle} src='/headshot.jpg'/>
      <Typography variant="h4" align="center" gutterBottom>Arya Lingyu Zhao</Typography>
      <Typography variant="h6" align="center">CS enthusiast, flutist, Broadway fan</Typography>
      <Typography variant="h6" align="center">Backend Software Engineer Intern @ <a href="https://www.thedtxcompany.com/" target="_blank">the dtx company</a></Typography>
      <Typography variant="h6" align="center" gutterBottom>B.S. Computer Science @ Columbia University<br/>
        Graduating in May 2021</Typography>
      <br/>
      <Grid  container justify="center" spacing={10}>
        <Grid item >
          <Email href="mailto:lingyu.zhao@columbia.edu"/>
        </Grid>

        <Grid item>
          <LinkedIn href="https://www.linkedin.com/in/arya-lingyu-zhao"/>
        </Grid>
        <Grid item>
          <GitHub href="https://github.com/AryaZhao"/>
        </Grid>
        <Grid item>
          <YouTube href="https://www.youtube.com/channel/UCM9HMBZjUXnoZej-xxFaCyQ"/>
        </Grid>
      </Grid>
    </Box>
)}