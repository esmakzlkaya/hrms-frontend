import "semantic-ui-css/semantic.min.css";
import './App.css';
import Navi from './layouts/Navi';
import { Container } from 'semantic-ui-react';
import Dashboard from './layouts/Dashboard';

function App() {
  return (
    <div className="App">
      <Container>
      <Navi/>
      <Container className="main">
        <Dashboard/>
      </Container>
      </Container>
    </div>
  );
}

export default App;
