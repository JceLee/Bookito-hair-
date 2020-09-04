import React from 'react';
import { Input, Form } from 'antd';

const AddressPhoneForm = () => {
  return (
    <div>
      <h3>Address & Phone [NOT YET]</h3>
      <Form.Item
        name={['user', 'address1']}
        label='Address1'
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'address2']}
        label='Address2'
        rules={[{ required: false }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'city']}
        label='City'
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'postalCode']}
        label='Postal Code'
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'phone']}
        label='Phone'
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
            type: 'number',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </div>
  );
};

export default AddressPhoneForm;
