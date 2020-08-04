import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { login } from '../actions/actions';
import logo from '../assets/logo.svg';
import profile from '../assets/profile.svg';

const containerStyle = {
    backgroundImage: 'url("ferran-fusalba-rosello-WgUHuGSWPVM-unsplash.png")',
    height: '1024px',
};

const SignInPage = ({ login, history }) => {
   const [email, setEmail] = useState(null);
   const [password, setPassword] = useState(null);

   return (
        <Container fluid style={containerStyle}>
            <Navbar variant="dark">
                <Navbar.Brand href="/"><img src={logo} alt="argent bank logo"/></Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="signin" className="nav-signin-green">Sign in</Nav.Link>
                    </Nav>
                    <img src={profile} alt="profile icon"/>
                </Navbar.Collapse>
            </Navbar>
            <Card className="login-card">
                <img src={profile} alt="profile icon"/>
                <Form>
                    <Form.Group controlId="username">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" onChange={(evt) => setEmail(evt.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(evt) => setPassword(evt.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="remember-me">
                        <Form.Check type="checkbox" label="Remember me"/>
                    </Form.Group>
                    <Button variant="primary" onClick={() => {
                        login({email, password}, history);
                    }}>
                        Submit
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};

function mapState(state) {
    return { };
}

const actionCreators = {
    login: login,
};

export default withRouter(connect(mapState, actionCreators)(SignInPage));
