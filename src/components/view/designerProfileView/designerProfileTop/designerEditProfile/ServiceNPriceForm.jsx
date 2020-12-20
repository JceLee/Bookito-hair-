import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Input, InputNumber, Button, Tabs, Divider, Popconfirm, message } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;
const { TextArea } = Input;

let newTabIndex = 0;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 24 },
  labelCol: { span: 6 },
  wrapperCol: { span: 24 },
};

const formInitialValues = {
  services: {
    Menu1: [],
    Menu2: [],
    Menu3: [],
    Menu4: [],
    Menu5: [],
    Menu6: [],
  },
};

export default function ServiceNPriceForm() {
  const designer = useSelector((state) => state.selectedDesigner.selectedDesigner);
  const [tabNames, setTabNames] = useState(Object.keys(designer.services));
  const [form] = Form.useForm();

  let initialPanes = tabNames.map((tabName) => {
    return { title: `${tabName}`, key: `${tabName}` };
  });

  const [state, setState] = useState({
    activeKey: initialPanes[0].key,
    panes: initialPanes,
  });

  const [isNewTab, setIsNewTab] = useState(false);

  const onChange = (activeKey) => {
    setState({ activeKey, panes: [...panes] });
  };

  const onEdit = (targetKey, action) => {
    if (action === "add") {
      console.log("add");
      add();
    } else {
      console.log("remove");
      remove(targetKey);
    }
  };

  const add = () => {
    const { panes } = state;
    const activeKey = `newTab${++newTabIndex}`;
    const newPanes = [...panes];
    newPanes.push({ title: "New Tab", key: activeKey });
    setState({
      panes: newPanes,
      activeKey,
    });
  };

  const remove = (targetKey) => {
    const { panes, activeKey } = state;
    let newActiveKey = activeKey;
    let lastIndex;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = panes.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setState({
      panes: newPanes,
      activeKey: newActiveKey,
    });
  };

  const yes = (values) => {
    console.log(values);
  };

  const onValuesChange = (e) => {
    // setTest(e);
  };

  const changeTabName = (e) => {
    console.log(e);
    console.log("clicked");
  };

  const confirm = (e) => {
    message.success("Click on Yes");
    remove();
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  const { panes, activeKey } = state;

  return (
    <Form
      {...layout}
      initialValues={formInitialValues}
      form={form}
      onValuesChange={onValuesChange}
      name="editProfile"
      onFinish={yes}
    >
      <Tabs type="editable-card" onChange={onChange} activeKey={activeKey} onEdit={onEdit}>
        {panes.map((tab) => {
          return (
            <TabPane
              classname="editProfileTabPane"
              tab={tab.title}
              key={tab.key}
              animated={false}
              closable={tab.closable}
              onClick={changeTabName}
            >
              <Popconfirm
                title="Are you sure to delete this task?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <button
                  type="button"
                  aria-label="remove"
                  tabIndex="0"
                  className="ant-tabs-tab-remove"
                >
                  {tab.title}
                </button>
              </Popconfirm>
              <Form.List name={["services", `${tab.title}`]}>
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
                          <PlusOutlined /> Add Service to {tab.title}
                        </Button>
                      </Form.Item>
                    </>
                  );
                }}
              </Form.List>
              <button className="uploadButtonInEditProfile" onClick={yes}>
                Upload
              </button>
            </TabPane>
          );
        })}
      </Tabs>
    </Form>
  );
}
