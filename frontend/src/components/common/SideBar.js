import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './common.css'

function Sidebar() {
  return (
    <div className="bg-light vh-100" style={{ width: '250px' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Link to="/dashboard" className="text-decoration-none">Dashboard</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/users" className="text-decoration-none">Users</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/schools" className="text-decoration-none">Schools</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/challenges" className="text-decoration-none">Challenges</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/reports" className="text-decoration-none">Reports</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/settings" className="text-decoration-none">Settings</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Sidebar;
