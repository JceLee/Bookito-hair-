import { Upload, Form, Button } from "antd";
import ImgCrop from "antd-img-crop";
import React  from "react";
import { useDispatch, useSelector } from "react-redux";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 24 },
};

export default function WorksForm(props) {
  const { designer, createMode, fileList, setFileList, onFinishWorksForm } = props;

  const designers = useSelector((state) => state.firestore.designers);
  const dispatch = useDispatch();

  const updateRedux = (newWorks) => {
    // TODO: Reactivate later - Kangmin
    // const updatedInfo = {
    //   ...client,
    //   works: newWorks,
    // };
    // setClient(updatedInfo);
    // dispatch(refresh(updatedInfo));
    // designers.forEach((designer) => {
    //   if (designer.uid === client.uid) {
    //     designer.works = newWorks;
    //     dispatch(update_database(designers));
    //   }
    // });
  };

  const onChange = ({ fileList: newFileList, event: e }) => {
    setFileList(newFileList);
  };

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
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

  const formArea = (
    <ImgCrop rotate>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        customRequest={dummyRequest}
      >
        {fileList.length < 8 && "+ Upload"}
      </Upload>
    </ImgCrop>
  );

  return (
    <>
      {createMode ? (
        formArea
      ) : (
        <Form {...layout} name="editProfile" onFinish={onFinishWorksForm}>
          {formArea}
          <Button className="blackBtn" htmlType="submit">
            Save
          </Button>
        </Form>
      )}
    </>
  );
}
