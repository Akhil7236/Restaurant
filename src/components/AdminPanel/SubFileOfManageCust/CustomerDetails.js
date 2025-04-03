import React from 'react';
import { Table } from 'react-bootstrap';

const CustomerDetails = ({ customer }) => {
    const orderHistory = [
        { id: 1, date: '2024-08-01', total: '$100' },
        { id: 2, date: '2024-08-05', total: '$50' },
    ];

    return (
        <div>
            <h3>{customer.name}</h3>
            <p>Phone: {customer.phone}</p>

            <h4>Order History</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orderHistory.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.date}</td>
                            <td>{order.total}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default CustomerDetails;
