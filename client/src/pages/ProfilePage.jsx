import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';

import { editProfile, saveProfile } from '../actions/actions';

import logo from '../assets/logo.svg';
import profile from '../assets/profile.svg';
import settings from '../assets/settings.svg';
import power from '../assets/power.svg';
import transaction from '../assets/transaction.png';

const ProfilePage = ({ isEditing, firstName, lastName, edit, save }) => {
    const [newFirstName, setFirstName] = useState(firstName);
    const [newLastName, setLastName] = useState(lastName);

    return (
        <Container>
        <Navbar>
            <Navbar.Brand href="/"><img src={logo} alt="argent bank logo"/></Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <span className="profile-name-nav">{firstName} {lastName}</span>
                <img src={profile} alt="profile icon"/>
                <img className="settings-icon" src={settings} alt="settings icon"/>
                <img src={power} alt="power icon"/>
            </Navbar.Collapse>
        </Navbar>
        <div className="profile-content">
            <div className="profile-welcome">Welcome back</div>
            {isEditing ?
                <>
                    <input type="text" placeholder={firstName} onChange={(evt) => setFirstName(evt.target.value)} />
                    <input type="text" placeholder={lastName} onChange={(evt) => setLastName(evt.target.value)} />
                </>
                :
                <div className="profile-welcome profile-name">{firstName} {lastName} <span
                    style={{color: 'black'}}>!</span></div>
            }
            {isEditing ? <>
                <button onClick={() => save({ firstName: newFirstName, lastName: newLastName })}>Save</button>
                <button onClick={() => edit(false)}>Cancel</button>
            </> : <button className="edit-button" onClick={() => edit(true)}>
                Edit name
            </button>}
        </div>
        <img src={transaction} alt="account info" className="account"/>
        <img src={transaction} alt="account info" className="account"/>
        <img src={transaction} alt="account info" className="account"/>
    </Container>
    );
};

function mapState(state) {
    const { isEditing } = state;
    const { firstName, lastName } = state.user;
    return { isEditing, firstName, lastName };
}

const actionCreators = {
    edit: editProfile,
    save: saveProfile,
};

export default connect(mapState, actionCreators)(ProfilePage);
