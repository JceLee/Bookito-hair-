import React, {useState, useEffect} from "react";
import {Modal, Form, Radio} from "antd";
import LocationInput from "../LocationInput";
import {geocodeByAddress, getLatLng} from "react-places-autocomplete";
import {reverseGeocode} from "../../../helpers/geocode";
import {useHistory} from "react-router-dom";
import {designerTypes} from "../../../constants/designerTypes";

export default function DesignerTypeModal(props) {
  const {visible, onCancel, showNavBarElements} = props;
  const [designerType, setDesignerType] = useState("");
  const [address, setAddress] = useState("");
  const [form] = Form.useForm();

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
    setDesignerType(e.target.value);
  };

  const handleSearch = (location) => {
    if (document.getElementById("logo").style.display === "none") {
      showNavBarElements("logo");
      showNavBarElements("menuBtn");
    }
    const route = `/designer_list?type=${designerType}${
      location ? `&location=${location}` : ""
    }`;
    window.scrollTo(0, 0);
    history.push(route);
    onCancel();
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

  return (
    <Modal
      // title=" "
      onCancel={onCancel}
      visible={visible}
      footer={null}
      width="100vw"
      bodyStyle={{height: "100vh"}}
      className="mobileSearchBarModal"
    >
      <div id="designerTypeBtnContainerInMobileSearchBar">
        <div id="designerTypeTextInMobileSearchBar">
          1. Choose designer type
        </div>
        <Radio.Group
          size="large"
          buttonStyle="outlined"
          options={Object.values(designerTypes).filter(type => type !== "client" && type !== "newClient")}
          onChange={onSelected}
          optionType="button"
        />
      </div>
      <hr/>
      <div id="locationInputContainerInMobileSearchBar">
        <div id="locationTextInMobileSearchBar">2. Find your location</div>
        <Form form={form}>
          <Form.Item
            name="addressInput"
            initialValue=""
            rules={[{required: true}]}
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
      </div>
    </Modal>
  );
}
