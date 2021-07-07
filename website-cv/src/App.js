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
      // border: "2px solid",
      margin: "0",
      padding: "0",
    },
    headShot: {
      margin: "20px",
      width: "300px",
      borderRadius: "50%",
  },
    blue: {
      backgroundColor: "#5ab2c9",
      marginBottom: "20px",
    },
    red: {
      backgroundColor: "#d49384",
      marginBottom: "20px",
    },
    rotate: {
      transform: "rotate(-90deg)",
    },
  }

  return (
    <Container maxwidth="lg">
      <Grid container>
        <Grid item lg={7}>
          <AboutMe styles={styles}/>
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
