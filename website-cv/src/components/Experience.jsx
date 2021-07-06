import { Container, Typography, Grid } from "@material-ui/core"

const Experience = () => {

    const colSeperator = {
        width: "4px",
        backgroundColor: "#d9d9d9",
        marginLeft: "20px",
        marginRight: "20px",
    }

    const experience = [
        {
            duration: "2020-2021",
            title: "Industrial Engineering Intern",
            employmentType: "Vacation Work (4 weeks)",
            companyName: "Certus Engineering",
            description: "Performed a time study to gather data on employee performance. Analysed the data and presented it to my mentor. Implemented 5S."
        },
        {
            duration: "2020-2020",
            title: "Industrial Engineering Intern",
            employmentType: "Vacation Work (6 weeks)",
            companyName: "HouseZero - Prefabricated modular home fabricators",
            description: "Designed the plan to move to a new facility, as well as partially designed the floor plan for the new facility."
        },
        {
            duration: "2013-2016",
            title: "Substitute manager and waiter",
            employmentType: "Part Time",
            companyName: "Toni's Fish & Chips Co.",
            description: "Waited and was the substitute manager at a 54-seater restaurant."
        },
    ]

    return (
        <Container alighText align="justify">
            <Typography variant="h4">
                Experience
            </Typography>
            <Grid container>
                {experience.map((item, index) => (
                    <Grid container item>
                        <Grid item>
                            <Typography variant="h5">
                                {item.duration}
                            </Typography>
                        </Grid>
                        <Grid item style={colSeperator} />
                        <Grid item zeroMinWidth>
                            <Typography variant="h6" style={{ fontWeight:"bold" }}>
                                {item.title}
                            </Typography>
                            <Typography variant="body1">
                                {item.employmentType}
                            </Typography>
                            <Typography variant="h6" style={{ fontWeight:"bold" }}>
                                {item.companyName}
                            </Typography>
                            <Typography variant="body1">
                                {item.description}
                            </Typography>
                        </Grid>
                    </Grid>
                ))}
                {/* <Grid container item>
                    <Grid item>
                        <Typography variant="h5">
                            2020-2021
                        </Typography>
                    </Grid>
                    <Grid item style={colSeperator} />
                    <Grid item zeroMinWidth>
                        <Typography variant="h6" style={{ fontWeight:"bold" }}>
                            Industrial Engineer Intern
                        </Typography>
                        <Typography variant="body1">
                            Vacation Work (4 weeks)
                        </Typography>
                        <Typography variant="h6" style={{ fontWeight:"bold" }}>
                            Certus Engineering
                        </Typography>
                        <Typography variant="body1">
                            Performed a time study to gather data on employee performance. Analysed the data and presented it to my mentor. Implemented 5S.
                        </Typography>
                    </Grid>
                </Grid> */}
            </Grid>
        </Container>
    )
}

export default Experience
