import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h3>Admin Dashboard</h3>
        <ul>
          <li><Link to='/admin/dashboard'>Dashboard</Link></li>
          <li><Link to='/admin/user'>Users</Link></li>
          <li><Link to='/admin/edit'>Edit</Link></li>
          <li><Link to="/Login">Logout</Link></li>
        </ul>
      </div>
      <div className="main-content">
        {/* Main content goes here */}
      </div>
    </div>
  );
};

export default AdminDashboard;