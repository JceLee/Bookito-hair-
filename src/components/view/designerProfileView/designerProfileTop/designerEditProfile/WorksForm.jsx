import { Upload, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";

const maxNumberOfWorkImages = 8;

export default function WorksForm(props) {
  const { works } = props;
  let formattedWorks = [];
  let objectTemplate = {
    uid: null,
    name: null,
    status: "done",
    url: null,
  };

  // To set file.preview
  // https://ant.design/components/upload/#components-upload-demo-picture-card
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // In order to add keys(uid, name, status, url) and values
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

  const moveUploadPictureCardIntoPictureCardContainer = () => {
    const fragment = document.createDocumentFragment();
    const pictureCardContainer = document.querySelector(
      ".ant-upload-list.ant-upload-list-picture-card"
    );
    const uploadPictureCard = document.querySelector(
      ".ant-upload.ant-upload-select.ant-upload-select-picture-card"
    );
    fragment.appendChild(uploadPictureCard);
    pictureCardContainer.appendChild(fragment);
  };

  const [state, setState] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: worksImgFormatter(works),
  });

  useEffect(() => {
    moveUploadPictureCardIntoPictureCardContainer();
  }, [moveUploadPictureCardIntoPictureCardContainer]);

  const handleCancel = () => setState({ ...state, previewVisible: false });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setState({
      ...state,
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  // https://stackoverflow.com/questions/1279957/how-to-move-an-element-into-another-element#:~:text=append(%24(%22%23source,%24(%22%23source%22))%3B
  // To use 'display:flex', modify the existing Ant Design'Upload' component.
  // Move uploadPictureCard into pictureCardContainer.
  const handleChange = ({ fileList }) => {
    setState({ ...state, fileList });
    moveUploadPictureCardIntoPictureCardContainer();
  };

  const { previewVisible, previewImage, fileList, previewTitle } = state;
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  return (
    <div className="worksForm">
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= maxNumberOfWorkImages ? null : uploadButton}
      </Upload>
      <Modal
        className="workModalInEditProfile"
        visible={previewVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <img className="workImgInModal" alt={previewTitle} src={previewImage} />
      </Modal>
    </div>
  );
}
