import {Grid, Typography, Box} from '@material-ui/core'


export const Internship = (props) => {
    return (
        <Box>
            <Grid
                container
                direction="row"
                justify="space-between"
            >
                <Grid item md={6}>
                    <Typography alight="left" variant="h6">{props.info.title}{" "} 
                        <a href = {props.info.link} target="_blank">@ {props.info.company}</a>
                    </Typography>
                </Grid>
                <Grid item md={3}>
                    <Typography alight="right" variant="h6">{props.info.location} </Typography>
                </Grid>
                <Grid item md={3}>
                    <Typography alight="right" variant="h6">{props.info.time}</Typography>
                </Grid>
            </Grid>
            {/* <Typography variant="body1"> {props.info.description}</Typography> */}
        </Box>
    )}