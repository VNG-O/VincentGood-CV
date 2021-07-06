import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import SideBar from './components/SideBar';
import { Container, Grid } from '@material-ui/core';

function App() {

  const styles = {
    colSeperator: {
        width: "4px",
        backgroundColor: "#d9d9d9",
        marginLeft: "20px",
        marginRight: "20px",
    },
    bold: {
        fontWeight: "bold",
    },
    break: {
        marginBottom: "20px",
    },
    sideBar: {
      backgroundColor: "#a7d1b0",
      border: "2px solid",
    },
    headShot: {
      width: "300px",
      borderRadius: "50%",
  },
  }

  return (
    <Container maxwidth="lg">
      <Grid container>
        <Grid item lg={7}>
          <AboutMe />
          <Experience styles={styles} />
          <Education styles={styles} />
        </Grid>
        <Grid item lg={5} styles={styles.sideBar}>
          <SideBar styles={styles} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
