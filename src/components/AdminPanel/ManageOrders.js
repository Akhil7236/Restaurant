import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button, Modal } from 'react-bootstrap';

import Invoice from './InvoiceComponent/Invoice';

const ManageOrders = () => {
    // This is just a placeholder example. Suppose data fetched from database and assigned in like this:
    const fetchedOrders = [
        { id: 1, customer: 'John Doe', date: '11/08/2024', status: 'Pending', tableNumber: 5, orders: 'water', totalPrice: 300, items: [{ description: 'Apple', price: 100, quantity: 2 },{ description: 'Wiskey', price: 100, quantity: 1}] },
        { id: 2, customer: 'Jane Smith', date: '11/08/2024', status: 'In-Progress', tableNumber: 3, orders: 'lemon', totalPrice: 6668, items: [{ description: 'Item 2', price: 500, quantity: 1 }] },
        { id: 3, customer: 'Somesh', date: '01/09/2024', status: 'Pending', tableNumber: 1, orders: 'water', totalPrice: 568, items: [{ description: 'Item 1', price: 100, quantity: 2 }] },
        { id: 4, customer: 'Smith', date: '18/01/2024', status: 'In-Progress', tableNumber: 2, orders: 'lemon', totalPrice: 6668, items: [{ description: 'Item 2', price: 500, quantity: 1 }] },
        { id: 5, customer: 'Mona', date: '21/08/2024', status: 'Pending', tableNumber: 8, orders: 'water', totalPrice: 568, items: [{ description: 'Item 1', price: 100, quantity: 2 }] },
        { id: 6, customer: 'Rocky', date: '55/08/2024', status: 'In-Progress', tableNumber: 6, orders: 'lemon', totalPrice: 6668, items: [{ description: 'Item 2', price: 500, quantity: 1 }] },
        // Add more orders as needed
    ];

    const [orders, setOrders] = useState(fetchedOrders);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showInvoiceModal, setShowInvoiceModal] = useState(false);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filteredOrders = fetchedOrders.filter(order =>
            order.customer.toLowerCase().includes(term)
        );
        setOrders(filteredOrders);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);

        if (date) {
            const filteredOrders = fetchedOrders.filter(order =>
                new Date(order.date).toDateString() === date.toDateString()
            );
            setOrders(filteredOrders);
        } else {
            setOrders(fetchedOrders);
        }
    };

    const handleShowDetails = (order) => {
        setSelectedOrder(order);
        setShowModal(true);
    };

    const handleUpdateStatus = (orderId, status) => {
        const updatedOrders = orders.map(order =>
            order.id === orderId ? { ...order, status } : order
        );
        setOrders(updatedOrders);
    };

    const handlePrintInvoice = (order) => {
        setSelectedOrder(order);
        setShowInvoiceModal(true); // Open the Invoice Modal
    };

    return (
        <div className="container mt-0">
            <h1 className="mb-4">Manage Orders</h1>
            <div className="tab-content">
            <div className="row mb-3">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by customer name"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                <div className="col-md-4">
                    <DatePicker
                        className="form-control"
                        selected={selectedDate}
                        onChange={handleDateChange}
                        placeholderText="Select a date"
                    />
                </div>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 ? (
                        orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.customer}</td>
                                <td>{order.date}</td>
                                <td>{order.status}</td>
                                <td>
                                    <Button variant="info" onClick={() => handleShowDetails(order)}>View Details</Button>{' '}
                                    <Button variant="success" onClick={() => handleUpdateStatus(order.id, 'In-Progress')}>In-Progress</Button>{' '}
                                    <Button variant="warning" onClick={() => handleUpdateStatus(order.id, 'Completed')}>Completed</Button>{' '}
                                    <Button variant="secondary" onClick={() => handlePrintInvoice(order)}>Print Invoice</Button>
                                </td>
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

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedOrder ? (
                        <>
                            <p><strong>Table Number:</strong> {selectedOrder.tableNumber}</p>
                            <p><strong>Orders:</strong> {selectedOrder.orders}</p>
                            <p><strong>Status:</strong> {selectedOrder.status}</p>
                            <p><strong>Date:</strong> {selectedOrder.date}</p>
                            <p><strong>Total Price:</strong> Rs. {selectedOrder.totalPrice}</p>
                        </>
                    ) : (
                        <p>No details available</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>

            {/* Invoice Modal */}
            <Modal show={showInvoiceModal} onHide={() => setShowInvoiceModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Invoice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedOrder && <Invoice order={selectedOrder} />}
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowInvoiceModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
            </div>
        </div>
    );
};

export default ManageOrders;
