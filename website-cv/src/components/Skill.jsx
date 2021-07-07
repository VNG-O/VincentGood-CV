import { Container, Typography, Box, List, ListItemIcon, ListItem, ListItemText } from "@material-ui/core"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Skill = ({ skill, styles }) => {
    return (
        <Container style={{padding: "0", position: "relative"}}>
            <Typography xs variant="h4" style={styles.red}>
                    {skill.title}
            </Typography>
            {skill.icon}
            <List dense={true}>
                {skill.info.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemIcon>
                            <FiberManualRecordIcon htmlColor="#000"/>
                        </ListItemIcon>
                        <ListItemText 
                            primary={<Typography variant="body1">
                                        {item}
                                    </Typography>} />
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}

export default Skill
