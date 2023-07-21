import Draggable from 'react-draggable';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container>
      <Draggable className="hello">
        <h1>Hello</h1>
      </Draggable>
    </Container>
  );
}

export default App;
