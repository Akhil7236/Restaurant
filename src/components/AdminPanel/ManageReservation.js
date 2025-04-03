import React, { useState } from 'react';
import { Card, Button, Dropdown, Form, Row, Col } from 'react-bootstrap';
import './SubFileMangaeReser/ManageReservation.css';
import image2 from '../../Images/img2.jpg';
import { useNavigate } from 'react-router-dom';


const ManageReservation = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate(); 

  const categories = ['Beverages', 'Desserts', 'Main Course', 'Appetizers', 'Sides'];

  // Dummy data for demonstration
  const products = [
    { id: 1, category: 'Beverages', name: 'Tea', price: 100, unit: '1 kg' },
    { id: 2, category: 'Desserts', name: 'Pizza', price: 200, unit: '500 g' },
    { id: 3, category: 'Main Course', name: 'Allu patato', price: 150, unit: '1.5 kg' },
    { id: 4, category: 'Beverages',  name: 'chiz', price: 250, unit: '750 ml' },
    { id: 5, category: 'Beverages',  name: 'Handi', price: 100, unit: '1 kg' },
    { id: 6, category: 'Desserts',  name: 'Suggerfree', price: 200, unit: '500 g' },
    { id: 7, category: 'Main Course', name: 'Burger', price: 150, unit: '1.5 kg' },
    { id: 8, category: 'Beverages', name: 'Spring roll', price: 250, unit: '750 ml' },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm(''); // Reset search term when a new category is selected
    // API call to fetch data based on selected category
    // Example: fetchCategoryData(category);
  };

  const handleAddItem = (item) => {
    const existingItem = selectedItems.find(i => i.id === item.id);
    if (existingItem) {
      setSelectedItems(selectedItems.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (item) => {
    const existingItem = selectedItems.find(i => i.id === item.id);
    
    // Check if the item exists before proceeding
    if (existingItem) {
      if (existingItem.quantity > 1) {
        setSelectedItems(selectedItems.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        ));
      } else {
        setSelectedItems(selectedItems.filter(i => i.id !== item.id));
      }
    }
  };
   

  const totalItems = selectedItems.reduce((acc, item) => acc + item.quantity, 0);
   // Add this function to handle the navigation
   const handleNavigate = () => {
    navigate('/available-tables', { state: { selectedItems } });
  };

  return (
    <div className="container mt-0">
      <h1 className="mt-0">Manage Reservation</h1>
      <div className="tab-content mb-5"> 
      <Row className="mt-3">
        <Col>
          <Dropdown onSelect={handleCategoryChange}>
            <Dropdown.Toggle variant="success">
              {selectedCategory || 'Select Category'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {categories.map((category) => (
                <Dropdown.Item key={category} eventKey={category}>{category}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>`
      <Row className="mt-3">
        <Col md={8}>
          <Form.Control
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '70%' }}
          />
        </Col>
        <Col md={4} className="d-flex align-items-center">
          <Button variant="danger" onClick={handleNavigate}>
            {totalItems} <span> item{totalItems !== 1 && 's'} added</span>
          </Button>
        </Col>
      </Row>
      </div>
      <div className="tab-content mb-5"> 
      <Row className="mt-4">
        {products
          .filter(product => product.category === selectedCategory) // Filter by selected category
          .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())) // Filter by search term
          .map(product => (
            <Col md={3} key={product.id} className='ColoumCard'>
              <Card>
                <Card.Img variant="top" src={image2}  style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title className='CardTitleName'>{product.name}</Card.Title>
                  <p className='CardTextName'>Price: Rs. {product.price}</p>
                  <p className='CardTextName'>Unit: {product.unit}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button variant="danger" onClick={() => handleRemoveItem(product)}>-</Button>
                    <span>{selectedItems.find(i => i.id === product.id)?.quantity || 0}</span>
                    <Button variant="success" onClick={() => handleAddItem(product)}>+</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      </div> 
    </div>
  );
};

export default ManageReservation;
