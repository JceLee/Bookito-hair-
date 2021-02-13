import React, { useEffect, useState } from "react";
import { Input, Select, Form } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import LocationInput from "../LocationInput";
import { reverseGeocode } from "../../../helpers/geocode";
import { useHistory } from "react-router-dom";
import { designerTypes } from "../../../constants/designerTypes";

export default function MainSearchBar(props) {
  const { defaultDesignerType, defaultAddress } = props;

  const [designerType, setDesignerType] = useState(defaultDesignerType ? defaultDesignerType : "");
  const [address, setAddress] = useState(defaultAddress ? defaultAddress : "");
  const [form] = Form.useForm();
  const designerTypeSelect = Object.values(designerTypes).filter(
    (type) => type !== "client" && type !== "newClient"
  );

  const setSelectedType = (value) => {
    setDesignerType(value);
  };

  //#region Functions related Location
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

  const history = useHistory();

  const handleSearch = (location) => {
    const route = `/designer_list?type=${designerType}${location ? `&location=${location}` : ""}`;
    window.scrollTo(0, 0);
    history.push(route);
  };

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        reverseGeocode(position.coords.latitude, position.coords.longitude).then((address) => {
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
      {/*<div id="mainHeader">Find your favourite beautician</div>*/}
      <Input.Group compact>
        <Select
          onChange={setSelectedType}
          placeholder="Choose Designer"
          suffixIcon={<CaretDownOutlined style={{ pointerEvents: "none" }} />}
          defaultValue={defaultDesignerType}
        >
          {designerTypeSelect.map((type, inx) => {
            return (
              <Select.Option key={inx} value={type}>
                {type}
              </Select.Option>
            );
          })}
        </Select>
        <Form form={form}>
          <Form.Item name="addressInput" initialValue="" rules={[{ required: true }]}>
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
