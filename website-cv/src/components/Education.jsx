import { Container, Typography, Grid, Box } from "@material-ui/core";

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
        <Box textAlign={{ xs: "center", md: "justify" }}>
            <Container>
                <Typography variant="h4" style={styles.break}>
                    Education
                </Typography>
                <Grid container>
                    {experience.map((item, index) => (
                        <Grid container item key={index}>
                            <Grid item xs={12} lg={3}>
                                <Typography variant="h5">
                                    {item.duration}
                                </Typography>
                            </Grid>
                            <Box style={styles.colSeperator} display={{ xs: 'none', md: 'block' }} />
                            <Grid item xs={12} lg={8}>
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
        </Box>
    )
}

export default Experience
