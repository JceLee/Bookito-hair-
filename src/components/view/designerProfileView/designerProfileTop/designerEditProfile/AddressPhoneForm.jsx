import React from "react";
import { Input, Form, Modal } from "antd";
import { useSelector } from "react-redux";
import ClientProfileView from "../../../clientProfileView/ClientProfileView";

export default function AddressPhoneForm(props) {
  const designer = useSelector((state) => state.selectedDesigner.selectedDesigner);
  console.log(designer);
  const { formInitialValues, layout } = props;
  const [form] = Form.useForm();
  const formFields = [
    { label: "Street", fieldName: "street", required: true },
    { label: "Unit", fieldName: "unit", required: false },
    { label: "City", fieldName: "city", required: true },
    { label: "Province", fieldName: "province", required: true },
    { label: "Postal Code", fieldName: "postalCode", required: false },
    { label: "Phone", fieldName: "phone", required: false },
  ];

  const yes = (values) => {
    console.log(values);
  };

  return (
    // <Form
    //   {...layout}
    //   form={form}
    //   initialValues={formInitialValues}
    //   name="editProfile"
    //   onFinish={yes}
    //   scrollToFirstError
    // >
    //   <div className="addressPhoneForm">
    //     {formFields.map((formField) => {
    //       return (
    //         <Form.Item
    //           key={formField.fieldName}
    //           name={["addressPhone", formField.fieldName]}
    //           className="addressPhoneFormItem"
    //           label={formField.label}
    //           rules={[{ required: formField.required }]}
    //         >
    //           <Input allowClear placeholder={formField.label} />
    //         </Form.Item>
    //       );
    //     })}
    //   </div>
    //   <button className="uploadButtonInEditProfile" onClick={yes}>
    //     Upload
    //   </button>
    // </Form>
    <ClientProfileView />
  );
}
