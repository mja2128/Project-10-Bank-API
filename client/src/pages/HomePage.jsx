import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

import logo from '../assets/logo.svg';
import profile from '../assets/profile.svg'
import exclamation from '../assets/exclamation.svg';
import money from '../assets/money.svg';
import security from '../assets/security.svg';
import HeroBanner from '../components/HeroBanner';
import AccountBenefit from '../components/AccountBenefit';

const LoremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus';

const HomePage = () => (
    <Container>
        <Navbar>
            <Navbar.Brand href="home"><img src={logo} alt="argent bank logo" /></Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link href="signin">Sign in</Nav.Link>
                </Nav>
                <img src={profile} alt="profile icon" />
            </Navbar.Collapse>
        </Navbar>
        <Row>
            <HeroBanner />
        </Row>
        <Row>
            <Col xs={12} md={4}>
                <AccountBenefit icon={exclamation} title="You are our #1 priority" description={LoremIpsum} />
            </Col>
            <Col xs={12} md={4}>
                <AccountBenefit icon={money} title="More savings means higher rates" description={LoremIpsum} />
            </Col>
            <Col xs={12} md={4}>
                <AccountBenefit icon={security} title="Security you can trust" description={LoremIpsum} />
            </Col>
        </Row>
        <p className="footer">Copyright 2020 Argent Bank</p>
    </Container>
);

export default HomePage;
