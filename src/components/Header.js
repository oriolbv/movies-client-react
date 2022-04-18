import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Header = ({message}) => (
    <div className="header-content">
        <div className="header-title-text" >{message}</div>
        <input type="button" value="Añadir Video" className="header-button-add"/>
    </div>
)

Header.propTypes = {
    message: PropTypes.string.isRequired 
}

export default Header;