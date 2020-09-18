import React from "react";
import { Link } from "react-scroll";

const widthInMobile = 480;
const offsetHeightFactor = -2.25;

export default function DesignerNavItem(props) {
  let { searchBarHeight, height, children } = props;
  if (children === "Home") {
    height += searchBarHeight;
    if (window.innerWidth <= widthInMobile) {
      children = null;
    }
  }
  return (
    <li className="designerNavItem">
      <Link
        activeClass="active"
        to={`${children}`}
        spy={true}
        smooth={true}
        duration={500}
        offset={height * offsetHeightFactor}
      >
        {children}
      </Link>
    </li>
  );
}
