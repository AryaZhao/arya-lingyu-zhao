import { Typography, Box } from '@material-ui/core';

const Project = (props) => (

  <Box>
    <Typography variant="h6">{props.info.title}</Typography>
    <Typography variant="body1">
      <a href={props.info.code} target="_blank">codes</a>
      {' & '}
      <a href={props.info.demo} target="_blank">demo</a>
    </Typography>
  </Box>
);

export default Project;
