import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Footer = ({message}) => (
    <div className="header-content">
        <div className="header-title-text" >{message}</div>
    </div>
)

Footer.propTypes = {
    message: PropTypes.string.isRequired 
}

export default Footer;