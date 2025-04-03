// StaffForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const StaffForm = ({ onSubmit, staff }) => {
    const [formData, setFormData] = useState({
        name: staff ? staff.name : '',
        age: staff ? staff.age : '',
        gender: staff ? staff.gender : '',
        mobileNumber: staff ? staff.mobileNumber : '',
        address: staff ? staff.address : '',
        alternateNumber: staff ? staff.alternateNumber : '',
        staffId: staff ? staff.staffId : '',
        salary: staff ? staff.salary : '',
        joiningDate: staff ? staff.joiningDate : '',
        role: staff ? staff.role : '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                    as="select"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formMobileNumber">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                    type="text"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formAlternateNumber">
                <Form.Label>Alternate Number</Form.Label>
                <Form.Control
                    type="text"
                    name="alternateNumber"
                    value={formData.alternateNumber}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="formStaffId">
                <Form.Label>Staff ID</Form.Label>
                <Form.Control
                    type="text"
                    name="staffId"
                    value={formData.staffId}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formSalary">
                <Form.Label>Salary</Form.Label>
                <Form.Control
                    type="number"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formJoiningDate">
                <Form.Label>Joining Date</Form.Label>
                <Form.Control
                    type="date"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formRole">
                <Form.Label>Role</Form.Label>
                <Form.Control
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
                {staff ? 'Update' : 'Add'} Staff
            </Button>
        </Form>
    );
};

export default StaffForm;
