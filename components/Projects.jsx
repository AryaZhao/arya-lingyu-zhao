import { Typography } from '@mui/material';
import Project from './Project';

const musichum = {
  title: 'Music Humanity Website',
  demo: 'http://3.13.215.137/',
  code: 'https://github.com/AryaZhao/Music-Humanity-Flask-Webapp',
};

const yearPlusPlus = {
  title: 'Year ++',
  demo: 'https://chrome.google.com/webstore/detail/year%2B%2B/iohgcjalmalbppjjohhfhnhmbmdcaedl',
  code: 'https://github.com/AbbyLuHui/Bday',
};

const IPDB = {
  title: 'IP Geolocation Database',
  demo: 'https://www.youtube.com/watch?v=z-ebA4J7hLM&feature=youtu.be',
  code: 'https://github.com/AryaZhao/IP-Geolocation-Database',
};

const clock = {
  title: 'Creative Clock (Top 5% in class)',
  demo: 'https://aryazhao.github.io/clock.html',
  code: 'https://github.com/AryaZhao/AryaZhao.github.io/blob/master/sketch.js',
};
const Projects = () => (

  <div id="projects">
    <br />
    <Typography variant="h4">
      Projects
    </Typography>
    <hr />
    <br />
    <Project info={IPDB} />
    <Project info={musichum} />
    <Project info={yearPlusPlus} />
    <Project info={clock} />
  </div>
);

export default Projects;
