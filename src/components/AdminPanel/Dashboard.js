import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaChartLine, FaShoppingCart, FaMoneyBillWave } from 'react-icons/fa'; // Importing Font Awesome icons

const Dashboard = () => {
  // This is just a placeholder example. Suppose data fetched from database and assigned in like this:
  const fetchedOrders = [
    { id: 1, customer: 'John Doe', date: '11/08/2024', number:'123456987', status: 'Pending', tableNumber: 5, orders: 'water', totalPrice: 568, waiter: 'Rohan' },
    { id: 2, customer: 'Jane Smith', date: '11/08/2024', number:'987456123', status: 'In-Progress', tableNumber: 3, orders: 'chips', totalPrice: 6668, waiter: 'manish' },
    { id: 3, customer: 'Somes', date: '11/08/2024', number:'123456987', status: 'Pending', tableNumber: 1, orders: 'water,wiskey', totalPrice: 568, waiter: 'Rohan' },
    { id: 4, customer: 'Ramesh', date: '11/08/2024', number:'987456123', status: 'In-Progress', tableNumber: 13, orders: 'lemon', totalPrice: 6668, waiter: 'manish' },
    { id: 5, customer: 'John Doe', date: '11/08/2024', number:'123456987', status: 'Pending', tableNumber: 5, orders: 'water', totalPrice: 568, waiter: 'Rohan' },
    { id: 6, customer: 'Jane Smith', date: '11/08/2024', number:'987456123', status: 'In-Progress', tableNumber: 3, orders: 'chips', totalPrice: 6668, waiter: 'manish' },
    { id: 7, customer: 'Somes', date: '11/08/2024', number:'123456987', status: 'Pending', tableNumber: 1, orders: 'water,wiskey', totalPrice: 568, waiter: 'Rohan' },
    { id: 8, customer: 'Ramesh', date: '11/08/2024', number:'987456123', status: 'In-Progress', tableNumber: 13, orders: 'lemon', totalPrice: 6668, waiter: 'manish' },   // Add more orders as needed
  ];
  return (
    <Container fluid className="containerm">
      <h1 className="mb-4">Dashboard</h1>
      <div className="tab-content mb-4">
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Title>Sales</Card.Title>
                  <FaChartLine style={{ color: '#007bff', fontSize: '1.5rem', marginBottom: "1rem" }} />
                </div>
                <Card.Text> <span>Rs.</span> 566</Card.Text>
                <Card.Title className='CardTitle'>Today's Sales</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Title>Order</Card.Title>
                  <FaShoppingCart style={{ color: '#28a745', fontSize: '1.5rem', marginBottom: "1rem" }} />
                </div>
                <Card.Text>5</Card.Text>
                <Card.Title className='CardTitle'>Today's Order</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Title>Expenses</Card.Title>
                  <FaMoneyBillWave style={{ color: '#dc3545', fontSize: '1.5rem', marginBottom: "1rem" }} />
                </div>
                <Card.Text><span>Rs.</span> 455</Card.Text>
                <Card.Title className='CardTitle'>Today's Expenses</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="tab-content mb-4">
      <div className="mt-2 mb-4">
            <h3>Today's Order</h3>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Status</th>
              <th>Table Number</th>
              <th>Waiter</th>
              <th>Total Price</th>
              <th>Numbere</th>
            </tr>
          </thead>
          <tbody>
            {fetchedOrders.length > 0 ? (
              fetchedOrders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>{order.status}</td>
                  <td>{order.tableNumber}</td>
                  <td>{order.waiter}</td>
                  <td><span>Rs.</span> {order.totalPrice}</td>
                  <td>{order.number}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Dashboard;
