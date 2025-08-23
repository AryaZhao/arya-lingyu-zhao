import { Typography, Box } from '@mui/material';

const Project = (props) => (

  <Box>
    <Typography variant="h6">{props.info.title}</Typography>
    <Typography variant="body1">
      <a href={props.info.code} target="_blank" rel="noreferrer">code</a>
      {' & '}
      <a href={props.info.demo} target="_blank" rel="noreferrer">demo</a>
    </Typography>
  </Box>
);

export default Project;
