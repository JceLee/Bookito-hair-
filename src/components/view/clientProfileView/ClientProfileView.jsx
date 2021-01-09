import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Form, Input, Avatar, Modal, message, Button} from "antd";
import {EditOutlined} from "@ant-design/icons";
import {useDropzone} from "react-dropzone";
import BlackBtn from "../../commonComponents/BlackBtn";
import {firebaseOrigin, firebaseStore} from "../../../config/fbConfig";
import {refresh} from "../../../actions/currentUser";
import LocationInput from "../../commonComponents/LocationInput";
import {geocode} from "../../../helpers/geocode";
import {designerTypes} from "../../../constants/designerTypes";
import {useHistory} from "react-router-dom";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

export default function ClientProfileView(props) {
  let {form, editMode} = props;
  const [client, setClient] = useState(useSelector((state) => state.currentUser.currentUser));
  if (client.accountTypes === designerTypes.newClient) {
    editMode = true;
  }
  const [edit, setEdit] = useState(editMode);
  const [profile, setProfile] = useState(client);
  const [currentAddress, setCurrentAddress] = useState(client.location);
  const [validatedAddress, setValidatedAddress] = useState(client.location);
  const [addressLatLng, setAddressLatLng] = useState(client.latLng);
  const dispatch = useDispatch();

  // save profile to db and reload page
  const saveProfile = (values) => {
    setEdit(!edit);
    const newType = client.accountTypes === designerTypes.newClient ? designerTypes.client : client.accountTypes;
    const updatedInfo = {
      ...client,
      accountTypes: newType,
      email: values.email,
      phone: values.phone,
      location: validatedAddress,
      displayName: values.nickName,
    };
    dispatch(refresh(updatedInfo));
    setClient(updatedInfo);
    // window.location.reload(false);
    firebaseStore
      .collection("users")
      .doc(client.uid)
      .update({
        accountTypes: newType,
        email: values.email,
        phone: values.phone,
        location: validatedAddress,
        displayName: values.nickName,
      })
      .then(function () {
        goHome();
        return message.success({
          content: "Completed",
          duration: "2",
          className: "onFinishMessage",
        });
      });
  };

  const history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  // save profile photo to db and close modal
  const saveProfilePhoto = () => {
    console.log(files);
    modalHandler();
  };

  // form layout
  const layout = {
    labelCol: {span: 4},
  };

  // for modal
  const [visible, setVisible] = useState(false);
  const modalHandler = () => {
    setEdit(!edit);
    setVisible(!visible);
  };

  // for dropzone
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
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
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
          .update({photoURL: downloadURL})
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
          <Avatar size={128} src={client.photoURL}/>
          {edit ? <EditOutlined className="editIcon" onClick={modalHandler}/> : null}
        </Form.Item>
        {edit ? (
          <Form.Item
            label="Name"
            name="nickName"
            className="formItems formTopMargin"
            rules={[{required: true}]}
          >
            <Input className="clientInput" type="text" required={true}/>
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
            rules={[{required: true, type: "email"}]}
          >
            <Input className="clientInput" type="email" required={true}/>
          </Form.Item>
        ) : (
          <Form.Item className="formItems" label="Email">
            <div>{client.email}</div>
          </Form.Item>
        )}

        {edit ? null : <hr/>}
        <Form.Item label="Phone" name="phone" className="formItems">
          {edit ? <Input className="clientInput" type="number"/> : <div>{client.phone}</div>}
        </Form.Item>

        {edit ? null : <hr/>}

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
            {required: editMode},
          ]}
        >
          {edit ? (
            <LocationInput
              address={currentAddress}
              handleAddressChange={handleAddressChange}
              handleAddressSelect={handleAddressSelect}
              className="clientInput"
              // allowClear={true}
            />
          ) : (
            <div>{client.location}</div>
          )}
        </Form.Item>

        <Form.Item {...layout} className="formItems">
          {edit ? (client.accountTypes === designerTypes.newClient ?
              <Button className="saveBtn" htmlType="submit">
                Sign Up
              </Button> : <Button className="saveBtn" htmlType="submit">
                Save
              </Button>
          ) : (
            // <BlackBtn
            //   className="saveBtn"
            //   btnName="Save"
            //   htmlType="submit"
            //   onClick={saveProfile}
            // />
            <BlackBtn className="editBtn" btnName="Edit" onClick={setEdit}/>
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
            <Avatar size={128} src={profile.photoURL}/>
          ) : (
            <Avatar size={128} src={files[0].preview}/>
          )}
        </div>
        <div {...getRootProps({className: "dropzone"})} className="dragDropContainer">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            <p>Drag and drop your photo here, or click to select a file</p>
          )}
        </div>
        <BlackBtn btnName="Save" onClick={onUploadSubmission}/>
      </Modal>
    </div>
  );
}
