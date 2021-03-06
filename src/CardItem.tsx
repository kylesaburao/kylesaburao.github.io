import React from "react";
import PropTypes from "prop-types";
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
  let cardStyle = {};
  if (width) {
    cardStyle["width"] = width;
  }
  if (height) {
    cardStyle["height"] = height;
  }

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
        {description && <p>{description}</p>}
        {date !== "" && <em>{date}</em>}
      </Card.Header>
      {body && <Card.Body>{body}</Card.Body>}
    </Card>
  );
}

CardItem.propTypes = {
  body: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};
