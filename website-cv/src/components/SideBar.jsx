import { Container, Typography} from "@material-ui/core";
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import GroupIcon from '@material-ui/icons/Group';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import Image from "../image.jpg"
import Skill from "./Skill";

const SideBar = ({ styles }) => {

    const info = [
        "(+27)79 887 2395",
        "vincent.nick.good@gmail.com",
        "Pretoria, South Africa",
        "16 February 1997",
        ]
    
    const skills = [
        {
            title: "Technology",
            icon: <LaptopMacIcon htmlColor="#000" style={
                                                            {
                                                                fontSize: "4.5rem",
                                                                position: "absolute",
                                                                zIndex: "1",
                                                                top: "-15px",
                                                                left: "0"
                                                            }
                                                        } />,
            info: [
                "Programming (Python, R)",
                "MySQL Database Service",
                "Power BI",
                "Microsoft Office suite",
                "Comfortable in Linux",
                "Anylogic: Simulation Modelling Software",
                ]
        },
        {
            title: "Leadership",
            icon: <GroupIcon htmlColor="#000" style={
                                                        {
                                                            fontSize: "4.5rem",
                                                            position: "absolute",
                                                            zIndex: "1",
                                                            top: "-15px",
                                                            left: "0"
                                                        }
                                                    } />,
            info: [
                "Managed a restaurant alone regularly, in the absence of the manager",
                "House prefect at Pretoria Boys High School",
                "Tutored mathematics to school students",
                "Captain of the TuksUltimate Team",
                ]
        },
        {
            title: "Interests",
            icon: <BeachAccessIcon htmlColor="#000" style={
                                                            {
                                                                fontSize: "4.5rem",
                                                                position: "absolute",
                                                                zIndex: "1",
                                                                top: "-15px",
                                                                left: "0"
                                                            }
                                                        } />,
            info: [
                "Technology – Across the board, from computers through materials and engineering",
                "Woodworking – Have made and sold home décor items",
                "Travel – Travelled to Europe, South East Asia and through Southern Africa",
                "Photography – Have done commercial assignments",
                ]
        },
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
            <Container style={{padding: "0"}}>
                <Typography variant="h4" style={styles.blue}>
                    Skills
                </Typography>
                        {skills.map((item, index) => (
                            <Skill skill={item} styles={styles} key={index}/>
                        ))}
            </Container>
        </Container>
    )
}

export default SideBar
