import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';

const AvailableTable = () => {
  const location = useLocation();
  const { selectedItems } = location.state;
  const navigate = useNavigate();
  // Dummy data for tables
  const tables = [
    { id: 1, tableNumber: 1, capacity: 4, status: 'Available', location: 'Near Window' },
    { id: 2, tableNumber: 2, capacity: 6, status: 'Occupied', location: 'Near Entrance' },
    { id: 3, tableNumber: 3, capacity: 4, status: 'Available', location: 'Center' },
    { id: 4, tableNumber: 4, capacity: 2, status: 'Available', location: 'Balcony' },
    // Add more tables as needed
  ];

  const availableTables = tables.filter(table => table.status === 'Available');
   
  const handleContinue = (table) => {
    navigate('/order-review', { state: { selectedItems, table } });
  };

  return (
    <div className="container mt-0">
      <h2 className="mt-0">Available Tables</h2>
      <div className="tab-content mb-4">
        <p>  Selected Items: {selectedItems.map(item => `${item.name} (x${item.quantity})`).join(', ')}</p>

        <Row className="mt-5">
          {availableTables.map((table) => (
            <Col sm={4} className="mb-4" key={table.id}>
              <Card className="text-center bgOfTable">
                <Card.Body>
                  <Card.Title className="mt-2 cardTitle">Table - {table.tableNumber}</Card.Title>
                  <Card.Text className='fs-5 cardText'>Capacity: {table.capacity}</Card.Text>
                  <Card.Text className='fs-5 cardText'>Status: {table.status}</Card.Text>
                  <Card.Text className='fs-5 cardText'>Location: {table.location}</Card.Text>
                  {/* <Button variant="warning" className="me-2" onClick={handleContinue}>
                    <FaEdit /> Continue
                  </Button> */}
                  <Button variant="warning" className="me-2" onClick={() => handleContinue(table)}>
                    <FaEdit /> Continue
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AvailableTable;
