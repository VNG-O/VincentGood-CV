import { Container, Typography, Box } from '@material-ui/core';

const AboutMe = ({ styles }) => {
    return (
        <Box textAlign={{ xs: "center", md: "justify" }}>
            <Container style={{ padding: "0", margin: "0" }}>
                <Container>
                    <Typography variant="h2">
                        Vincent Good
                    </Typography>
                    <Typography variant="h4" style={styles.break}>
                        Industrial Engineer
                    </Typography>
                </Container>
                <Container>
                    <Typography variant="body1"  align="justify" style={styles.break}>
                        As an Industrial Engineer, I enjoy using my problem-solving ability and technical skills to tackle tasks head-on. My academic background, industrial placements, and work experience have given me the ability to assess a situation and adapt my approach accordingly in a high-stress environment. This also further developed my attention to detail, team management and interpersonal communication skills.
                    </Typography>
                    <Typography variant="body1"  align="justify" style={styles.break}>
                        Having travelled to England, Southern Africa, and South-East Asia, I am accustomed to adapting to my surroundings and bringing a unique perspective to others. Africa is my continent, and I believe in helping grow it to its full potential.
                    </Typography>
                </Container>
            </Container>
        </Box>
    )
}

export default AboutMe
