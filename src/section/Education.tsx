import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";

import sfuImage from "../img/sfu.jpg";

export default function Education() {
  return (
    <>
      <Row>
        <h3 id="education">Education</h3>
      </Row>
      <Row className="mt-3">
        <Container>
          <Row>
            <Col md="auto">
              <Card style={{ width: "30em" }}>
                <Card.Img variant="top" src={sfuImage} />
                <Card.Header>
                  <h4>Simon Fraser University</h4>
                  <p>B.Sc. Software Systems, School of Computing Science</p>
                  <em>(2017 - Present)</em>
                </Card.Header>
                <Card.Body>
                  <ul>
                    <li>3.92/4.33 CGPA</li>
                    <li>Dean's Honour Roll & Open Scholarship</li>
                    <li>
                      <p>
                        Activities & Societies: Software Systems Student
                        Society, HackThe90’s, Life Hacks, Hackademia
                      </p>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  );
}
