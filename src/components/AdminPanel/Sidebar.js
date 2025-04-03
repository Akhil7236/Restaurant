// src/components/Sidebar.js
import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars, faUtensils, faPeopleRoof, faClipboardList, faChartLine, faUsers, faBoxOpen, faChartPie, faCog } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isClosed, setIsClosed] = useState(false);

  const toggleSidebar = () => {
    setIsClosed(!isClosed);
  };

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsClosed(true);
    } else {
      setIsClosed(false);
    }
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="logo_item">
          <FontAwesomeIcon icon={faBars} className="bx bx-menu" id="sidebarOpen" onClick={toggleSidebar} />
          <img src="/assests/images/logo.png" alt="" /> Restaurant
        </div>
        <div className="navbar_content">
          <img src="/assests/images/profile.jpg" alt="" className="profile" />
        </div>
      </nav>
      <nav className={`sidebar ${isClosed ? 'close' : ''}`}>
        <div className="menu_content">
          <ul className="menu_items">
            <li className="item">
              <NavLink to="/" 
                // style={({isActive}) => ({
                //   color:"#fff",
                //   backgroundColor:isActive
                //   ?"#4070f4"
                //   :"",
                // })}
               className="nav_link"
               >
                <div className="submenu_item">
                  <span className="navlink_icon">
                    <FontAwesomeIcon icon={faHome} />
                  </span>
                  <span className="navlink">Dashboard</span>
                </div>
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/manage-menu" className="nav_link">
                <div className="submenu_item">
                  <span className="navlink_icon">
                    <FontAwesomeIcon icon={faUtensils} />
                  </span>
                  <span className="navlink">Manage Menu</span>
                </div>
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/manage-orders" className="nav_link">
                <div className="submenu_item">
                  <span className="navlink_icon">
                    <FontAwesomeIcon icon={faClipboardList} />
                  </span>
                  <span className="navlink">Manage Orders</span>

                </div>
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/manage-reservations" className="nav_link">
                <div className="submenu_item">
                  <span className="navlink_icon">
                    <FontAwesomeIcon icon={faClipboardList} />
                  </span>
                  <span className="navlink">Manage Reservations</span>
                </div>
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/manage-sales" className="nav_link">
                <div className="submenu_item">
                  <span className="navlink_icon">
                    <FontAwesomeIcon icon={faChartLine} />
                  </span>
                  <span className="navlink">Manage Sales</span>
                </div>
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/manage-staff" className="nav_link">
                <div className="submenu_item">
                  <span className="navlink_icon">
                    <FontAwesomeIcon icon={faUsers} />
                  </span>
                  <span className="navlink">Manage Staff</span>
                </div>
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/customer-management" className="nav_link">
                <div className="submenu_item">
                  <span className="navlink_icon">
                    <FontAwesomeIcon icon={faPeopleRoof} />
                  </span>
                  <span className="navlink">Customer Management</span>
                </div>
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/table-management" className="nav_link">
                <div className="submenu_item">
                  <span className="navlink_icon">
                    <FontAwesomeIcon icon={faBoxOpen} />
                  </span>
                  <span className="navlink">Table Management</span>
                </div>
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/settings" className="nav_link">
                <div className="submenu_item">
                  <span className="navlink_icon">
                    <FontAwesomeIcon icon={faCog} />
                  </span>
                  <span className="navlink">Setting</span>
                </div>
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/logout" className="nav_link">
                <div className="submenu_item">
                  <span className="navlink_icon">
                    <FontAwesomeIcon icon={faChartPie} />
                  </span>
                  <span className="navlink">Lagout</span>
                </div>
              </NavLink>
            </li>
          </ul >
        </div >
      </nav >
    </>
  );
};

export default Sidebar;
