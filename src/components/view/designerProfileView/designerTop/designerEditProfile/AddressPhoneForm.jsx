import React from "react";
import { Input, Form } from "antd";

const AddressPhoneForm = () => {
  return (
    <div className="addressPhoneForm">
      <Form.Item
        name={["addressPhone", "street"]}
        className="addressPhoneFormItem"
        label="Street"
        rules={[{ required: true }]}
      >
        <Input allowClear placeholder="Street" />
      </Form.Item>
      <Form.Item
        name={["addressPhone", "unit"]}
        className="addressPhoneFormItem"
        label="Unit"
        rules={[{ required: false }]}
      >
        <Input allowClear placeholder="Unit" />
      </Form.Item>
      <Form.Item
        name={["addressPhone", "city"]}
        className="addressPhoneFormItem"
        label="City"
        rules={[{ required: true }]}
      >
        <Input allowClear placeholder="City" />
      </Form.Item>
      <Form.Item
        name={["addressPhone", "province"]}
        className="addressPhoneFormItem"
        label="Province"
        rules={[{ required: true }]}
      >
        <Input allowClear placeholder="Province" />
      </Form.Item>
      <Form.Item
        name={["addressPhone", "postalCode"]}
        className="addressPhoneFormItem"
        label="Postal Code"
        rules={[{ required: false }]}
      >
        <Input allowClear placeholder="Postal Code" />
      </Form.Item>
      <Form.Item
        name={["addressPhone", "phone"]}
        className="addressPhoneFormItem"
        label="Phone"
        rules={[{ required: false }]}
      >
        <Input allowClear placeholder="Phone Number" />
      </Form.Item>
    </div>
  );
};

export default AddressPhoneForm;
