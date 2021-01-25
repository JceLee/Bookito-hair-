import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Popconfirm,
  Tabs,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import BlackBtn from "../../../../commonComponents/BlackBtn";
import { firebaseStore } from "../../../../../config/fbConfig";
import { refresh } from "../../../../../actions/currentUser";

const { TabPane } = Tabs;
const { TextArea } = Input;

export default function ServiceNPriceForm(props) {
  const { designer, createMode } = props;
  const [tabNames] = useState(
    designer.services ? Object.keys(designer.services) : []
  );
  const [addTabModal, setAddTabModal] = useState(false);
  const [removeTabModal, setRemoveTabModal] = useState(false);
  const promiseFunction = useRef(() => {});
  const newTabName = useRef("New tab");
  const dispatch = useDispatch();

  let initialPanes = tabNames.map((tabName) => {
    return { title: `${tabName}`, key: `${tabName}` };
  });

  const [state, setState] = useState({
    activeKey: initialPanes[0]?.key,
    panes: initialPanes,
  });

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

  const saveServices = async (values) => {
    // Validate services
    for (const service in values.services) {
      // Firebase requires service category must not be empty
      if (!values.services[service]) {
        delete values.services[service];
      }
      // Firebase requires description to be not undefined
      else {
        for (const subService of values.services[service]) {
          if (!subService.description) {
            subService.description = "";
          }
        }
      }
    }
    designer.services = values.services || {};

    // Update redux client
    dispatch(refresh(designer));
    // Update firebase
    await firebaseStore
      .collection("users")
      .doc(designer.uid)
      .update(designer)
      .then(function () {
        return message.success({
          content: "Saved",
          duration: "2",
          className: "onFinishMessage",
        });
      });
  };

  const changeTabName = (e) => {
    console.log("clicked");
  };

  const confirm = () => {
    message.success("Click on Yes");
    remove();
  };

  const cancel = (e) => {
    message.error("Click on No");
  };

  const { activeKey, panes } = state;

  const formArea = (
    <>
      <Tabs
        type="editable-card"
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
        addIcon={<PlusOutlined style={{ height: 38, paddingTop: 11 }} />}
      >
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
                />
              </Popconfirm>
              <Form.List name={["services", `${tab.title}`]}>
                {(fields, { add, remove }) => {
                  return (
                    <>
                      <div>
                        {fields.map((field, index) => {
                          return (
                            <div
                              key={index}
                              className="servicePriceDescription"
                            >
                              <div className="servicePriceMinusButton">
                                <Form.Item
                                  name={[field.name, "service"]}
                                  className="serviceNameInput"
                                  fieldKey={[field.fieldKey, "service"]}
                                  hasFeedback
                                  rules={[
                                    {
                                      required: true,
                                    },
                                  ]}
                                >
                                  <Input
                                    placeholder="Service Name"
                                  />
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
                                rules={[{ message: "Username is required!" }]}
                              >
                                <TextArea
                                  placeholder="Description (optional)"
                                />
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
                          <PlusOutlined /> Add a service to {tab.title}
                        </Button>
                      </Form.Item>
                    </>
                  );
                }}
              </Form.List>
              {!createMode && <BlackBtn btnName="Save" onClick={saveServices} />}
            </TabPane>
          );
        })}
      </Tabs>
      <Modal
        className="tabNameModal"
        title="Add a service category"
        visible={addTabModal}
        onCancel={() => setAddTabModal(!addTabModal)}
        centered={true}
        footer={null}
      >
        <Input
          className="newTabInput"
          placeholder="Please type a name for a new service"
          maxLength={20}
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
        title="Remove service category"
        visible={removeTabModal}
        onCancel={() => setRemoveTabModal(!removeTabModal)}
        centered={true}
        footer={null}
      >
        <div style={{ textAlign: "center" }}>
          Delete category and all corresponding services?
        </div>
        <Divider />
        <BlackBtn btnName="Delete" onClick={promiseFunction.current} />
      </Modal>
    </>
  );

  return (
    <>
      {createMode ? (
        formArea
      ) : (
        <Form
          name="editProfile"
          initialValues={designer.services}
          onFinish={saveServices}>
          {formArea}
        </Form>
      )}
    </>
  );
}
