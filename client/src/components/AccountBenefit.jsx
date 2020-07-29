import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
};

const defaultProps = {
    title: '',
    description: '',
};

const AccountBenefit = ({icon, title, description}) => (
    <div className="account-benefit-container">
        <img src={icon} alt="account benefit icon" className="account-benefit-icon" />
        <p className="account-benefit-title"> {title}</p>
        <p>{description}</p>
    </div>
);

AccountBenefit.propTypes = propTypes;
AccountBenefit.defaultProps = defaultProps;

export default AccountBenefit;
