import React, { useState } from "react";
import { Menu, Dropdown, Button, Typography, Drawer } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const { Title } = Typography;

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menuItems = [
    { name: "Listing page", link: "/designer_list" },
    { name: "Schedule (Designer)", link: "/designer_schedule" },
    { name: "Schedule (Client)", link: "/client_schedule" },
    { name: "Profile (Designer)", link: "/designer_profile" },
    { name: "Profile (Client)", link: "/client_profile" },
  ];

  return (
    <>
      <div className="logo">
        <Link to="/">LookUp</Link>
      </div>
      {/* < tablet */}
      {/* <Dropdown className="menu" overlay={menu} placement="bottomRight"> */}
      {/* <Button shape="round">Profile</Button> */}
      {/* </Dropdown> */}
      <Button className="menu" onClick={showDrawer}>
        <MenuOutlined />
      </Button>
      <Drawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        getContainer={false}
        width="60%"
      >
        <Menu>
          {menuItems.map((item, inx) => {
            return (
              <Menu.Item key={inx} onClick={onClose}>
                <Link to={item.link}>{item.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Drawer>
    </>
  );
}
