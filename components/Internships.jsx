import { Typography } from '@mui/material';
import Internship from './Internship';

const amzn = {
  company: 'Amazon Web Services',
  link: 'https://aws.amazon.com/q/business',
  title: 'Software Engineer',
  location: 'NYC, NY',
  time: 'Jun. 2021 - Present',
  description:
    '',
};
const flowcode = {
  company: 'Flowcode',
  link: 'https://www.flowcode.com/',
  title: 'Software Engineering Intern',
  location: 'NYC, NY',
  time: 'Jun. 2020 - Aug. 2020',
  description:
    `- Developed, tested and deployed website converter microservice, and integrated new features into website builder Flowpage API, <b>shortening 98% of transition time</b> for users from company’s competitors<br/> 
    - Coded in <b>Node.js</b> using <b>TypeScript, Express, Multer, Cheerio.js, Hapi.js, Axios, and REST</b>; managed <b>Azure SQL DB</b> and <b>Firebase</b> using <b>TypeORM, GraphQL, Apollo</b>; tested and deployed using <b>Docker, Jest, SuperTest, and ESlint</b> <br/>
    - Contributed around <b>14,000 lines of code</b> in the first month, and completed all tasks within half of deadline time<br/>- Collaborated in team of 11 developers and PM using Agile and GitHub in <b>12-week paid internship</b><br/>`,
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
    <Internship info={flowcode} />
  </div>
);

export default Internships;
