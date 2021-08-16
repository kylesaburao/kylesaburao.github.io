import React from "react";
import { Card } from "react-bootstrap";

export default function CardItem({
  title,
  description,
  image = "",
  date = "",
  body = [],
  width = "30em",
}) {
  return (
    <Card style={{ width: width }} className="mb-3">
      {image !== "" && <Card.Img variant="top" src={image} />}
      <Card.Header>
        <h4>{title}</h4>
        <p>{description}</p>
        {date !== "" && <em>{date}</em>}
      </Card.Header>
      {body.length > 0 && <Card.Body><ul>{body.map(x => <li key=></li>)}</ul></Card.Body>}
      
    </Card>
  );
}
