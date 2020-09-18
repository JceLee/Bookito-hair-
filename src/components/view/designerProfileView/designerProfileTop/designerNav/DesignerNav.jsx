import React from "react";
import DesignerNavItem from "./DesignerNavItem.jsx";

const NavItems = ["Home", "Works", "Price", "Hours", "Reviews", "Location"];

export default function DesignerNav(props) {
  const { searchBarHeight, height } = props;
  return (
    <nav>
      <ul className="designerNav">
        {NavItems.map((NavItem) => (
          <DesignerNavItem
            key={NavItem}
            searchBarHeight={searchBarHeight}
            height={height}
          >
            {NavItem}
          </DesignerNavItem>
        ))}
      </ul>
    </nav>
  );
}
