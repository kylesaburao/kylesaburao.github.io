import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import CardItem from "../CardItem";
import sfuImage from "../img/sfu.jpg";

export default function Education() {
  return (
    <Container>
      <Row className="mt-3">
        <Container>
          <Row className="justify-content-center">
            <Col md="auto" className="d-flex justify-content-around">
              <CardItem
                title="Simon Fraser University"
                description="B.Sc. Software Systems, School of Computing Science"
                body={
                  <ul>
                    <li>3.92/4.33 CGPA</li>
                  </ul>
                }
                image={sfuImage}
                date={"2017 - Present"}
              ></CardItem>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}
