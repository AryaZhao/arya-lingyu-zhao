import { Grid, Typography, Box } from '@mui/material';

const Internship = (props) => (
  <Box>
    <Grid
      container
      direction="row"
      justifyContent="space-between"
    >
      <Grid item md={6}>
        <Typography align="left" variant="h6">
          {props.info.title}
          {' '}
          <a href={props.info.link} target="_blank" rel="noreferrer">
            @
            {props.info.company}
          </a>
        </Typography>
      </Grid>
      <Grid item md={3}>
        <Typography align="right" variant="h6">
          {props.info.location}
          {' '}
        </Typography>
      </Grid>
      <Grid item md={3}>
        <Typography align="right" variant="h6">{props.info.time}</Typography>
      </Grid>
    </Grid>
  </Box>
);

export default Internship;
