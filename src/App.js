import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  return (
    <Container>
      <Row>
        <div className="display">0</div>
      </Row>
      <Row>
        <Col sm={3}>
          <div className="square">
            <Button variant="Info">C</Button>{" "}
          </div>
        </Col>
        <Col sm={3}>
          <div className="square">
            <Button variant="Secondary">÷</Button>{" "}
          </div>
        </Col>
        <Col sm={3}>
          <div className="square">
            <Button variant="Secondary">×</Button>{" "}
          </div>
        </Col>
        <Col sm={3}>
          <div className="square">
            <Button variant="Secondary">−</Button>{" "}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={9}>
          <Row>
            <Col sm={4}>
              <div className="square">
                <Button variant="Primary">7</Button>{" "}
              </div>
            </Col>
            <Col sm={4}>
              <div className="square">
                <Button variant="Primary">8</Button>{" "}
              </div>
            </Col>
            <Col sm={4}>
              <div className="square">
                <Button variant="Primary">9</Button>{" "}
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <div className="square">
                <Button variant="Primary">4</Button>{" "}
              </div>
            </Col>
            <Col sm={4}>
              <div className="square">
                <Button variant="Primary">5</Button>{" "}
              </div>
            </Col>
            <Col sm={4}>
              <div className="square">
                <Button variant="Primary">6</Button>{" "}
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={3}>
          <div className="hrect">
            <Button variant="Secondary">+</Button>{" "}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={9}>
          <Row>
            <Col sm={4}>
              <div className="square">
                <Button variant="Primary">1</Button>{" "}
              </div>
            </Col>
            <Col sm={4}>
              <div className="square">
                <Button variant="Primary">2</Button>{" "}
              </div>
            </Col>
            <Col sm={4}>
              <div className="square">
                <Button variant="Primary">3</Button>{" "}
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <div className="vrect">
                <Button variant="Primary">0</Button>{" "}
              </div>
            </Col>
            <Col sm={4}>
              <div className="square">
                <Button variant="Primary">.</Button>{" "}
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={3}>
          <div className="hrect">
            <Button variant="Secondary">=</Button>{" "}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
