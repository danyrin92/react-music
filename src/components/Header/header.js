import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../../logo.svg";
import './header.css';

function Header() {
    return (
        <Navbar default collapseOnSelect fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <img className="App-logo" src={logo} alt='Logo' />
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    Lovely Music
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
