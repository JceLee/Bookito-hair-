import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';

// const formItemLayout = {
//   labelCol: {
//     xs: { span: 24 },
//     sm: { span: 4 },
//   },
//   wrapperCol: {
//     xs: { span: 24 },
//     sm: { span: 20 },
//   },
// };
// const formItemLayoutWithOutLabel = {
//   wrapperCol: {
//     xs: { span: 24, offset: 0 },
//     sm: { span: 20, offset: 4 },
//   },
// };

const ServiceNPriceForm = () => {
  return (
    <Form.List name='serviceNpriceForm'>
      {(fields, { add, remove }) => {
        return (
          <div>
            {fields.map((field) => (
              <Form.Item
                className='serviceNpriceForm'
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: 'Please input valid service.',
                    },
                  ]}
                  noStyle
                >
                  <Input
                    className='serviceTypeInput'
                    placeholder='Service Type'
                  />
                  <Form.List name='serviceNameNPrice'>
                    {(fields, { add, remove }) => {
                      return (
                        <div className='serviceNameNPrice'>
                          {fields.map((field) => (
                            <>
                              <Form.Item
                                {...field}
                                className='serviceNameInput'
                                name={[field.name, 'service']}
                                fieldKey={[field.fieldKey, 'service']}
                                rules={[
                                  {
                                    required: true,
                                    message: 'Missing service name',
                                  },
                                ]}
                              >
                                <Input placeholder='Service Name' />
                              </Form.Item>
                              <Form.Item
                                {...field}
                                className='servicePriceInput'
                                name={[field.name, 'price']}
                                fieldKey={[field.fieldKey, 'price']}
                                rules={[
                                  {
                                    required: true,
                                    message: 'Missing price',
                                  },
                                ]}
                              >
                                <Input placeholder='Price' />
                              </Form.Item>
                              <MinusCircleOutlined
                                onClick={() => {
                                  remove(field.name);
                                }}
                              />
                              Remove
                            </>
                          ))}

                          <Form.Item>
                            <Button
                              className='addServicePriceBtn'
                              onClick={() => {
                                add();
                              }}
                            >
                              <PlusOutlined />
                              Service & Price
                            </Button>
                          </Form.Item>
                        </div>
                      );
                    }}
                  </Form.List>
                </Form.Item>
                {fields.length > 0 ? (
                  <>
                    <MinusCircleOutlined
                      className='dynamic-delete-button'
                      style={{ margin: '0 8px' }}
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                    Remove
                  </>
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                className='addServiceTypeBtn'
                onClick={() => {
                  add();
                }}
              >
                <PlusOutlined />
                Service Type
              </Button>
            </Form.Item>
          </div>
        );
      }}
    </Form.List>
  );
};

export default ServiceNPriceForm;
