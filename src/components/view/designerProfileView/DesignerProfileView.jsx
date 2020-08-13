import React, { useState } from 'react';

import {
  Button,
  Checkbox,
  Modal,
  Input,
  DatePicker,
  TimePicker,
  Divider,
  Form,
  Space,
  Upload,
} from 'antd';

import {
  MinusCircleOutlined,
  PlusOutlined,
  MinusOutlined,
} from '@ant-design/icons';
import moment from 'moment';

const { RangePicker } = TimePicker;
const hoursFormat = 'HH:mm';
const experienceDateFormat = 'YYYY-MM-DD';
const days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 24 },
};
const hoursLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 24 },
};

const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.filelist;
};

// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not validate email!',
//     number: '${label} is not a validate number!',
//   },
// };

const DesignerProfileView = () => {
  const [Loading, setLoading] = useState(false);

  const [Visible, setVisible] = useState(false);

  const [DayChecked, setDayChecked] = useState({
    Mon: false,
    Tue: false,
    Wed: false,
    Thurs: false,
    Fri: false,
    Sat: false,
    Sun: false,
  });

  const showModal = () => {
    setVisible(true);
  };

  const onChange = (e) => {
    const { name, checked } = e.target;
    setDayChecked((prevValue) => ({
      ...prevValue,
      [name]: checked,
    }));
  };

  const handleOk = () => {
    setLoading(false);
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <>
      <div>Designer Profile View</div>
      <>
        <Button type='primary' onClick={showModal}>
          Edit Profile
        </Button>
        <Modal
          visible={Visible}
          title='Edit Profile'
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key='back' onClick={handleCancel}>
              Return
            </Button>,
            <Button
              key='submit'
              htmlType='submit'
              type='primary'
              loading={Loading}
              onClick={handleOk}
            >
              Save
            </Button>,
          ]}
        >
          <div>
            <Form
              {...layout}
              name='editProfile'
              onFinish={onFinish}
              autoComplete='off'
              // validateMessages={validateMessages}
            >
              {/* Work Experience Part */}
              <Form.List name='experience'>
                {(experiences, { add, remove }) => {
                  return (
                    <>
                      <h3>Work Experience</h3>
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
                    </>
                  );
                }}
              </Form.List>

              {/* <Form.Item>
                <Button type='primary' htmlType='submit'>
                  Submit
                </Button>
              </Form.Item> */}

              <Divider />

              {/* Service & Price Part */}
              <div>
                <h3>Service & Price</h3>
                <p>Not decided yet..</p>
              </div>
              <Divider />

              {/* Hours Part */}
              <div className='editHours'>
                <h3>Hours</h3>
                {days.map((day, index) => {
                  return (
                    <div key={index}>
                      <Form.Item
                        {...hoursLayout}
                        label={day}
                        colon={false}
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <RangePicker
                          defaultValue={moment('00:00', hoursFormat)}
                          format={hoursFormat}
                          disabled={DayChecked[day]}
                        />
                        <Checkbox
                          className='hoursCheckbox'
                          checked={DayChecked[day]}
                          name={day}
                          onChange={onChange}
                        >
                          'Closed'
                        </Checkbox>
                      </Form.Item>
                    </div>
                  );
                })}
              </div>

              <Divider />

              {/* Address Part */}
              <div>
                <h3>Address</h3>

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
              </div>

              <Divider />

              {/* Phone Number Part */}
              <div>
                <h3>Phone Number</h3>
                <Form.Item
                  name={['user', 'phone']}
                  label='Mobile'
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
              <Divider />

              {/* Works Part */}
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
            </Form>
          </div>
          {/* end of form */}
        </Modal>
      </>
    </>
  );
};

export default DesignerProfileView;
