import React from "react";
import { Card } from "react-bootstrap";

export default function CardItem({
  title,
  description,
  body,
  image = "",
  imageLink = "",
  date = "",
  width = "30em",
  height = "",
}) {
  const cardStyle = height === "" ? { width } : { width, height };

  return (
    <Card style={cardStyle} className="mb-3">
      {image !== "" &&
        (!imageLink ? (
          <Card.Img variant="top" src={image} />
        ) : (
          <a href={imageLink}>
            <Card.Img variant="top" src={image} />
          </a>
        ))}
      <Card.Header>
        <h4>{title}</h4>
        <p>{description}</p>
        {date !== "" && <em>{date}</em>}
      </Card.Header>
      <Card.Body>{body}</Card.Body>
    </Card>
  );
}
