
      /*With  API */
// import React, { useState, useEffect } from 'react';
// import { Table, Button, Modal, Form } from 'react-bootstrap';
// import axios from 'axios';

// const ManageTables = () => {
//     const [tables, setTables] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [currentTable, setCurrentTable] = useState(null);

//     // Fetch table data from the database
//     useEffect(() => {
//         axios.get('/api/tables')
//             .then(response => {
//                 setTables(response.data);
//             })
//             .catch(error => {
//                 console.error("There was an error fetching the table data!", error);
//             });
//     }, []);

//     const handleAddTable = () => {
//         setCurrentTable(null);
//         setShowModal(true);
//     };

//     const handleEditTable = (table) => {
//         setCurrentTable(table);
//         setShowModal(true);
//     };

//     const handleDeleteTable = (id) => {
//         axios.delete(`/api/tables/${id}`)
//             .then(() => {
//                 setTables(tables.filter(table => table.id !== id));
//             })
//             .catch(error => {
//                 console.error("There was an error deleting the table!", error);
//             });
//     };

//     const handleFormSubmit = (tableData) => {
//         if (currentTable) {
//             axios.put(`/api/tables/${currentTable.id}`, tableData)
//                 .then(() => {
//                     setTables(tables.map(table =>
//                         table.id === currentTable.id ? tableData : table
//                     ));
//                     setShowModal(false);
//                 })
//                 .catch(error => {
//                     console.error("There was an error updating the table data!", error);
//                 });
//         } else {
//             axios.post('/api/tables', tableData)
//                 .then(response => {
//                     setTables([...tables, { ...response.data, id: tables.length + 1 }]);
//                     setShowModal(false);
//                 })
//                 .catch(error => {
//                     console.error("There was an error adding the table data!", error);
//                 });
//         }
//     };

//     return (
//         <div>
//             <h2>Manage Tables</h2>
//             <Button variant="primary" onClick={handleAddTable}>Add Table</Button>
            
//             <Table striped bordered hover className="mt-4">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Table Number</th>
//                         <th>Capacity</th>
//                         <th>Status</th>
//                         <th>Location</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tables.map(table => (
//                         <tr key={table.id}>
//                             <td>{table.id}</td>
//                             <td>{table.tableNumber}</td>
//                             <td>{table.capacity}</td>
//                             <td>{table.status}</td>
//                             <td>{table.location}</td>
//                             <td>
//                                 <Button variant="warning" onClick={() => handleEditTable(table)}>Edit</Button>{' '}
//                                 <Button variant="danger" onClick={() => handleDeleteTable(table.id)}>Delete</Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>

//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{currentTable ? 'Edit Table' : 'Add Table'}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <TableForm onSubmit={handleFormSubmit} table={currentTable} />
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// };

// export default ManageTables;+

      //TableManagtement using Tabale 
      
// import React, { useState } from 'react';
// import { Table, Button, Modal } from 'react-bootstrap';
// import TableForm from './SubFileOfManageTabl/TableForm';
// // For now, we will use arbitrary table details. Later, you can replace this with API calls.
// const initialTables = [
//     { id: 1, tableNumber: 101, capacity: 4, status: 'Available', location: 'Hall A' },
//     { id: 2, tableNumber: 102, capacity: 6, status: 'Occupied', location: 'Hall B' },
//     // Add more table details here...
// ];

// const TableManagement = () => {
//     const [tables, setTables] = useState(initialTables);
//     const [showModal, setShowModal] = useState(false);
//     const [currentTable, setCurrentTable] = useState(null);

//     // This function handles adding a new table.
//     const handleAddTable = () => {
//         setCurrentTable(null);
//         setShowModal(true);
//     };

//     // This function handles editing an existing table.
//     const handleEditTable = (table) => {
//         setCurrentTable(table);
//         setShowModal(true);
//     };

//     // This function handles deleting a table.
//     const handleDeleteTable = (id) => {
//         setTables(tables.filter(table => table.id !== id));
//         // API call to delete table from the database
//     };

//     // This function handles form submission for adding or editing a table.
//     const handleFormSubmit = (tableData) => {
//         if (currentTable) {
//             // If editing, update the existing table data
//             setTables(tables.map(table => 
//                 table.id === currentTable.id ? tableData : table
//             ));
//             // API call to update the table details in the database
//         } else {
//             // If adding a new table, assign a new ID and add it to the list
//             setTables([...tables, { ...tableData, id: tables.length + 1 }]);
//             // API call to add new table to the database
//         }
//         setShowModal(false);
//     };

//     return (
//         <div className="container mt-5">
//             <h1>Manage Tables</h1>
//             <Button variant="primary" onClick={handleAddTable}>Add Table</Button>

//             <Table striped bordered hover className="mt-3">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Table Number</th>
//                         <th>Capacity</th>
//                         <th>Status</th>
//                         <th>Location</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tables.map(table => (
//                         <tr key={table.id}>
//                             <td>{table.id}</td>
//                             <td>{table.tableNumber}</td>
//                             <td>{table.capacity}</td>
//                             <td>{table.status}</td>
//                             <td>{table.location}</td>
//                             <td>
//                                 <Button variant="warning" onClick={() => handleEditTable(table)}>Edit</Button>{' '}
//                                 <Button variant="danger" onClick={() => handleDeleteTable(table.id)}>Delete</Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>

//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{currentTable ? 'Edit Table' : 'Add Table'}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {/* Form for adding/editing table details */}
//                     <TableForm 
//                         onSubmit={handleFormSubmit} 
//                         table={currentTable} 
//                     />
//                 </Modal.Body>
//             </Modal>
//         </div>
//     );
// };

// export default TableManagement;

import React, { useState } from 'react';
import { Button, Form, Modal, Card, Row, Col } from 'react-bootstrap';
import { FaTable, FaEdit, FaTrash } from 'react-icons/fa'; // Icons for visuals
import '../../App.css';
import './SubFileOfManageTabl/TableManagement.css';

const TableManagement = () => {
    // State for managing tables
    const [tables, setTables] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [currentTable, setCurrentTable] = useState(null);
    const [formData, setFormData] = useState({ tableNumber: '', capacity: '', status: '', location: '' });

    // Handle form field changes
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Add Table button click
    const handleAddTable = () => {
        setCurrentTable(null); // Reset form for adding a new table
        setFormData({ tableNumber: '', capacity: '', status: '', location: '' });
        setShowForm(true);
    };

    // Handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (currentTable) {
            // Update existing table
            setTables(tables.map(table => table.id === currentTable.id ? { ...formData, id: currentTable.id } : table));
        } else {
            // Add new table
            setTables([...tables, { ...formData, id: tables.length + 1 }]);
        }
        setShowForm(false);
    };

    // Handle Edit Table
    const handleEditTable = (table) => {
        setCurrentTable(table);
        setFormData(table);
        setShowForm(true);
    };

    // Handle Delete Table
    const handleDeleteTable = (id) => {
        setTables(tables.filter(table => table.id !== id));
    };

    return (
        <div className="container mt-5">
            <h1>Manage Tables</h1>
            <div className="tab-content mb-5"> 

            <Button variant="primary"  onClick={handleAddTable}>
                <FaTable /> Add Table
            </Button>
            </div>

            {/* Form for adding/editing tables */}
            <Modal show={showForm} onHide={() => setShowForm(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{currentTable ? 'Edit Table' : 'Add Table'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="formTableNumber">
                            <Form.Label>Table Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="tableNumber"
                                value={formData.tableNumber}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formCapacity" className="mt-3">
                            <Form.Label>Capacity</Form.Label>
                            <Form.Control
                                type="number"
                                name="capacity"
                                value={formData.capacity}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formStatus" className="mt-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                as="select" 
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                                required
                            >
                            <option value="Available">Available</option>
                            <option value="Occupied">Occupied</option>
                        </Form.Control>
                            </Form.Group>
                        <Form.Group controlId="formLocation" className="mt-3">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="success" type="submit" className="mt-4">
                            {currentTable ? 'Update Table' : 'Add Table'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Table Section */}
            <div className='tab-content'>
            <Row className=" mt-5">
                {tables.map(table => (
                    <Col key={table.id} sm={4} className="mb-4 " >
                        <Card className="text-center bgOfTable">
                            <Card.Body>
                                <Card.Title className="mt-2 cardTitle">Table - {table.tableNumber}</Card.Title>
                                <Card.Text className='fs-4  cardText'>Capacity: {table.capacity}</Card.Text>
                                <Card.Text className='fs-4 cardText'>Status: {table.status}</Card.Text>
                                <Card.Text className='fs-4 cardText'>Location: {table.location}</Card.Text>
                                <Button variant="warning" onClick={() => handleEditTable(table)} className="me-2">
                                    <FaEdit /> Edit
                                </Button>
                                <Button variant="danger" onClick={() => handleDeleteTable(table.id)}>
                                    <FaTrash /> Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            </div>
        </div>
    );
};

export default TableManagement;

