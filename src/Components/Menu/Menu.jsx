import React from "react";
import { Container, Card, Button } from "react-bootstrap";

export default function Menu() {
  return (
    <Container>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Gulab Jamun</Card.Title>
          <Card.Text>Home style gulab jamun</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
