import { Container, Typography } from "@material-ui/core";
import Image from "../image.jpg"

const SideBar = ({ styles }) => {

    const info = [
        "(+27)79 887 2395",
        "vincent.nick.good@gmail.com",
        "Pretoria, South Africa",
        "16 February 1997",
        ]
    

    return (
        <Container align="center" style={styles.sideBar}>
            <Container>
                <img src={Image} alt="headShot" style={styles.headShot}/>
                <Typography variant="h4">
                    Information
                </Typography>
                {info.map((item, index) => (
                    <Typography variant={"subtitle1"} key={index}>
                        {item}
                    </Typography>
                ))}
            </Container>
        </Container>
    )
}

export default SideBar
