import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./App.css";
import { useState } from "react";
import Decimal from "decimal.js";

function App() {
  const [preNum, setpreNum] = useState(new Decimal(0));
  const [curNum, setcurNum] = useState(new Decimal(0));
  const [deci, setdeci] = useState(false);
  const [dp, setdp] = useState(1);
  const [cState, setcState] = useState("AC");
  const [cSign, setcSign] = useState("");
  const [signFlag, setsignFlag] = useState(false);
  const [iFlag, setiFlag] = useState(false);

  function digClick(i) {
    var di = curNum;
    if (signFlag) {
      di = new Decimal(0);
    }
    if (di.toFixed(dp).length < 14) {
      if (deci) {
        setcurNum(di.plus(Decimal(i).dividedBy(Decimal(10).toPower(dp))));
        setdp(dp + 1);
      } else {
        setcurNum(di.times(10).plus(i));
      }
      if (i !== 0) {
        setcState("C");
      }
      setsignFlag(false);
    }
  }

  function deciClick() {
    setdeci(true);
    setcState("C");
    setpreNum(curNum);
  }

  function acClick() {
    setdeci(false);
    setcurNum(new Decimal(0));
    setdp(1);
    if (cState === "C") {
      setcState("AC");
      if (!iFlag) {
        setsignFlag(true);
      }
    } else {
      setsignFlag(false);
      setcSign("");
      setpreNum(new Decimal(0));
      setiFlag(false);
    }
  }

  function DigButton({ children }) {
    return (
      <Button variant="Primary" onClick={() => digClick(children)}>
        {children}
      </Button>
    );
  }

  const eqClick = () => {
    if (cSign === "+") {
      if (!iFlag) {
        setiFlag(true);
        setcurNum(preNum.plus(curNum));
        setpreNum(curNum);
      } else {
        setcurNum(curNum.plus(preNum));
      }
    }
    if (cSign === "-") {
      if (!iFlag) {
        setiFlag(true);
        setcurNum(preNum.minus(curNum));
        setpreNum(curNum);
      } else {
        setcurNum(curNum.minus(preNum));
      }
    }
    setsignFlag(false);
  };

  function signClick({ children }) {
    if (children !== cSign && !signFlag) {
      eqClick();
    }
    setcSign(children);
    setsignFlag(true);
    setpreNum(curNum);
  }

  function SignButton({ children }) {
    var button = (
      <Button variant="Secondary" onClick={() => signClick({ children })}>
        {children}
      </Button>
    );
    if (signFlag && children === cSign) {
      button = (
        <Button variant="Success" onClick={() => signClick({ children })}>
          {children}
        </Button>
      );
    }
    return button;
  }

  var res = curNum.toFixed(dp - 1) + "a" + preNum.toFixed(0);
  if (dp === 1 && deci && res.length < 12) {
    res += ".";
  }

  return (
    <Container>
      <Row>
        <div className="display">{res}</div>
      </Row>
      <Row>
        <Col className="col-3">
          <div className="square">
            <Button variant="Info" onClick={() => acClick()}>
              {cState}
            </Button>
          </div>
        </Col>
        <Col className="col-3">
          <div className="square">
            <SignButton>÷</SignButton>
          </div>
        </Col>
        <Col className="col-3">
          <div className="square">
            <SignButton>×</SignButton>
          </div>
        </Col>
        <Col className="col-3">
          <div className="square">
            <SignButton>-</SignButton>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-9">
          <Row>
            <Col className="col-4">
              <div className="square">
                <DigButton>{7}</DigButton>
              </div>
            </Col>
            <Col className="col-4">
              <div className="square">
                <DigButton>{8}</DigButton>
              </div>
            </Col>
            <Col className="col-4">
              <div className="square">
                <DigButton>{9}</DigButton>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-4">
              <div className="square">
                <DigButton>{4}</DigButton>
              </div>
            </Col>
            <Col className="col-4">
              <div className="square">
                <DigButton>{5}</DigButton>
              </div>
            </Col>
            <Col className="col-4">
              <div className="square">
                <DigButton>{6}</DigButton>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="col-3">
          <div className="hrect">
            <SignButton>+</SignButton>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-9">
          <Row>
            <Col className="col-4">
              <div className="square">
                <DigButton>{1}</DigButton>
              </div>
            </Col>
            <Col className="col-4">
              <div className="square">
                <DigButton>{2}</DigButton>
              </div>
            </Col>
            <Col className="col-4">
              <div className="square">
                <DigButton>{3}</DigButton>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-8">
              <div className="vrect">
                <DigButton>{0}</DigButton>
              </div>
            </Col>
            <Col className="col-4">
              <div className="square">
                <Button variant="Primary" onClick={deciClick}>
                  .
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="col-3">
          <div className="hrect">
            <Button variant="Secondary" onClick={eqClick}>
              =
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
