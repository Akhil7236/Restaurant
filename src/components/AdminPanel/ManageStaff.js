

// ManageStaff.js
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import StaffForm from './SubFileOfMangeStaff/StaffForm';
import StaffList from './SubFileOfMangeStaff/StaffList';
import Payroll from './SubFileOfMangeStaff/Payroll';
import AssignRoleModal from './SubFileOfMangeStaff/AssignRoleModal';  // Import the AssignRoleModal component

const ManageStaff = () => {
    const [staffList, setStaffList] = useState([
        { id: 1, name: 'John Doe', role: 'Chef', salary: 30000 },
        { id: 2, name: 'Jane Smith', role: 'Waiter', salary: 20000 },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [showPayrollModal, setShowPayrollModal] = useState(false);
    const [showRoleModal, setShowRoleModal] = useState(false); // Add state for the role modal
    const [currentStaff, setCurrentStaff] = useState(null);

    const handleAddStaff = () => {
        setCurrentStaff(null);
        setShowModal(true);
    };

    const handleEditStaff = (staff) => {
        setCurrentStaff(staff);
        setShowModal(true);
    };

     const handleDeleteStaff = (id) => {
         setStaffList(staffList.filter(staff => staff.id !== id));
     };

    // const handleDeleteStaff = (id) => {
    //     const updatedStaffList = staffList
    //         .filter(staff => staff.id !== id)  // Filter out the deleted staff
    //         .map((staff, index) => ({ ...staff, id: index + 1 })); // Reassign IDs
    
    //     setStaffList(updatedStaffList);
    // };

    const handleAssignRole = (staff) => {
        setCurrentStaff(staff);
        setShowRoleModal(true); // Show the role assignment modal
    };

    const handleSaveRole = (staff, role) => {
        setStaffList(staffList.map(s =>
            s.id === staff.id ? { ...s, role } : s
        ));
        setShowRoleModal(false);
    };

    const handleUpdateSalary = (id, newSalary) => {
        setStaffList(staffList.map(staff => 
            staff.id === id ? { ...staff, salary: newSalary } : staff
        ));
        setShowPayrollModal(false);
    };
        // Define the function to show the payroll modal
        const handleShowPayrollModal = (staff) => {
          setCurrentStaff(staff);
          setShowPayrollModal(true);
      };
  

    const handleFormSubmit = (staffData) => {
        if (currentStaff) {
            setStaffList(staffList.map(staff => 
                staff.id === currentStaff.id ? staffData : staff
            ));
        } else {
            setStaffList([...staffList, { ...staffData, id: staffList.length + 1 }]);
        }
        setShowModal(false);
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Manage Staff</h1>
            <div className="tab-content">
            <Button variant="primary" onClick={handleAddStaff}>Add Staff</Button>
            </div>
            
            <div className="tab-content">
            <StaffList
                staffList={staffList} 
                onEdit={handleEditStaff} 
                onDelete={handleDeleteStaff} 
                onAssignRole={handleAssignRole}
                onShowPayroll={handleShowPayrollModal}  // Pass the handleAssignRole function
            />
    </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentStaff ? 'Edit Staff' : 'Add Staff'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <StaffForm onSubmit={handleFormSubmit} staff={currentStaff} />
                </Modal.Body>
            </Modal>

            <Modal show={showPayrollModal} onHide={() => setShowPayrollModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Payroll</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Payroll staff={currentStaff} onUpdateSalary={handleUpdateSalary} />
                </Modal.Body>
            </Modal>

            {/* Add the AssignRoleModal for role assignment */}
            <AssignRoleModal 
                show={showRoleModal} 
                handleClose={() => setShowRoleModal(false)} 
                staff={currentStaff} 
                onSave={handleSaveRole} 
            />
        </div>
    );
};

export default ManageStaff;

