import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

import logo from '../assets/logo.svg';
import profile from '../assets/profile.svg';

const containerStyle = {
    backgroundImage: 'url("ferran-fusalba-rosello-WgUHuGSWPVM-unsplash.png")',
    height: '1024px',
};

const SignInPage = () => (
    <Container fluid style={containerStyle}>
        <Navbar variant="dark">
            <Navbar.Brand href="/"><img src={logo} alt="argent bank logo" /></Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link href="signin" className="nav-signin-green">Sign in</Nav.Link>
                </Nav>
                <img src={profile} alt="profile icon" />
            </Navbar.Collapse>
        </Navbar>
        <Card className="login-card">
            <img src={profile} alt="profile icon" />
            <Form action="/profile">
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Form.Group controlId="remember-me">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Card>
    </Container>
);

export default withRouter(SignInPage);
