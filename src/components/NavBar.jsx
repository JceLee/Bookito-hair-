import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { Link } from "react-router-dom"
import "../assets/css/NavBar.css";

export default function Navbar() {
    const menu = (
        <Menu>
            <Menu.Item>
                <Link to="/appointments">
                    Appointments
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/account">
                    Account
                </Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <div className="logo" />
            <Dropdown className="myAccount" overlay={menu} placement="bottomRight">
                <Button>Profile</Button>
            </Dropdown>
        </div>
    );
}
