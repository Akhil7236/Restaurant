// import React, { useState, useEffect } from 'react';
// import { Form, Button } from 'react-bootstrap';

// const TableForm = ({ onSubmit, table }) => {
//     const [formData, setFormData] = useState({
//         tableNumber: '',
//         capacity: '',
//         status: 'Available',
//         location: ''
//     });

//     useEffect(() => {
//         if (table) {
//             setFormData(table);
//         }
//     }, [table]);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit(formData);
//     };

//     return (
//         <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formTableNumber">
//                 <Form.Label>Table Number</Form.Label>
//                 <Form.Control 
//                     type="text" 
//                     name="tableNumber" 
//                     value={formData.tableNumber} 
//                     onChange={handleChange} 
//                     required 
//                 />
//             </Form.Group>

//             <Form.Group controlId="formCapacity">
//                 <Form.Label>Capacity</Form.Label>
//                 <Form.Control 
//                     type="number" 
//                     name="capacity" 
//                     value={formData.capacity} 
//                     onChange={handleChange} 
//                     required 
//                 />
//             </Form.Group>

//             <Form.Group controlId="formStatus">
//                 <Form.Label>Status</Form.Label>
//                 <Form.Control 
//                     as="select" 
//                     name="status" 
//                     value={formData.status} 
//                     onChange={handleChange} 
//                 >
//                     <option>Available</option>
//                     <option>Occupied</option>
//                     <option>Reserved</option>
//                 </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="formLocation">
//                 <Form.Label>Location</Form.Label>
//                 <Form.Control 
//                     type="text" 
//                     name="location" 
//                     value={formData.location} 
//                     onChange={handleChange} 
//                     required 
//                 />
//             </Form.Group>

//             <Button variant="primary" type="submit" className="mt-3">
//                 {table ? 'Update Table' : 'Add Table'}
//             </Button>
//         </Form>
//     );
// };

// export default TableForm;
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TableForm = ({ onSubmit, table }) => {
    const [tableNumber, setTableNumber] = useState(table ? table.tableNumber : '');
    const [capacity, setCapacity] = useState(table ? table.capacity : '');
    const [status, setStatus] = useState(table ? table.status : 'Available');
    const [location, setLocation] = useState(table ? table.location : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        const tableData = { tableNumber, capacity, status, location };
        onSubmit(tableData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTableNumber">
                <Form.Label>Table Number</Form.Label>
                <Form.Control 
                    type="text" 
                    value={tableNumber} 
                    onChange={(e) => setTableNumber(e.target.value)} 
                />
            </Form.Group>

            <Form.Group controlId="formCapacity" className="mt-3">
                <Form.Label>Capacity</Form.Label>
                <Form.Control 
                    type="number" 
                    value={capacity} 
                    onChange={(e) => setCapacity(e.target.value)} 
                />
            </Form.Group>

            <Form.Group controlId="formStatus" className="mt-3">
                <Form.Label>Status</Form.Label>
                <Form.Control 
                    as="select" 
                    value={status} 
                    onChange={(e) => setStatus(e.target.value)} 
                >
                    <option value="Available">Available</option>
                    <option value="Occupied">Occupied</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formLocation" className="mt-3">
                <Form.Label>Location</Form.Label>
                <Form.Control 
                    type="text" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)} 
                />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
                {table ? 'Update Table' : 'Add Table'}
            </Button>
        </Form>
    );
};

export default TableForm;

