import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./App.css";
import { useState } from "react";
import Decimal from "decimal.js";

function App() {
  const [curNum, setcurNum] = useState(new Decimal(0));
  const [deci, setdeci] = useState(false);
  const [dp, setdp] = useState(1);

  function digClick(i) {
    if (deci) {
      setcurNum(curNum.plus(Decimal(i).dividedBy(Decimal(10).toPower(dp))));
      setdp(dp + 1);
    } else {
      setcurNum(curNum.times(10).plus(i));
    }
  }

  function deciClick() {
    setdeci(true);
  }

  function acClick() {
    setdeci(false);
    setcurNum(new Decimal(0));
    setdp(1);
  }

  function DigButton({ children }) {
    return (
      <Button variant="Primary" onClick={() => digClick(children)}>
        {children}
      </Button>
    );
  }

  var res = curNum.toFixed(dp - 1);
  if (dp == 1 && deci) {
    res += ".";
  }

  return (
    <Container>
      <Row>
        <div className="display">{res}</div>
      </Row>
      <Row>
        <Col sm={3}>
          <div className="square">
            <Button variant="Info" onClick={() => acClick()}>
              AC
            </Button>
          </div>
        </Col>
        <Col sm={3}>
          <div className="square">
            <Button variant="Secondary">÷</Button>
          </div>
        </Col>
        <Col sm={3}>
          <div className="square">
            <Button variant="Secondary">×</Button>
          </div>
        </Col>
        <Col sm={3}>
          <div className="square">
            <Button variant="Secondary">−</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={9}>
          <Row>
            <Col sm={4}>
              <div className="square">
                <DigButton>{7}</DigButton>
              </div>
            </Col>
            <Col sm={4}>
              <div className="square">
                <DigButton>{8}</DigButton>
              </div>
            </Col>
            <Col sm={4}>
              <div className="square">
                <DigButton>{9}</DigButton>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <div className="square">
                <DigButton>{4}</DigButton>
              </div>
            </Col>
            <Col sm={4}>
              <div className="square">
                <DigButton>{5}</DigButton>
              </div>
            </Col>
            <Col sm={4}>
              <div className="square">
                <DigButton>{6}</DigButton>
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={3}>
          <div className="hrect">
            <Button variant="Secondary">+</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={9}>
          <Row>
            <Col sm={4}>
              <div className="square">
                <DigButton>{1}</DigButton>
              </div>
            </Col>
            <Col sm={4}>
              <div className="square">
                <DigButton>{2}</DigButton>
              </div>
            </Col>
            <Col sm={4}>
              <div className="square">
                <DigButton>{3}</DigButton>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <div className="vrect">
                <DigButton>{0}</DigButton>
              </div>
            </Col>
            <Col sm={4}>
              <div className="square">
                <Button variant="Primary" onClick={deciClick}>
                  .
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={3}>
          <div className="hrect">
            <Button variant="Secondary">=</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
