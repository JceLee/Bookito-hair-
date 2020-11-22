import { Upload, Modal, message } from "antd";
import ImgCrop from "antd-img-crop";
import React, { useState } from "react";
import { firebaseOrigin, firebaseStore } from "../../../../../config/fbConfig";

export default function WorksForm(props) {
  const { customerUid, works } = props;
  const photoURLs = [];

  const [fileList, setFileList] = useState(works);

  const onUploadSubmission = (e) => {
    e.preventDefault(); // prevent page refreshing
    const promises = [];
    console.log(fileList);
    fileList.forEach((file) => {
      if (file["originFileObj"] !== undefined) {
        const uploadTask = firebaseOrigin
          .storage()
          .ref()
          .child(`images/${file.name}`)
          .put(file.originFileObj);
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
            photoURLs.push({
              uid: file.uid,
              name: file.name,
              status: "done",
              url: downloadURL,
            });
            if (photoURLs.length === promises.length) {
              const newWorks = [...works, ...photoURLs];
              firebaseStore
                .collection("users")
                .doc(customerUid)
                .update({ works: newWorks })
                .then(function () {
                  return message.success({
                    content: "Saved",
                    duration: "2",
                    className: "onFinishMessage",
                  });
                });
            }
          }
        );
      } else {
        console.log("pass");
      }
    });
    Promise.all(promises)
      .then(() => console.log("completed!"))
      .catch((err) => console.log(err.code));
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(fileList);
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
    <div>
      <ImgCrop rotate>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 5 && "+ Upload"}
        </Upload>
      </ImgCrop>
      <button onClick={onUploadSubmission}>Upload</button>
    </div>
  );
}
