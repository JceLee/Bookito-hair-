import {Upload, message, Form} from "antd";
import ImgCrop from "antd-img-crop";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {firebaseOrigin, firebaseStore} from "../../../../../config/fbConfig";
import {update_database} from "../../../../../actions/firebaseAction";
import {refresh} from "../../../../../actions/currentUser";

const layout = {
  labelCol: {span: 6},
  wrapperCol: {span: 24},
};

export default function WorksForm() {
  const designers = useSelector((state) => state.firestore.designers);
  const designer = useSelector((state) => state.selectedDesigner.selectedDesigner);
  const [client, setClient] = useState(designer)
  const [form] = Form.useForm();
  const photoURLs = [];
  const [testState, setTestState] = useState(false);
  const [fileList, setFileList] = useState(designer.works);

  const dispatch = useDispatch();

  const onUploadSubmission = (e) => {
    e.preventDefault(); // prevent page refreshing
    const promises = [];
    fileList.forEach((file) => {
      if (file["originFileObj"] !== undefined) {
        const uploadTask = firebaseOrigin
          .storage()
          .ref()
          .child(`images/${client.uid}/${file.name}`)
          .put(file.originFileObj);
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
            photoURLs.push({
              uid: file.uid,
              name: file.name,
              status: "done",
              url: downloadURL,
            });
            if (photoURLs.length === promises.length) {
              updateFireStorage();
            }
          }
        );
      } else {
        console.log("pass");
      }
    });
    if (testState) {
      updateFireStorage();
    }
    Promise.all(promises)
      .then(function () {
        console.log("complete");
      })
      .catch((err) => console.log(err.code));
  };

  const updateFireStorage = () => {
    if (testState) {
      const updatedList = fileList.filter((work) => work["originFileObj"] === undefined);
      const newWorks = [...updatedList, ...photoURLs];
      firebaseStore
        .collection("users")
        .doc(client.uid)
        .update({works: newWorks})
        .then(function () {
          return message.success({
            content: "Saved",
            duration: "2",
            className: "onFinishMessage",
          });
        });
      updateRedux(newWorks);
    }
  };

  const updateRedux = (newWorks) => {
    const updatedInfo = {
      ...client,
      works: newWorks,
    };
    setClient(updatedInfo);
    dispatch(refresh(updatedInfo));
    designers.forEach((designer) => {
      if (designer.uid === client.uid) {
        designer.works = newWorks;
        dispatch(update_database(designers));
      }
    });
  };

  const onChange = ({fileList: newFileList}) => {
    setFileList(newFileList);
    setTestState(true);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <Form {...layout} name="editProfile" form={form}>
      <ImgCrop rotate>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 8 && "+ Upload"}
        </Upload>
      </ImgCrop>
      <button className="uploadButtonInEditProfile" onClick={onUploadSubmission}>
        Upload
      </button>
    </Form>
  );
}
