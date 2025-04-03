import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './ManageReservation.css';

const OrderReview = () => {
  const location = useLocation();
  const { selectedItems, table } = location.state;

  const handleProceedToPay = () => {
    // Logic for proceeding to payment
  };

  const handlePayLater = () => {
    // Logic for paying later
  };

  const handleSendInvoice = () => {
    // Logic to send the invoice link to guest's mobile number
  };
  return (
    <div className="container mt-0">
      <h1 className="mt-0">Order Review</h1>
      <div className="tab-content mb-4">
        <Row>
          <Col md={8}>
            <h4>Selected Items</h4>
            {selectedItems.map(item => (
              <Card key={item.id} className="mb-2">
                <Card.Body>
                  <Card.Title className='CardTitleName'>{item.name}</Card.Title>
                  <p className='CardTextName'>Quantity: {item.quantity}</p>
                  <p className='CardTextName'>Price: Rs. {item.price}</p>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col md={4}>
            <h4>Table Details</h4>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Table - {table.tableNumber}</Card.Title>
                <Card.Text>Capacity: {table.capacity}</Card.Text>
                <Card.Text>Status: {table.status}</Card.Text>
                <Card.Text>Location: {table.location}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="d-flex justify-content-end mt-4">
          <Button variant="primary" onClick={handleProceedToPay} className="me-2">
            Proceed to Pay
          </Button>
          <Button variant="secondary" onClick={handlePayLater} className="me-2">
            Pay Later
          </Button>
          <Button variant="success" onClick={handleSendInvoice}>
            Send Invoice
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
