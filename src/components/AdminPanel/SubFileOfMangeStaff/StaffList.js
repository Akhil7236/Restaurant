import React from 'react';
import { Table, Button } from 'react-bootstrap';

const StaffList = ({ staffList, onEdit, onDelete, onAssignRole, onShowPayroll }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {staffList.map(staff => (
                    <tr key={staff.id}>
                        <td>{staff.id}</td>
                        <td>{staff.name}</td>
                        <td>{staff.role}</td>
                        <td>{staff.salary}</td>
                        <td>
                            <Button variant="warning" onClick={() => onEdit(staff)}>Edit</Button>{' '}
                            <Button variant="danger" onClick={() => onDelete(staff.id)}>Delete</Button>{' '}
                            <Button variant="info" onClick={() => onAssignRole(staff)}>Assign Role</Button>{' '}
                            <Button variant="primary" onClick={() => onShowPayroll(staff)}>Update Salary</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default StaffList;
