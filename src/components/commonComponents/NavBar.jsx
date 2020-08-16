import React from "react";
import { Menu, Dropdown, Button, Typography } from "antd";
import { Link } from "react-router-dom";
import Google from '../view/authView/Google';

const { Title } = Typography;

export default function Navbar() {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to='/designer_schedule'>Schedule (Designer)</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link to='/client_schedule'>Schedule (Client)</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link to='/designer_profile'>Profile (Designer)</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link to='/client_profile'>Profile (Client)</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className='logo'>
        <Link to='/'>
          <Title level={4}>LookUp</Title>
        </Link>
      </div>
      <Dropdown className='profile' overlay={menu} placement='bottomRight'>
        <Button shape='round'>Profile</Button>
      </Dropdown>
        <Google />
    </>
  );
}
