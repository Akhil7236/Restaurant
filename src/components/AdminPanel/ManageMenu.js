import React, { useState } from 'react';
import { Nav, Tab, Button, Form, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ManageMenu.css';

const products = [
  {
    image: 'https://i.imgur.com/T9X1jJ0.png',
    name: 'Water',
    description: 'Cold',
    price: '1000',
    qty: 1,
  },
  {
    image: 'https://i.imgur.com/92vFz3S.png',
    name: 'Water',
    description: 'Hot',
    price: '900',
    qty: 1,
  },
  {
    image: 'https://i.imgur.com/9V5fU8x.png',
    name: 'Cold Drink',
    description: 'Drink',
    price: '100',
    qty: 4,
  },
  {
    image: 'https://i.imgur.com/D7R7R8I.png',
    name: 'Wisky',
    description: 'Drink',
    price: '1000',
    qty: 1,
    seller: 'Renee I. Hansen'
  },
];

const TabsComponent = () => {
  const [activeAction, setActiveAction] = useState('add');
  const [editableProduct, setEditableProduct] = useState(null);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [newImage, setNewImage] = useState(null);

  const handleActionSelect = (action) => {
    setActiveAction(action);
  };

  const handleEditProduct = (product) => {
    setEditableProduct(product);
    setProductName(product.name);
    setProductDescription(product.description);
    setProductPrice(product.price);
    setActiveAction('edit');
  };

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const updatedProduct = {
      ...editableProduct,
      name: productName,
      description: productDescription,
      price: productPrice,
    };
    // Update product in database (assuming you have a API endpoint for this)
    console.log(updatedProduct);
    setActiveAction('add');
  };

  const handleDeleteProduct = (product) => {
    // Delete product from database (assuming you have a API endpoint for this)
    console.log(product);
    const filteredProducts = products.filter((p) => p !== product);
    // Update products state with filtered products
    console.log(filteredProducts);
  };

  const renderForm = () => (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formItemName">
            <Form.Label>Item Name</Form.Label>
            <Form.Control type="text" placeholder="Enter item name" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formItemPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Enter item price" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formItemDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={2} placeholder="Enter item description" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formItemImage">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

  );

  const renderEditableItems = () => (
    <Form onSubmit={handleUpdateProduct}>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formItemName">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formItemPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={productPrice}
              onChange={(event) => setProductPrice(event.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formItemDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={productDescription}
              onChange={(event) => setProductDescription(event.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formItemImage">
            <Form.Label>Upload New Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(event) => setNewImage(event.target.files[0])}
            />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
  const renderContent = () => {
    switch (activeAction) {
      case 'add':
        return renderForm();
      case 'edit':
        return renderEditableItems();
      default:
        return null;
    }
  };

  return (
    <div className="container mt-5">

      <h1 className="mb-4">Manage Menu</h1>
      <Tab.Container defaultActiveKey="beverages">
        <Nav variant="tabs" className="mb-3">
          <Nav.Item>
            <Nav.Link eventKey="beverages">Beverages</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="desserts">Desserts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="mainCourse">Main Course</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="appetizers">Appetizers</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="sides">Sides</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="beverages">
            <h4>Manage Beverages </h4>
            <div className="mb-3 d-flex justify-content-around">
              <Button variant="success" onClick={() => handleActionSelect('add')}>Add Product</Button>
            </div>
            {renderContent()}
          </Tab.Pane>
          <Tab.Pane eventKey="desserts">
            <h4>Manage Desserts </h4>
            <div className="mb-3 d-flex justify-content-around">
              <Button variant="success" onClick={() => handleActionSelect('add')}>Add Product</Button>
            </div>
            {renderContent()}
          </Tab.Pane>
          <Tab.Pane eventKey="mainCourse">
            <h4>Manage Main Course</h4>
            <div className="mb-3 d-flex justify-content-around">
              <Button variant="success" onClick={() => handleActionSelect('add')}>Add Product</Button>
            </div>
            {renderContent()}
          </Tab.Pane>
          <Tab.Pane eventKey="appetizers">
            <h4>Manage Appetizers</h4>
            <div className="mb-3 d-flex justify-content-around">
              <Button variant="success" onClick={() => handleActionSelect('add')}>Add Product</Button>
            </div>
            {renderContent()}
          </Tab.Pane>
          <Tab.Pane eventKey="sides">
            <h4>Manage Sides</h4>
            <div className="mb-3 d-flex justify-content-around">
              <Button variant="success" onClick={() => handleActionSelect('add')}>Add Product</Button>
            </div>
            {renderContent()}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

      {/* ******Items Details****** */}
      <div className="container itemsDetailsBg">
        <h1 className="text-center">Items Details</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                  <img src={product.image} alt={product.name} className="product-image" />
                </td>
                <td>
                  <div>{product.name}</div>
                </td>
                <td>{product.description}</td>
                <td>Rs.{product.price}</td>
                <td>{product.qty}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleEditProduct(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteProduct(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabsComponent;