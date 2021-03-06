import { Container, Typography, Grid, Box } from "@material-ui/core";

const Experience = ({ styles }) => {

    const experience = [
        {
            duration: "2020 - 2021",
            title: "Industrial Engineering Intern",
            employmentType: "Vacation Work (4 weeks)",
            companyName: "Certus Engineering",
            description: "Performed a time study to gather data on employee performance. Analysed the data and presented it to my mentor. Implemented 5S."
        },
        {
            duration: "2020 - 2020",
            title: "Industrial Engineering Intern",
            employmentType: "Vacation Work (6 weeks)",
            companyName: "HouseZero - Prefabricated modular home fabricators",
            description: "Designed the plan to move to a new facility, as well as partially designed the floor plan for the new facility."
        },
        {
            duration: "2013 - 2016",
            title: "Substitute manager and waiter",
            employmentType: "Part Time",
            companyName: "Toni's Fish & Chips Co.",
            description: "Waited and was the substitute manager at a 54-seater restaurant."
        },
    ]

    return (
        <Box textAlign={{ xs: "center", md: "justify" }}>
            <Container>
                <Typography variant="h4" style={styles.break}>
                    Experience
                </Typography>
                <Grid container>
                    {experience.map((item, index) => (
                        <Grid container item key={index}>
                            <Grid item xs={12} md={3}>
                                <Typography variant="h5">
                                    {item.duration}
                                </Typography>
                            </Grid>
                            <Box style={styles.colSeperator} display={{ xs: 'none', md: 'block' }} />
                            <Grid item xs={12} md={8}>
                                <Typography variant="h6" style={styles.bold}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body1">
                                    {item.employmentType}
                                </Typography>
                                <Typography variant="h6" style={styles.bold}>
                                    {item.companyName}
                                </Typography>
                                <Typography variant="body1" align="justify" style={styles.break}>
                                    {item.description}
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
