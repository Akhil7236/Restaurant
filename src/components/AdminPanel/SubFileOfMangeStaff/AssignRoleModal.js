// src/components/AdminPanel/ManageStaff/SubFileOfManageStaff/AssignRoleModal.js

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AssignRoleModal = ({ show, handleClose, staff, onSave }) => {
    const [selectedRole, setSelectedRole] = useState(staff ? staff.role : '');

    const handleSave = () => {
        onSave(staff, selectedRole);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Assign Role to {staff?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="roleSelect">
                        <Form.Label>Select Role</Form.Label>
                        <Form.Control
                            as="select"
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                        >
                            <option value="">Choose...</option>
                            <option value="Manager">Manager</option>
                            <option value="Chef">Chef</option>
                            <option value="Waiter">Waiter</option>
                            <option value="Cleaner">Cleaner</option>
                            {/* Add more roles as needed */}
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AssignRoleModal;
