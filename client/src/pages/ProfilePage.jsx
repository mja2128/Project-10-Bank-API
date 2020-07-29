import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.svg';

import profile from '../assets/profile.svg';
import settings from '../assets/settings.svg';
import power from '../assets/power.svg';
import transaction from '../assets/transaction.png';

const ProfilePage = () => (
    <Container>
        <Navbar>
            <Navbar.Brand href="/"><img src={logo} alt="argent bank logo" /></Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <span className="profile-name-nav">REPLACE WITH PROFILE NAME FROM STATE</span>
                <img src={profile} alt="profile icon" />
                <img className="settings-icon" src={settings} alt="settings icon" />
                <img src={power} alt="power icon" />
            </Navbar.Collapse>
        </Navbar>
        <div className="profile-content">
            <div className="profile-welcome">Welcome back</div>
            <div className="profile-welcome profile-name">REPLACE WITH PROFILE NAME FROM STATE <span style={{color: 'black'}}>!</span></div>
            <button className="edit-button">
                Edit name
            </button>
        </div>
        <img src={transaction} alt="account info" className="account" />
        <img src={transaction} alt="account info" className="account" />
        <img src={transaction} alt="account info" className="account" />
    </Container>
);

export default ProfilePage;
