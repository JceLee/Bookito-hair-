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
import {designerTypes} from "../../../constants/designerTypes"
import {useHistory} from "react-router-dom";

export default function ClientProfileView(props) {
  let {client, createMode, editMode, extraLogicOnSave} = props;
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const [profile, setProfile] = useState(client !== undefined ? client : currentUser);
  const isNewClient = profile.accountType === designerTypes.newClient;
  const [edit, setEdit] = useState(isNewClient ? true : editMode);
  const [currentAddress, setCurrentAddress] = useState(profile?.location);
  const [validatedAddress, setValidatedAddress] = useState(profile?.location);
  const [addressLatLng, setAddressLatLng] = useState(profile?.latLng);
  const dispatch = useDispatch();

  // Save profile to db and reload page
  const saveProfile = (values) => {
    setEdit(!edit);
    const updatedInfo = {
      accountType: isNewClient ? designerTypes.client : profile.accountType,
      email: values.email,
      phone: values.phone,
      location: validatedAddress,
      displayName: values.nickName,
      latLng: addressLatLng,
    };
    Object.assign(profile, updatedInfo); // Update local client
    dispatch(refresh(profile)); // Update redux client
    // Update firebase
    firebaseStore
      .collection("users")
      .doc(profile.uid)
      .update({
        accountType: isNewClient ? designerTypes.client : profile.accountType,
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
    if (extraLogicOnSave !== undefined) {
      extraLogicOnSave();
    }
    if (isNewClient) {
      goHome();
    }
  };

  const history = useHistory();

  const goHome = () => {
    history.push(`/`);
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
      .child(`images/${profile.uid}/profile/${files[0].name}`)
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
          .doc(profile.uid)
          .update({photoURL: downloadURL})
          .then(function () {
            return message.success({
              content: "Saved",
              duration: "2",
              className: "onFinishMessage",
            });
          });
        const updatedInfo = {
          photoURL: downloadURL,
        };
        Object.assign(profile, updatedInfo); // Update local client
        dispatch(refresh(profile)); // Update redux client
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
          nickName: profile?.fname,
          email: profile?.email,
          phone: profile?.phone,
          address: profile?.location || " ",
        }}
        // validateMessages={validateMessages}
      >
        <Form.Item className="profilePhoto">
          <Avatar size={128} src={profile?.photoURL}/>
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
            <div className="formBottomMargin">{profile?.displayName}</div>
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
            <div>{profile?.email}</div>
          </Form.Item>
        )}

        {edit ? null : <hr/>}
        <Form.Item label="Phone" name="phone" className="formItems">
          {edit ? <Input className="clientInput" type="number"/> : <div>{profile?.phone}</div>}
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
            <div>{profile?.location}</div>
          )}
        </Form.Item>

        {!createMode && <Form.Item {...layout} className="formItems">
          {edit ? isNewClient ? (<Button className="saveBtn" htmlType="submit">
            Create Account
          </Button>) : (
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
            <BlackBtn className="editBtn" btnName="Edit" onClick={setEdit}/>
          )}
        </Form.Item>}
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
            <Avatar size={128} src={profile?.photoURL}/>
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
