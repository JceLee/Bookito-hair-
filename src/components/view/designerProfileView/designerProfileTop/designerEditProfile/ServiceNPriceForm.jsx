import React from "react";
import { Form, Input, InputNumber, Button, Tabs, Divider } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;
const { TextArea } = Input;
const tapNames = ["Cut", "Style", "Perm", "Color", "Clinic", "Promo"];

export default function ServiceNPriceForm(props) {
  const { services } = props;
  console.log(services);
  return (
    <Tabs type="card">
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
          </TabPane>
        );
      })}
    </Tabs>
  );
}
