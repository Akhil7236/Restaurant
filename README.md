https://themewagon.com/theme-category/admin-dashboard/page/2/

https://themewagon.com/theme-category/admin-dashboard/

//Dependencis(Package or Library) for Routing and Designing

  npm install bootstrap react-bootstrap react-router-dom
            or
  npm install react-router-dom
  npm install bootstrap
  npm install react-bootstrap bootstrap
  
// Date  
npm install date-fns


//FontAwesome Icon Dependency( Library and package )

    npm install --save @fortawesome/react-fontawesome
    npm install --save @fortawesome/free-solid-svg-icons
    npm install --save @fortawesome/fontawesome-svg-core
    npm install boxicons

//Font Dependenci ( Library and package )
    npm install @fontsource/open-sans
everything is good except it printing at top React App in invoice  and date formate is month/day/year in ManageOrder.js and Invoice.js but i want date formate DD/MM/YYYY

//Architechture of Component

client-side/
  ├── node_modules/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   ├── Sidebar.js
  │   │   ├── Dashboard.js
  │   │   ├── Sidebar.css
  │   │   ├── Dashboard.css
  |   |   |-- so on....
  │   ├── App.js
  │   ├── index.js
  │   ├── index.css
  ├── .gitignore
  ├── package.json
  ├── README.md

now i want when user click on <Button variant="warning" className="me-2">
                    <FaEdit /> Continue
                  </Button> then navigate to other page and render the details of product selectedItems and render the tables details for Order Review and there is button for Proced to pay and Pay Later and send invoice button to  send  invoice linke to gust mobile number





//Admin Panel Sections

    Dashboard

        Overview of key metrics (daily sales, reservations, orders, etc.)
        Quick access to important functions

    Manage Menu

        Add, edit, delete menu items
        Categorize items (Appetizers, Main Courses, Desserts, Beverages)
        Update prices, descriptions, and availability
        Upload and manage images for menu items

    Manage Orders

        View current and past orders
        Update order status (pending, in-progress, completed)
        Handle online order details
        Print receipts and invoices

    Manage Reservations

        View upcoming reservations
        Confirm or cancel reservations
        Assign tables to reservations
        View reservation history

    Manage Sales

        View sales reports (daily, weekly, monthly)
        Analyze sales data and trends
        Export sales reports for accounting purposes
        Apply and manage discounts and promotions

    Manage Staff

        Add, edit, delete staff members
        Assign roles and permissions
        View staff schedules and attendance
        Handle payroll details

    Customer Management

        View customer information and order history
        Manage customer feedback and reviews
        Handle loyalty programs and reward points

    Inventory Management

        Track inventory levels of ingredients and supplies
        Set reorder thresholds and generate purchase orders
        Manage supplier details

    Reports and Analytics

        Generate detailed reports on sales, reservations, and inventory
        Analyze customer behavior and preferences
        Monitor website and app performance

    Settings

        Configure restaurant details (name, address, contact info)
        Set business hours
        Manage payment methods and tax settings
        Configure notification settings (email, SMS)

    LogOut
        Logout 




<!-- import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Authentication from './components/Authentication'; // Import Authentication component
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ManageMenu from './components/ManageMenu';
import ManageOrders from './components/ManageOrders';
import ManageReseration from './components/ManageReservation';
import ManageSales from './components/ManageSales';
import ManageStaff from './components/ManageStaff';
import CustomerManagment from "./components/CustomerManagement";
import InventoryManagement from './components/InventoryManagement';
import ReportsAnalytics from './components/ReportsAnalytics';
import Settings from './components/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Authentication />} /> {/* Add route for login */}
          <Route path="/" element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path="/manage-menu" element={<ManageMenu />} />
            <Route path="/manage-orders" element={<ManageOrders />} />
            <Route path="/manage-reservations" element={<ManageReseration/>}/>
            <Route path="/manage-sales" element={<ManageSales />} />
            <Route path="/manage-staff" element={<ManageStaff />} />
            <Route path='/customer-management' element={<CustomerManagment/>}/>
            <Route path="/inventory-management" element={<InventoryManagement />} />
            <Route path="/reports-analytics" element={<ReportsAnalytics />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App; -->
