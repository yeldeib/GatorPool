import React, { useState } from 'react';
import { Nav, NavbarToggler, Collapse, NavItem, NavLink } from "reactstrap";
import { withRouter } from "react-router-dom";
import "./nav.css";

function Navs(props) {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <nav style={{ backgroundColor: '#92b2d4', borderColor: '#92b2d4' }} className="navbar navbar-dark justify-content-between">
            <a className="navbar-brand">GatorPool</a>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink href="" onClick={() => {
                            props.history.push("/Ridelist");
                        }}> Home </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="" onClick={() => {
                            props.history.push("/profile");
                        }}> Profile </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="" onClick={() => {
                            props.history.push("/createRide");
                        }}> Create a ride </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="" onClick={() => {
                            props.history.push("/");
                        }}> Logout </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </nav>
    );
}

export default withRouter(Navs);