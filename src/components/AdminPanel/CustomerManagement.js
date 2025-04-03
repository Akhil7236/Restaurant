import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import CustomerDetails from './SubFileOfManageCust/CustomerDetails';
// import FeedbackManagement from './SubFileOfManageCust/FeedbackManagement';
// import LoyaltyProgram from './SubFileOfManageCust/LoyaltyProgram'

const CustomerManagement = () => {
    const [customers, setCustomers] = useState([
        { id: 1, name: 'John Doe', phone: '1234567890' },
        { id: 2, name: 'Jane Smith', phone: '0987654321' },
    ]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleViewDetails = (customer) => {
        setSelectedCustomer(customer);
        setShowModal(true);
    };

    return (
        <div className="container mt-5">
            <h1>Customer Management</h1>
            <div className="tab-content">
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.phone}</td>
                            <td>
                                <Button variant="info" onClick={() => handleViewDetails(customer)}>View Details</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Customer Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CustomerDetails customer={selectedCustomer} />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default CustomerManagement;
