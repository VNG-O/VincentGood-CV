import { Container, Typography, Grid } from "@material-ui/core";

const Experience = ({ styles }) => {

    const experience = [
        {
            duration: "2016 - Present",
            levelOfEducation: "Bachelor of Industrial Engineering",
            institution: "University of Pretoria",
        },
        {
            duration: "2011 - 2015",
            levelOfEducation: "National Senior Certificate",
            institution: "Pretoria Boys High School",
        },
    ]

    return (
        <Container align="justify">
            <Typography variant="h4" style={styles.break}>
                Education
            </Typography>
            <Grid container>
                {experience.map((item, index) => (
                    <Grid container item key={index}>
                        <Grid item lg={3}>
                            <Typography variant="h5">
                                {item.duration}
                            </Typography>
                        </Grid>
                        <Grid item style={styles.colSeperator} />
                        <Grid item lg={8}>
                            <Typography variant="h6" style={styles.bold}>
                                {item.levelOfEducation}
                            </Typography>
                            <Typography variant="body1" style={styles.break}>
                                {item.institution}
                            </Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Experience
