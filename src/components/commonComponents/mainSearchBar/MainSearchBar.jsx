import React, { useEffect, useState } from "react";
import { Input, Select, Form } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import LocationInput from "../LocationInput";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { reverseGeocode } from "../../../helpers/geocode";
import { useHistory } from "react-router-dom";

export default function MainSearchBar() {
  const [designerType, setDesignerType] = useState("");
  const [address, setAddress] = useState("");
  const [form] = Form.useForm();
  const designerTypes = ["Hair Designer", "Nail Artist", "MakeUp Artist"];
  const desktopWidth = 1024;

  var screenWidth = window.innerWidth;
  var heightToShowSearchBarOnNav = null;

  const setSelectedType = (value) => {
    setDesignerType(value);
  };

  //#region SearchBar related functions
  // calculate and set height to show search bar on nav bar
  useEffect(() => {
    heightToShowSearchBarOnNav =
      (window.pageYOffset +
        document.getElementById("searchBarForm").clientHeight) *
      -1;
  }, []);

  // give css when search bar sticks on nav bar
  const stickSearchBarOnNavBar = () => {
    var searchBarHeight = document.getElementById("mainSearchBar").clientHeight;
    var navBarHeight = document.getElementById("header").clientHeight;
    var searchBarMarginOnNavBar = (navBarHeight - searchBarHeight) / 2 + "px";

    document.getElementById("searchBarForm").style.position = "fixed";
    document.getElementById("searchBarForm").style.zIndex = 2;
    document.getElementById(
      "searchBarForm"
    ).style.top = searchBarMarginOnNavBar;
    document.getElementById("mainSearchBar").style.textAlign = "center";
    document.getElementById("mainSearchBar").style.marginTop = 0;
  };

  // give css when search bar is taken off from nav bar
  const takeSearchBarOffFromNavBar = () => {
    document.getElementById("searchBarForm").style.position = "unset";
    document.getElementById("searchBarForm").style.zIndex = "unset";
    document.getElementById("searchBarForm").style.top = "unset";
    document.getElementById("mainSearchBar").style.textAlign = "unset";
    if (screenWidth < desktopWidth)
      document.getElementById("mainSearchBar").style.marginTop = "30%";
    else document.getElementById("mainSearchBar").style.marginTop = "15%";
  };

  useScrollPosition(({ prevPos, currPos }) => {
    console.log(` ${currPos.y} : ${heightToShowSearchBarOnNav}`);
    if (currPos.y < heightToShowSearchBarOnNav) {
      stickSearchBarOnNavBar();
    } else {
      takeSearchBarOffFromNavBar();
    }
  });
  //#endregion

  //#region Location related functions
  useEffect(() => {
    // TODO: is setFieldsValue working as intended?
    form.setFieldsValue({
      addressInput: "",
    });
  });

  const clearAddress = () => {
    form.setFieldsValue({
      addressInput: "",
    });
  };

  const handleAddressChange = (address) => {
    setAddress(address);
  };

  const handleAddressSelect = (address, placeID) => {
    handleAddressChange(address);
  };

  const getGeocodeByAddress = (address) => {
    geocodeByAddress(address)
      .then(async (results) => {
        return getLatLng(results[0]);
      })
      .then((latLng) => {
        return latLng;
      })
      .catch((error) => {
        console.error("Error", error);
        return null;
      });
  };

  const history = useHistory();

  const onSelected = (e) => {
    console.log(e.target.value + " selected");
    setDesignerType(e.target.value);
  };

  const handleSearch = (location) => {
    // if (document.getElementById("logo").style.display === "none") {
    //   show("logo");
    //   show("menuBtn");
    // }
    const route = `/designer_list?type=${designerType}${
      location ? `&location=${location}` : ""
    }`;
    console.log(route);
    window.scrollTo(0, 0);
    history.push(route);
  };

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        reverseGeocode(
          position.coords.latitude,
          position.coords.longitude
        ).then((address) => {
          if (address) {
            setAddress(address);
          } else {
            // TODO: Handle failure (ie. failure popover)
          }
        });
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };
  //#endregion

  return (
    <div id="mainSearchBar">
      <Input.Group compact>
        <Select
          onChange={setSelectedType}
          placeholder="Choose Designer Type"
          suffixIcon={<CaretDownOutlined />}
        >
          {designerTypes.map((type, inx) => {
            return (
              <Select.Option key={inx} value={type}>
                {type}
              </Select.Option>
            );
          })}
        </Select>
        <Form form={form}>
          <Form.Item
            name="addressInput"
            initialValue=""
            rules={[{ required: true }]}
          >
            <LocationInput
              address={address}
              clearAddress={clearAddress}
              handleAddressChange={handleAddressChange}
              handleAddressSelect={handleAddressSelect}
              handleSearch={handleSearch}
              handleGeolocation={handleGeolocation}
            />
          </Form.Item>
        </Form>
      </Input.Group>
    </div>
  );
}
