import { Typography } from '@material-ui/core';
import Internship from './Internship';

const amzn = {
  company: 'Amazon',
  link: 'https://en.wikipedia.org/wiki/Amazon_(company)',
  title: 'Incoming Software Engineer (full-time)',
  location: 'Seattle, WA',
  time: 'Starting in Jun. 2021',
  description:
    ``,
};
const dtx = {
  company: 'Flowcode',
  link: 'https://www.thedtxcompany.com/',
  title: 'Software Engineering Intern (full-time)',
  location: 'NYC, NY',
  time: 'Jun. 2020 - Aug. 2020',
  description:
    `- Developed, tested and deployed website converter microservice, and integrated new features into website builder Flowpage API, <b>shortening 98% of transition time</b> for users from company’s competitors<br/> 
    - Coded in <b>Node.js</b> using <b>TypeScript, Express, Multer, Cheerio.js, Hapi.js, Axios, and REST</b>; managed <b>Azure SQL DB</b> and <b>Firebase</b> using <b>TypeORM, GraphQL, Apollo</b>; tested and deployed using <b>Docker, Jest, SuperTest, and ESlint</b> <br/>
    - Contributed around <b>14,000 lines of code</b> in the first month, and completed all tasks within half of deadline time<br/>- Collaborated in team of 11 developers and PM using Agile and GitHub in <b>12-week paid internship</b><br/>`,
};

const makeithappen = {

  company: 'makeithappen.nyc',
  link: 'http://makeithappen.nyc/',
  title: 'Web Development Intern (part-time)',
  location: 'NYC, NY',
  time: 'Jan. 2020 - Apr. 2020',
  description: '',
};

const utofun = {
  company: 'UTOFUN',
  link: 'https://www.linkedin.com/company/utofun/about/',
  title: 'Software Engineering Intern (part-time)',
  location: 'NYC, NY',
  time: 'Dec. 2020 - Jan. 2020',
  description: '',
};

const Internships = () => (

  <div id="internships">
    <br />
    <Typography variant="h4">
      Work Experience
    </Typography>
    <hr />
    <br />
    <Internship info={amzn} />
    <Internship info={dtx} />
    <Internship info={makeithappen} />
    <Internship info={utofun} />
  </div>
);

export default Internships;
