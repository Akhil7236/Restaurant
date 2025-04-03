import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <Container fluid className="mt-4">
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Expenses</Card.Title>
              <Card.Text>Rs. 566</Card.Text>
              <Card.Title>Today's Expenses</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Revenue</Card.Title>
              <Card.Text>4555</Card.Text>
              <Card.Title>Today's Revenue</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>P&L</Card.Title>
              <Card.Text>455</Card.Text>
              <Card.Title>Today's Net P&L</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Orders</Card.Title>
              <Card.Text>150</Card.Text>
              <Card.Title>Today's Orders</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Add more cards or other metrics as needed */}
    </Container>
  );
};

export default Dashboard;
