import React, {useState, useEffect, useRef} from "react";
import { Input, Form } from "antd";
import LocationInput from "../../../../commonComponents/LocationInput";
import { geocode } from "../../../../../helpers/geocode";

export default function AddressPhoneForm(props) {
  const { form } = props;

  const [address, setAddress] = useState("");

  const clearAddress = () => {
    form.setFieldsValue({
      addressPhone: {
        address: ""
      }
    });
  };

  const handleAddressChange = (address) => {
    setAddress(address);
    if (address === "") {
      clearAddress();
    }
  };

  const handleAddressSelect = (address, placeID) => {
    handleAddressChange(address);
    geocode(address).then(latLng => {
      if (latLng) {
        form.setFieldsValue({
          addressPhone: {
            address: address,
          },
          coordinate: latLng
        });
      } else {
        // console.log("Unable to get location!");
      }
    });
  };

  return (
    <div className="addressPhoneForm">
      {/* Address */}
      <Form.Item
        name={["addressPhone", "address"]}
        label={"Address"}
        rules={[{required: true}]}
      >
        <LocationInput
          address={address}
          handleAddressChange={handleAddressChange}
          handleAddressSelect={handleAddressSelect}
          allowClear={true}
        />
      </Form.Item>
      
      {/* Phone */}
      <Form.Item
        key={"phone"}
        name={["addressPhone", "phone"]}
        className="addressPhoneFormItem"
        label={"Phone"}
        rules={[{ required: false }]}
      >
        <Input allowClear placeholder={"Phone"} />
      </Form.Item>

    </div>
  );
}
