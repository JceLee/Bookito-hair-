import React from 'react';
import { Button, Form, Space, Upload } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.filelist;
};

const WorksForm = () => {
  return (
    <div>
      <h3>Works</h3>
      <Form.Item
        name='upload'
        valuePropName='filelist'
        getValueFromEvent={normFile}
      >
        <Space>
          <Upload name='logo' action='/upload.do' listType='picture'>
            <Button type='dashed'>
              <PlusOutlined /> Add
            </Button>
          </Upload>
          <Button type='dashed'>
            <MinusOutlined /> Delete
          </Button>
        </Space>
      </Form.Item>
    </div>
  );
};

export default WorksForm;
