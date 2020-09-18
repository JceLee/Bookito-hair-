import React from "react";
import { Form, Input, InputNumber, Button, Space, Tabs, Divider } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const { TabPane } = Tabs;
const { TextArea } = Input;
const tapNames = ["Cut", "Style", "Perm", "Color", "Clinic", "Promo"];

export default function ServiceNPriceForm(props) {
  const { services } = props;
  return (
    <Tabs type="card">
      {tapNames.map((tap) => {
        return (
          <TabPane tab={tap} key={tap} animated={false}>
            <Form.List name={["services", `${tap}`]}>
              {(fields, { add, remove }) => {
                return (
                  <div>
                    <div className="servicePriceDescription">
                      {fields.map((field, index) => {
                        return (
                          <div key={index}>
                            <Space
                              className="serviceNameNPrice"
                              style={{
                                position: "relative",
                                alignItems: "center",
                                paddingLeft: "12px",
                              }}
                              key={field.key}
                              align="start"
                            >
                              <Form.Item
                                {...field}
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
                                {...field}
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
                              <Form.Item
                                {...field}
                                name={[field.name, "description"]}
                                className="serviceDescriptionInput"
                                fieldKey={[field.fieldKey, "description"]}
                                hasFeedback
                              >
                                <TextArea placeholder="Description (optional)" />
                              </Form.Item>
                            </Space>
                            <Divider
                              style={{
                                margin: "0 0 0 12px",
                                width: "300px",
                                minWidth: "unset",
                                color: "#c6c6c6",
                              }}
                            />
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
                  </div>
                );
              }}
            </Form.List>
          </TabPane>
        );
      })}
    </Tabs>
  );
}
