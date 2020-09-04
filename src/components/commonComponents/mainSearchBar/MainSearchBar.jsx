import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default function MainSearchBar() {
  var heightToShowSearchBarOnNav = null;

  useEffect(() => {
    heightToShowSearchBarOnNav =
      (window.pageYOffset +
        document.getElementById("searchBarForm").clientHeight) *
      -1;
  });

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
    var searchBarHeight = document.getElementById("mobileSearchBar")
      .clientHeight;
    var navBarHeight = document.getElementById("header").clientHeight;
    var searchBarMarginOnNavBar = (navBarHeight - searchBarHeight) / 2 + "px";

    document.getElementById("searchBarForm").style.position = "fixed";
    document.getElementById("searchBarForm").style.zIndex = 2;
    document.getElementById(
      "searchBarForm"
    ).style.top = searchBarMarginOnNavBar;
    document.getElementById("searchBar").style.marginTop = 0;
  };

  const takeSearchBarOffFromNavBar = () => {
    document.getElementById("searchBarForm").style.position = "unset";
    document.getElementById("searchBarForm").style.zIndex = "unset";
    document.getElementById("searchBarForm").style.top = "unset";
    document.getElementById("mobileSearchBar").style.marginTop = "100px";
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
      <Input
        size="large"
        placeholder="Your location" // TODO: Extract string to string file
        suffix={<SearchOutlined />}
        onClick={showModal}
      />
    </div>
  );
}
