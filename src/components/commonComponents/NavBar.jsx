import React from "react";
import {Menu, Dropdown, Button, Typography, Drawer} from "antd";
import {Link} from "react-router-dom";
import {UserOutlined, BarsOutlined} from "@ant-design/icons";
import SignInModal from "../view/authView/SignInModal";
import {useSelector} from "react-redux";
import SignOut from "../view/authView/SignOut";
import {designerTypes} from "../../constants/designerTypes"
export default function Navbar() {
  const signedInUser = useSelector((state) => state.currentUser.currentUser);

  const menuItems =
    signedInUser !== null
      ? [
        {name: "Schedule (Designer)", link: "/designer_schedule"},
        {name: "Schedule (Client)", link: "/client_schedule"},
        {name: "Profile (Designer)", link: `/designer_profile?uid=${signedInUser.uid}`},
        {name: "Profile (Client)", link: "/client_profile"},
        {name: "Divider", link: ""},
        {name: "Message", link: "/messenger"},
        {name: "Log In", link: ""},
      ]
      : [
        // { name: "Become a designer", link: "/becomeDesigner" },
        {name: "Log In", link: ""},
      ];

  const menuItems2 = signedInUser === null ? [
    {name: "Log In", link: ""},
  ] : signedInUser.accountType === designerTypes.newClient || signedInUser.accountType ===designerTypes.client ? [
    {name: "Schedule (Client)", link: "/client_schedule"},
    {name: "Profile (Client)", link: "/client_profile"},
    {name: "Divider", link: ""},
    {name: "Message", link: "/messenger"},
    {name: "Log In", link: ""},
  ] : [
    {name: "Schedule (Designer)", link: "/designer_schedule"},
    {name: "Profile (Designer)", link: `/designer_profile?uid=${signedInUser.uid}`},
    {name: "Divider", link: ""},
    {name: "Message", link: "/messenger"},
    {name: "Log In", link: ""},
  ]

  const menu = (
    <Menu>
      {menuItems2.map((menu, inx) => {
        if (menu.name == "Divider") {
          return <Menu.Divider key={inx}/>;
        } else if (menu.name == "Log In") {
          return (
            <Menu.Item key={inx}><SignOut/></Menu.Item>
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
  return (
    <>
      <div id="logo">
        <Link to="/">Bookito</Link>
      </div>
      <div id="menuBtn">
        <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
          {signedInUser === null ? <SignInModal/> :
            <Button shape="round" icon={<UserOutlined/>}>
              <BarsOutlined/>
            </Button>}
        </Dropdown>
      </div>


    </>
  );
}
