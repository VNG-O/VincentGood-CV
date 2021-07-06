import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import { Container } from '@material-ui/core'

function App() {
  return (
    <Container>
      <AboutMe />
      <Experience />
    </Container>
  );
}

export default App;
