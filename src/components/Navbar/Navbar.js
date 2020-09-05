import './Navbar.css';
import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="navbar-row-layout">
                    <div className="navbar-title">
                        Humberto
                    </div>
                    <div className="navbar-buttons-container">
                        <button className="navbar-button">Button</button>
                        <button className="navbar-button">Button</button>
                        <button className="navbar-button">Button</button>
                        <button className="navbar-button">Button</button>
                    </div>
                    <button className="navbar-menu-button">Menu</button>
                </div>
            </div>
        );
    }
}

export default Navbar;