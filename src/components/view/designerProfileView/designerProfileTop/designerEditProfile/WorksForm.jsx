import { Upload, Modal } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { firebaseOrigin } from "../../../../../config/fbConfig";

const maxNumberOfWorkImages = 8;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export default function WorksForm(props) {
  const [files, setFiles] = useState([])
  const [preview, setPreview] = useState({
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: [
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    ],
  });

  const handleCancel = () => setPreview({ ...preview, previewVisible: false });

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreview({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  const handleChange = ({ fileList }) => {
    console.log(fileList);
    setPreview({ ...preview, fileList });
  }

  const onFileChange = e => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newFile = e.target.files[i];
      newFile["id"] = Math.random();
      // add an "id" property to each File object
      setFiles(prevState => [...prevState, newFile]);
      console.log(newFile);
    }
  };

  const onUploadSubmission = e => {
    e.preventDefault(); // prevent page refreshing
    console.log(fileList);
    const promises = [];
    fileList.forEach(file => {
          const uploadTask =
              firebaseOrigin.storage().ref().child(`images/${file.name}`).put(file.originFileObj);
          promises.push(uploadTask);
          uploadTask.on(
              firebaseOrigin.storage.TaskEvent.STATE_CHANGED,
              snapshot => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (snapshot.state === firebaseOrigin.storage.TaskState.RUNNING) {
            console.log(`Progress: ${progress}%`);
          }
        },
        error => console.log(error),
        async () => {
          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
          console.log(downloadURL);
          // do something with the url
        }
    );
  });
  Promise.all(promises)
      .then(() => console.log("completed!"))
      .catch(err => console.log(err.code));
}

  const { previewVisible, previewImage, fileList, previewTitle } = preview;

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
  );

  return (
    <div className="worksForm">
      <Upload
          customRequest={dummyRequest}
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>

      <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>

      <form>
        <label>Select Files
          <input type="file" multiple onChange={onFileChange} />
        </label>
        <button onClick={onUploadSubmission}>Upload</button>
      </form>

    </div>


  );
}
