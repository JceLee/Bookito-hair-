import React, { useState } from "react";
import { Menu, Dropdown, Button, Typography, Drawer } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined, UserOutlined, BarsOutlined } from "@ant-design/icons";
import SearchBar from "./mobileSearchBar/SearchBar";

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
    { name: "Divider", link: "" },
    { name: "Log In", link: "" },
    { name: "Sign up", link: "" },
  ];

  const menu = (
    <Menu>
      {menuItems.map((menu, inx) => {
        if (menu.name == "Divider") {
          return <Menu.Divider key={inx} />;
        } else {
          return (
            <Menu.Item key={inx}>
              <Link to={menu.link}>{menu.name}</Link>
            </Menu.Item>
          );
        }
      })}
    </Menu>
  );
  return (
    <>
      <div id="logo">
        <Link to="/">LookUp</Link>
      </div>

      {/* < tablet */}
      <div id="menuBtn">
        <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
          <Button shape="round" icon={<UserOutlined />}>
            <BarsOutlined />
          </Button>
        </Dropdown>
      </div>
    </>
  );
}
