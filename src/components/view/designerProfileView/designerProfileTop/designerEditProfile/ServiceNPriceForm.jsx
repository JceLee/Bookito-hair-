import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Divider, Form, Input, InputNumber, message, Modal, Popconfirm, Tabs } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import BlackBtn from "../../../../commonComponents/BlackBtn";

const { TabPane } = Tabs;
const { TextArea } = Input;

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
  const [tabNames] = useState(Object.keys(designer.services));
  const [form] = Form.useForm();
  const [addTabModal, setAddTabModal] = useState(false);
  const [removeTabModal, setRemoveTabModal] = useState(false);
  const promiseFunction = useRef(() => {});
  const newTabName = useRef("New tab");

  let initialPanes = tabNames.map((tabName) => {
    return { title: `${tabName}`, key: `${tabName}` };
  });

  const [state, setState] = useState({
    activeKey: initialPanes[0].key,
    panes: initialPanes,
  });

  const [] = useState(false);

  const onChange = (activeKey) => {
    setState({ activeKey, panes: [...panes] });
  };

  const onEdit = (targetKey, action) => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };

  const add = async () => {
    await nameTabPromise();
    const { panes } = state;
    const activeKey = `${newTabName.current}`;
    const newPanes = [...panes];
    newPanes.push({ title: `${newTabName.current}`, key: activeKey });
    setState({
      panes: newPanes,
      activeKey,
    });
  };

  const updateInput = (e) => {
    newTabName.current = e.target.value;
    console.log(newTabName.current);
  };

  const nameTabPromise = () => {
    return new Promise((resolve) => {
      setAddTabModal(true);
      promiseFunction.current = () => {
        setAddTabModal(false);
        resolve();
      };
    });
  };

  const removeTabPromise = () => {
    return new Promise((resolve) => {
      setRemoveTabModal(true);
      promiseFunction.current = () => {
        setRemoveTabModal(false);
        resolve();
      };
    });
  };

  const remove = async (targetKey) => {
    await removeTabPromise();
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

  const onValuesChange = () => {
    // setTest(e);
  };

  const changeTabName = (e) => {
    console.log(e);
    console.log("clicked");
  };

  const confirm = () => {
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
                ></button>
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
              <BlackBtn btnName="Save" onClick={yes} />
            </TabPane>
          );
        })}
      </Tabs>
      <Modal
        className="tabNameModal"
        title="Add a tab"
        visible={addTabModal}
        onCancel={() => setAddTabModal(!addTabModal)}
        centered={true}
        footer={null}
      >
        <Input
          className="newTabInput"
          placeholder="Please type a name for new tab"
          maxLength={8}
          onChange={updateInput}
        />
        <Divider />
        <BlackBtn
          className="saveButtonInEditProfile"
          btnName="Save"
          onClick={promiseFunction.current}
        />
      </Modal>
      <Modal
        className="removeTabModal"
        title="Remove the tab"
        visible={removeTabModal}
        onCancel={() => setRemoveTabModal(!removeTabModal)}
        centered={true}
        footer={null}
      >
        <div style={{ textAlign: "center" }}>Are you sure you want to delete?</div>
        <Divider />
        <BlackBtn btnName="Delete" onClick={promiseFunction.current} />
      </Modal>
    </Form>
  );
}
