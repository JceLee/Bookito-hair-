import React, {useRef, useState, useEffect, useMemo} from "react";
import { Form, Input, InputNumber, Button, Tabs, Divider } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { DndProvider, DragSource, DropTarget } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const { TabPane } = Tabs;
const { TextArea } = Input;
const initialValue = ["Menu1", "Menu2", "Menu3", "Menu4", "Menu5", "Menu6"];

export default function ServiceNPriceForm(props) {
  const [mounted, setMounted] = useState(false);
  const { services, formInitialValues, layout } = props;
  const [ tapNames, setTapNames ] = useState(initialValue);
  const [form] = Form.useForm();
  let newTabIndex = 0;

  if (!mounted) {
    setTapNames(Object.keys(services));
    setMounted(true);
  }

  console.log(services);
  console.log(tapNames);

  const [order, setOrder] = useState([]);

  const yes = (values) => {
    console.log(values);
  };

  return (
    <Form
      {...layout}
      initialValues={formInitialValues}
      form={form}
      name="editProfile"
      onFinish={yes}
    >
    <Tabs
      type="editable-card"
      // onChange={onChange}
      // activeKey={activeKey}
      // onEdit={onEdit}
    >
      {tapNames.map((tap) => {
        return (
            <TabPane
              classname="editProfileTabPane"
              tab={tap}
              key={tap}
              animated={false}
            >
              <Form.List name={["services", `${tap}`]}>
                {(fields, { add, remove }) => {
                  return (
                    <>
                      <div>
                        {fields.map((field, index) => {
                          return (
                            <div key={index} className="servicePriceDescription">
                              <div className="servicePriceMinusButton">
                                <Form.Item
                                  name={[field.name, "serviceName"]}
                                  className="serviceNameInput"
                                  fieldKey={[field.fieldKey, "serviceName"]}
                                  hasFeedback
                                  rules={[
                                    {
                                      required: true,
                                    },
                                  ]}
                                >
                                  <Input placeholder="Service Name" />
                                </Form.Item>
                                <Form.Item
                                  name={[field.name, "price"]}
                                  className="servicePriceInput"
                                  fieldKey={[field.fieldKey, "price"]}
                                  hasFeedback
                                  rules={[
                                    {
                                      required: true,
                                      type: "number",
                                      min: 1,
                                      max: 1000,
                                    },
                                  ]}
                                >
                                  <InputNumber
                                    placeholder="Price"
                                    // formatter={(value) => `$ ${value}`}
                                  />
                                </Form.Item>
                                <MinusCircleOutlined
                                  className="removeServicePriceBtn"
                                  onClick={() => {
                                    remove(field.name);
                                  }}
                                />
                              </div>

                              <Form.Item
                                name={[field.name, "description"]}
                                className="serviceDescriptionInput"
                                fieldKey={[field.fieldKey, "description"]}
                                hasFeedback
                              >
                                <TextArea placeholder="Description (optional)" />
                              </Form.Item>
                              <Divider className="dividerInServiceAndPrice" />
                            </div>
                          );
                        })}
                      </div>
                      <Form.Item className="formItemAddServiceTypeBtn">
                        <Button
                          className="addServiceTypeBtn"
                          type="dashed"
                          onClick={() => {
                            add();
                          }}
                          block
                        >
                          <PlusOutlined /> Add Service to {tap}
                        </Button>
                      </Form.Item>
                    </>
                  );
                }}
              </Form.List>
              <button onClick={yes}>Upload</button>
            </TabPane>
        );
      })}
    </Tabs>
    </Form>
  );
}
