import { ButtonGroup, Button } from '@mui/material';

const Navigation = () => (
  <ButtonGroup size="large" fullWidth variant="text" color="primary" aria-label="text primary button group">
    <Button href="/">Home</Button>
    <Button href="#internships">Internships</Button>
    <Button href="#projects">Projects</Button>
    <Button href="#flute">Flute</Button>
  </ButtonGroup>
);

export default Navigation;
