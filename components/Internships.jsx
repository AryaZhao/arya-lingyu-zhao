import {Grid, Typography} from '@material-ui/core'

export const Internships = () => {

    return (

    <div id = 'internships'>
        <br/>
        <Typography variant="h4" >
            Internships
        </Typography>
        <hr/>
        <br/>
        <Grid
            container
            direction="row"
            justify="space-between"
        >
            <Grid item md={6}>
                <Typography alight="left" variant="h5">Software Engineer Intern
                <a href = 'https://www.thedtxcompany.com/' target="_blank">
                    @ the dtx company
                </a>
                </Typography>
            </Grid>
            <Grid item md={3}>
                <Typography alight="right" variant="h6">NY, NYC</Typography>
            </Grid>
            <Grid item md={3}>
                <Typography alight="right" variant="h6">Jun. 2020 - Aug. 2020</Typography>
            </Grid>
        </Grid>
        <Typography variant="body1">
            - Developed, tested and deployed website converter microservice, and integrated new features into website builder Flowpage API, <b>shortening 98% of transition time</b> for users from company’s competitors<br/>
            - Coded in <b>Node.js</b> using <b>TypeScript, Express, Multer, Cheerio.js, Hapi.js, Axios, and REST</b>; managed <b>Azure SQL DB</b> and <b>Firebase</b> using <b>TypeORM, GraphQL, Apollo</b>; tested and deployed using <b>Docker, Jest, SuperTest, and ESlint</b> <br/>
            - Contributed around <b>14,000 lines of code</b> in the first month, and completed all tasks within half of deadline time<br/>
            - Collaborated in team of 11 developers and PM using Agile and GitHub in <b>12-week paid internship</b><br/>
        </Typography>
    </div>
)}