import { Row, Col } from "react-bootstrap";
import portrait from "../img/me.jpg";
import "./Home.css";

export default function Home() {
  return (
    <Row className="justify-content-md-center align-items-center" id="about">
      <Col md="auto">
        <img src={portrait} alt="Portrait" className="portrait" />
      </Col>
      <Col md="5">
        <div>
          <h1 id="title">Kyle Saburao</h1>
          <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
            Student at Simon Fraser University. Years of experience developing
            software and over a decade working with hardware. ...
          </p>
        </div>
      </Col>
    </Row>
  );
}