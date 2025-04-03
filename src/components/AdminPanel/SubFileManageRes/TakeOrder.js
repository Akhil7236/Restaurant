import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const TakeOrder = ({ reservation, onSubmitOrder, onClose }) => {
    const [orderItems, setOrderItems] = useState([]);
    const [menu, setMenu] = useState([
        { id: 1, name: 'Pasta', price: 10 },
        { id: 2, name: 'Pizza', price: 15 },
        // Add more menu items here
    ]);

    const handleAddItem = (menuItem) => {
        setOrderItems([...orderItems, { ...menuItem, quantity: 1 }]);
    };

    const handleQuantityChange = (index, quantity) => {
        const newOrderItems = [...orderItems];
        newOrderItems[index].quantity = quantity;
        setOrderItems(newOrderItems);
    };

    const handleSubmit = () => {
        onSubmitOrder(reservation.id, orderItems);
        onClose();
    };

    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Take Order for {reservation.customerName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {menu.map((menuItem, index) => (
                        <div key={menuItem.id} className="d-flex justify-content-between align-items-center">
                            <span>{menuItem.name} - ${menuItem.price}</span>
                            <Button onClick={() => handleAddItem(menuItem)}>Add</Button>
                        </div>
                    ))}
                </Form>
                <h5>Order Summary</h5>
                {orderItems.map((item, index) => (
                    <div key={index} className="d-flex justify-content-between align-items-center">
                        <span>{item.name}</span>
                        <input 
                            type="number" 
                            value={item.quantity} 
                            onChange={(e) => handleQuantityChange(index, e.target.value)} 
                        />
                    </div>
                ))}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
                <Button variant="primary" onClick={handleSubmit}>Submit Order</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TakeOrder;
