import React from 'react';

const Menu = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo-name">
                <i className="fas fa-video"></i>
                <h2>Hotflix</h2>
            </div>
            <div className="navbar-menu">
                <ul>
                    <li>React</li>
                    <li>Angular</li>
                    <li>Vue</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;