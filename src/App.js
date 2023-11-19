import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
    <Container className='grid'>
      <Row>
        <div className="display">
          0
        </div>
      </Row>
      <Row className='justify-content-center'>
        <Col sm={3}>
        <div className="square"><Button variant="Primary">7</Button>{' '}</div>
        </Col>
        <Col sm={3}>
        <div className="square"><Button variant="Primary">8</Button>{' '}</div>
        </Col>
        <Col sm={3}>
        <div className="square"><Button variant="Primary">9</Button>{' '}</div>
        </Col>
        <Col sm={3}>
        <div className="square"><Button variant="Secondary">×</Button>{' '}</div>
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
        <div className="square"><Button variant="Primary">4</Button>{' '}</div>
        </Col>
        <Col sm={3}>
        <div className="square"><Button variant="Primary">5</Button>{' '}</div>
        </Col>
        <Col sm={3}>
        <div className="square"><Button variant="Primary">6</Button>{' '}</div>
        </Col>
        <Col sm={3}>
        <div className="square"><Button variant="Secondary">−</Button>{' '}</div>
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
        <div className="square"><Button variant="Primary">1</Button>{' '}</div>
        </Col>
        <Col sm={3}>
        <div className="square"><Button variant="Primary">2</Button>{' '}</div>
        </Col>
        <Col sm={3}>
        <div className="square"><Button variant="Primary">3</Button>{' '}</div>
        </Col>
        <Col sm={3}>
        <div className="square"><Button variant="Secondary">+</Button>{' '}</div>
        </Col>
      </Row>
      <Row className='justify-content-end'>
        <Col>
        <div className="rect"><Button variant="Primary">0</Button>{' '}</div>
        </Col>
        <Col sm={3}>
        <div className="square"><Button variant="Secondary">÷</Button>{' '}</div>
        </Col>
        <Col sm={3}>
        <div className="square"><Button variant="Secondary">=</Button>{' '}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
