import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import DesignerTypeModal from "./DesignerTypeModal";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default function MobileSearchBar() {
  const [heightToShowSearchBarOnNav, setHeightToShowSearchBarOnNav] = useState(0);

  useEffect(() => {
    setHeightToShowSearchBarOnNav(
      (window.pageYOffset + document.getElementById("searchBarForm").clientHeight) * -1
    );
  }, []);

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const hide = (element) => {
    document.getElementById(element).style.display = "none";
  };

  const show = (element) => {
    document.getElementById(element).style.display = "flex";
  };

  const stickSearchBarOnNavBar = () => {
    var searchBarHeight = document.getElementById("mobileSearchBar").clientHeight;
    var navBarHeight = document.getElementById("header").clientHeight;
    var searchBarMarginOnNavBar = (navBarHeight - searchBarHeight) / 2 + "px";

    document.getElementById("searchBarForm").classList.add("stickedSearchBarOnNav");
    document.getElementById("searchBarForm").style.top = searchBarMarginOnNavBar;

    document.getElementById("mobileSearchBar").style.marginTop = 0;
    document.getElementById("mainHeader").style.display = "none";
  };

  const takeSearchBarOffFromNavBar = () => {
    document.getElementById("searchBarForm").classList.remove("stickedSearchBarOnNav");
    document.getElementById("searchBarForm").style.top = "unset";
    document.getElementById("mobileSearchBar").style.marginTop = "100px";
    document.getElementById("mainHeader").style.display = "unset";
  };

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < heightToShowSearchBarOnNav) {
      hide("logo");
      hide("menuBtn");
      stickSearchBarOnNavBar();
    } else {
      show("logo");
      show("menuBtn");
      takeSearchBarOffFromNavBar();
    }
  });

  return (
    <div id="mobileSearchBar">
      <div id="mainHeader">Find your favourite beautician</div>
      <Input
        size="large"
        placeholder="Find your Beauticians" // TODO: Extract string to string file
        suffix={<SearchOutlined />}
        onClick={showModal}
      />

      <DesignerTypeModal visible={visible} onCancel={handleCancel} showNavBarElements={show} />
    </div>
  );
}
