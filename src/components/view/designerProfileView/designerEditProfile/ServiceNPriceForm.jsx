import React from 'react';
import { Button, Input, DatePicker, Form, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const ServiceNPriceForm = () => {
  const experienceDateFormat = 'YYYY-MM-DD';
  return (
    <Form.List name='experience'>
      {(experiences, { add, remove }) => {
        return (
          <div>
            {experiences.map((experience) => (
              <Space
                key={experience.key}
                style={{ display: 'flex' }}
                align='start'
              >
                <Form.Item
                  {...experience}
                  name={[experience.name, 'experience']}
                  fieldKey={[experience.fieldKey, 'experience']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing work experience',
                    },
                  ]}
                >
                  <Input placeholder='Work Experience' />
                </Form.Item>
                <Form.Item
                  {...experience}
                  name={[experience.name, 'period']}
                  fieldKey={[experience.fieldKey, 'period']}
                  rules={[
                    {
                      required: true,
                      message: 'Missing work period',
                    },
                  ]}
                >
                  <DatePicker.RangePicker
                    showTime
                    format={experienceDateFormat}
                  />
                </Form.Item>
                <MinusCircleOutlined
                  onClick={() => {
                    remove(experience.name);
                  }}
                />
              </Space>
            ))}
            <Form.Item>
              <Button
                type='dashed'
                onClick={() => {
                  add();
                }}
              >
                <PlusOutlined /> Add
              </Button>
            </Form.Item>
          </div>
        );
      }}
    </Form.List>
  );
};

export default ServiceNPriceForm;
