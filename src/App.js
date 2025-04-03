// App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/AdminPanel/Sidebar';
// import Dashboard from './components/AdminPanel/Dashboard';
// import ManageMenu from './components/AdminPanel/ManageMenu';
// import ManageOrders from './components/AdminPanel/ManageOrders';
// import ManageReseration from './components/AdminPanel/ManageReservation';
// import ManageSales from './components/AdminPanel/ManageSales';
// import ManageStaff from './components/AdminPanel/ManageStaff';
// import CustomerManagment from "./components/AdminPanel/CustomerManagement";
// import InventoryManagement from './components/AdminPanel/InventoryManagement';
// import ReportsAnalytics from './components/AdminPanel/ReportsAnalytics';
// import Settings from './components/AdminPanel/Settings';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/*Admin Pannel*/ }
//         <Sidebar />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/manage-menu" element={<ManageMenu />} />
//             <Route path="/manage-orders" element={<ManageOrders />} />
//             <Route path="/manage-reservations" element={<ManageReseration/>}/>
//             <Route path="/manage-sales" element={<ManageSales />} />
//             <Route path="/manage-staff" element={<ManageStaff />} />
//             <Route path='/customer-management' element={<CustomerManagment/>}/>
//             <Route path="/inventory-management" element={<InventoryManagement />} />
//             <Route path="/reports-analytics" element={<ReportsAnalytics />} />
//             <Route path="/settings" element={<Settings />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Sidebar from './components/AdminPanel/Sidebar';
import Dashboard from './components/AdminPanel/Dashboard';
import ManageMenu from './components/AdminPanel/ManageMenu';
import ManageOrders from './components/AdminPanel/ManageOrders';
import ManageReseration from './components/AdminPanel/ManageReservation';
import ManageSales from './components/AdminPanel/ManageSales';
import ManageStaff from './components/AdminPanel/ManageStaff';
import CustomerManagment from "./components/AdminPanel/CustomerManagement";
import TableManagement from './components/AdminPanel/TableManagement';
import Logout from './components/AdminPanel/Logout';
import Settings from './components/AdminPanel/Settings';
import Authentication from './components/Authentication/LoginLogout';
import AvailableTable from './components/AdminPanel/SubFileMangaeReser/AvailableTable';
import OrderReview from './components/AdminPanel/SubFileMangaeReser/OrderReview';
import './App.css';

function Layout() {
  return (
    <>
      <Sidebar />
      <div className="content">
        <Outlet style={{backgroundColor:'red'}} />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        {/*Admin Pannel*/}
        <Routes>
          {/* <Route path="/" element={<Authentication />} /> */}
          <Route path='/' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/manage-menu" element={<ManageMenu />} />
            <Route path="/manage-orders" element={<ManageOrders />} />
            <Route path="/manage-reservations" element={<ManageReseration />} />
            <Route path="/manage-sales" element={<ManageSales />} />
            <Route path="/manage-staff" element={<ManageStaff />} />
            <Route path="/customer-management" element={<CustomerManagment />} />
            <Route path="/table-management" element={<TableManagement />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
           <Route path='/available-tables' element={<AvailableTable/>}/>
           <Route path='/order-review' element={<OrderReview/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
