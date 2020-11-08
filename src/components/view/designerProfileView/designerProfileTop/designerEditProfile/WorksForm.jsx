import React, { useState } from "react";
import { Upload, Modal, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const maxNumberOfWorkImages = 8;

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export default function WorksForm(props) {
  const { works } = props;
  let formattedWorks = [];
  let objectTemplate = {
    uid: null,
    name: null,
    status: "done",
    url: null,
  };

  const worksImgFormatter = (works) => {
    works.forEach((workImgSrc, index) => {
      objectTemplate = {
        ...objectTemplate,
        uid: -index,
        name: "Work Image " + index,
        url: workImgSrc,
      };
      formattedWorks.push(objectTemplate);
    });
    return formattedWorks;
  };

  const [state, setState] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: worksImgFormatter(works),
  });

  const handleCancel = () => setState({ ...state, previewVisible: false });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setState({
      ...state,
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  const handleChange = ({ fileList }) => setState({ ...state, fileList });

  const { previewVisible, previewImage, fileList, previewTitle } = state;
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  return (
    <div className="clearfix">
        <Upload
            customRequest={dummyRequest}
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
        >
          {fileList.length >= maxNumberOfWorkImages ? null : uploadButton}
        </Upload>
      <Modal
        className="workModal"
        visible={previewVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <img className="workImgInModal" alt={previewTitle} src={previewImage} />
      </Modal>
    </div>
  );
}
