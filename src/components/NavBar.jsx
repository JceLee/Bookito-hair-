import React from "react";
import { Menu, Dropdown, Button, Typography } from "antd";
import { Link } from "react-router-dom"
import "../assets/css/NavBar.css";

const { Title } = Typography;

export default function Navbar() {
    const menu = (
        <Menu>
            <Menu.Item>
                <Link to="/appointments">
                    Appointments
                </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
                <Link to="/account">
                    Account
                </Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <div className="logo">
                <Link to="/">
                    <Title level={4}>LookUp</Title>
                </Link>
            </div>
            <div className="listing">
                <Link to="/listing">
                    <Title level={4}>Listing</Title>
                </Link>
            </div>
            <Dropdown className="profile" overlay={menu} placement="bottomRight">
                <Button shape="round">Profile</Button>
            </Dropdown>
        </>
    );
}
