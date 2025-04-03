// Payroll.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Payroll = ({ staff, onUpdateSalary }) => {
    const [salary, setSalary] = useState(staff.salary);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateSalary(staff.id, salary);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formSalary">
                <Form.Label>Salary for {staff.name}</Form.Label>
                <Form.Control
                    type="number"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
                Update Salary
            </Button>
        </Form>
    );
};

export default Payroll;
