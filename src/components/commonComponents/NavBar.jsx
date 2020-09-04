import React, { useState } from "react";
import { Menu, Dropdown, Button, Typography, Drawer } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined, UserOutlined, BarsOutlined } from "@ant-design/icons";
import SearchBar from "./SearchBar";
import SignUp from "../view/authView/SignUp";
import LogIn from "../view/authView/LogIn";
import { useSelector } from "react-redux";

const { Title } = Typography;

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  const signedInUser = useSelector((state) => state.signedInUser.signedInUser);

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
          return <Menu.Divider />;
        } else if (menu.name == "Log In") {
          return (
            <Menu.Item key={inx}>
              <LogIn />
            </Menu.Item>
          );
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

  const navBarController = () => {
    if (
      document.body.scrollTop > 64 ||
      document.documentElement.scrollTop > 64
    ) {
      document.querySelector(".logo").style.display = "none";
      document.querySelector(".notMobileSearchBar").style.display = "flex";
    } else {
      document.querySelector(".logo").style.display = "unset";
      document.querySelector(".notMobileSearchBar").style.display = "none";
    }
  };

  window.onscroll = function () {
    navBarController();
  };

  return (
    <>
      <div className="logo">
        <Link to="/">LookUp</Link>
      </div>
      <SearchBar />

      {/* < tablet */}
      <div className="menuBtn">
        <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
          <Button shape="round" icon={<UserOutlined />}>
            <BarsOutlined />
          </Button>
        </Dropdown>
      </div>
    </>
  );
}
