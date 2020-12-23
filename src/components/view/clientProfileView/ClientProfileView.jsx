import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Avatar, Modal, message, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useDropzone } from "react-dropzone";
import BlackBtn from "../../commonComponents/BlackBtn";
import { useSelector } from "react-redux";
import { firebaseOrigin, firebaseStore } from "../../../config/fbConfig";
import { refresh } from "../../../actions/currentUser";
import LocationInput from "../../commonComponents/LocationInput";
import { geocode } from "../../../helpers/geocode";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

export default function ClientProfileView(props) {
  const { form, editMode } = props;
  const [client, setClient] = useState(
    useSelector((state) => state.currentUser.currentUser)
  );
  const [edit, setEdit] = useState(editMode);
  // const { Dragger } = Upload;
  const [profile, setProfile] = useState(client);
  const [currentAddress, setCurrentAddress] = useState(client.location);
  const [validatedAddress, setValidatedAddress] = useState(client.location);
  const [addressLatLng, setAddressLatLng] = useState(client.latLng);
  const dispatch = useDispatch();

  // const imgCropConfig = {
  //   name: "file",
  //   multiple: true,
  //   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  //   onChange(info) {
  //     const { status } = info.file;
  //     if (status !== "uploading") {
  //       console.log(info.file, info.fileList);
  //     }
  //     if (status === "done") {
  //       setProfile({ ...profile, preview: URL.createObjectURL(info.file.originFileObj) });
  //       console.log(URL.createObjectURL(info.file.originFileObj));
  //       message.success(`${info.file.name} file uploaded successfully.`);
  //     } else if (status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  // };

  // save profile to db and reload page
  const saveProfile = (values) => {
    setEdit(!edit);
    const updatedInfo = {
      ...client,
      email: values.email,
      phone: values.phone,
      location: validatedAddress,
      displayName: values.nickName,
      latLng: addressLatLng,
    };
    setClient(updatedInfo);
    dispatch(refresh(updatedInfo));
    // window.location.reload(false);
    firebaseStore
      .collection("users")
      .doc(client.uid)
      .update({
        email: values.email,
        phone: values.phone,
        location: validatedAddress,
        displayName: values.nickName,
        latLng: addressLatLng,
      })
      .then(function () {
        return message.success({
          content: "Saved",
          duration: "2",
          className: "onFinishMessage",
        });
      });
  };

  // save profile photo to db and close modal
  const saveProfilePhoto = () => {
    console.log(files);
    modalHandler();
  };

  // form layout
  const layout = {
    labelCol: { span: 4 },
  };

  // for modal
  const [visible, setVisible] = useState(false);
  const modalHandler = () => {
    setEdit(!edit);
    setVisible(!visible);
  };

  // for dropzone
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const onUploadSubmission = (e) => {
    e.preventDefault(); // prevent page refreshing
    const promises = [];
    const uploadTask = firebaseOrigin
      .storage()
      .ref()
      .child(`images/${client.uid}/profile/${files[0].name}`)
      .put(files[0]);
    promises.push(uploadTask);
    uploadTask.on(
      firebaseOrigin.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (snapshot.state === firebaseOrigin.storage.TaskState.RUNNING) {
          console.log(`Progress: ${progress}%`);
        }
      },
      (error) => console.log(error),
      async () => {
        const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
        firebaseStore
          .collection("users")
          .doc(client.uid)
          .update({ photoURL: downloadURL })
          .then(function () {
            return message.success({
              content: "Saved",
              duration: "2",
              className: "onFinishMessage",
            });
          });
        const updatedInfo = {
          ...client,
          photoURL: downloadURL,
        };
        setClient(updatedInfo);
        dispatch(refresh(updatedInfo));
      }
    );
    Promise.all(promises)
      .then(() => modalHandler())
      .catch((err) => console.log(err.code));
  };

  const handleAddressChange = (address) => {
    setCurrentAddress(address);
    if (address === "") {
      setValidatedAddress("");
    }
  };

  const handleAddressSelect = (address, placeID) => {
    handleAddressChange(address);
    geocode(address).then((latLng) => {
      if (latLng) {
        setValidatedAddress(address);
        setAddressLatLng(latLng);
      } else {
        console.log("Unable to get location!");
      }
    });
  };

  // display preview after dropping image
  // const preview = (<Avatar size={128} src={files[files.length -1].preview}/>);

  // const preview = (<Avatar key={profile.url} size={128} src={profile.preview}/>);

  return (
    <div className="clientProfileView">
      <Form
        className="profileForm"
        {...layout}
        onFinish={saveProfile}
        initialValues={{
          nickName: client.displayName,
          email: client.email,
          phone: client.phone,
          address: client.location,
        }}
        validateMessages={validateMessages}
      >
        <Form.Item className="profilePhoto">
          <Avatar size={128} src={client.photoURL} />
          {edit ? (
            <EditOutlined className="editIcon" onClick={modalHandler} />
          ) : null}
        </Form.Item>
        {edit ? (
          <Form.Item
            label="Name"
            name="nickName"
            className="formItems formTopMargin"
            rules={[{ required: true }]}
          >
            <Input type="text" required={true} />
          </Form.Item>
        ) : (
          <Form.Item className="clientName">
            <div className="formBottomMargin">{client.displayName}</div>
          </Form.Item>
        )}

        {edit ? (
          <Form.Item
            label="Email"
            name="email"
            className="formItems"
            rules={[{ required: true, type: "email" }]}
          >
            <Input type="email" required={true} />
          </Form.Item>
        ) : (
          <Form.Item className="formItems" label="Email">
            <div>{client.email}</div>
          </Form.Item>
        )}

        {edit ? null : <hr />}
        <Form.Item
          label="Phone"
          name="phone"
          className="formItems"
          rules={[
            {
              validator(rule, value) {
                if (!value || value.length === 10) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "Your input is not a valid phone number!"
                );
              },
            },
            { required: editMode },
          ]}
        >
          {edit ? <Input type="number" /> : <div>{client.phone}</div>}
        </Form.Item>

        {edit ? null : <hr />}

        {/* <Form.Item
          label="Address"
          name="address"
          className="formItems"
        >
          {edit ? <Input type="text" /> : <div>{client.location}</div>}
        </Form.Item> */}

        <Form.Item
          label="Address"
          name="address"
          className="formItems"
          rules={[
            {
              validator(rule, value) {
                if (currentAddress === validatedAddress) {
                  return Promise.resolve();
                }
                return Promise.reject("Cannot validate address!");
              },
            },
            { required: editMode },
          ]}
        >
          {edit ? (
            <LocationInput
              address={currentAddress}
              handleAddressChange={handleAddressChange}
              handleAddressSelect={handleAddressSelect}
              // allowClear={true}
            />
          ) : (
            <div>{client.location}</div>
          )}
        </Form.Item>

        <Form.Item {...layout} className="formItems">
          {edit ? (
            <Button className="saveBtn" htmlType="submit">
              Save
            </Button>
          ) : (
            // <BlackBtn
            //   className="saveBtn"
            //   btnName="Save"
            //   htmlType="submit"
            //   onClick={saveProfile}
            // />
            <BlackBtn className="editBtn" btnName="Edit" onClick={setEdit} />
          )}
        </Form.Item>
      </Form>
      {/* modal */}
      <Modal
        title="Change Photo"
        visible={visible}
        onCancel={modalHandler}
        destroyOnClose={true}
        className="changePhotoModal"
        footer={false}
      >
        <div className="modalProfilePhoto">
          {files.length === 0 ? (
            <Avatar size={128} src={profile.photoURL} />
          ) : (
            <Avatar size={128} src={files[0].preview} />
          )}
        </div>
        <div
          {...getRootProps({ className: "dropzone" })}
          className="dragDropContainer"
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            <p>Drag and drop your photo here, or click to select a file</p>
          )}
        </div>
        {/*<ImgCrop rotate shape={"round"}>*/}
        {/*  <Dragger {...imgCropConfig}>*/}
        {/*    <p className="ant-upload-drag-icon">*/}
        {/*      <InboxOutlined />*/}
        {/*    </p>*/}
        {/*    <p>Drag and drop your photo here, or click to select files</p>*/}
        {/*  </Dragger>,*/}
        {/*</ImgCrop>*/}
        <BlackBtn btnName="Save" onClick={onUploadSubmission} />
      </Modal>
    </div>
  );
}
