import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Topbar from '../common/TopBar';
import Sidebar from '../common/SideBar';

function Dashboard() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100">
        <Topbar />
        <Container fluid>
          <Row>
            <Col md={12}>
              <h2>Dashboard Content</h2>
              {/* Add dashboard widgets or other components here */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Dashboard;
