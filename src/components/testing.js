
ManageOrders.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button, Modal } from 'react-bootstrap';

import Invoice from './InvoiceComponent/Invoice';

const ManageOrders = () => {
    // This is just a placeholder example. Suppose data fetched from database and assigned in like this:
    const fetchedOrders = [
        { id: 1, customer: 'John Doe', date: '11/08/2024', status: 'Pending', tableNumber: 5, orders: 'water', totalPrice: 568, items: [{ description: 'Item 1', price: 100, quantity: 2 }] },
        { id: 2, customer: 'Jane Smith', date: '11/08/2024', status: 'In-Progress', tableNumber: 3, orders: 'lemon', totalPrice: 6668, items: [{ description: 'Item 2', price: 500, quantity: 1 }] },
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
        <div className="container mt-4">
            <h2 className="mb-4">Manage Orders</h2>

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
    );
};

export default ManageOrders;

Invoice.js
import React from 'react';
import './Invoice.css'; // You can style your invoice using this CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import ManageOrders from './AdminPanel/ManageOrders';

const Invoice = ({ order }) => {
    const handlePrint = () => {
        const printContents = document.getElementById('invoice').innerHTML;
        const originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        window.location.reload();  // Reload the page to reset the view
    };

    return (
        <div className="invoice-container" id="invoice">
            <div className="invoice-header">
                <h2>INVOICE</h2>
                <p>Invoice Number: #{order.id}</p>
                <p>Invoice Date: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="invoice-details">
                <div className="invoice-to">
                    <h3>Invoice To</h3>
                    <p>{order.customer}</p>
                    <p>Table Number: {order.tableNumber}</p>
                </div>
                <div className="invoice-from">
                    <h3>Invoice From</h3>
                    <p>Your Restaurant Name</p>
                    <p>Your Restaurant Address</p>
                </div>
            </div>

            <table className="invoice-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Item Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {order.items.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.description}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price * item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="invoice-summary">
                <p>Subtotal: ${order.subtotal}</p>
                <p>Tax: ${order.tax}</p>
                <h4>Grand Total: ${order.total}</h4>
            </div>

            <div className="invoice-footer">
                <button onClick={handlePrint} className="btn btn-primary">Print Invoice</button>
            </div>
        </div>
    );
};

export default Invoice;
everything is good except it printing at top React App in invoice  and date formate is month/day/year in ManageOrder.js and Invoice.js but i want date formate DD/MM/YYYY