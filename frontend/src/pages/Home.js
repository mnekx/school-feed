import React from 'react';
import { Container } from 'react-bootstrap';
import Button from '@mui/material/Button';

function Home() {
  return (
    <Container>
      <h1>Welcome to the School Feeding System</h1>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
  );
}

export default Home;
