import React, { useState } from "react";
import { Form, Input, Button, Avatar, Modal } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useDropzone } from 'react-dropzone';

export default function ClientProfileView() {
    // form layout
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    };

    // for modal
    const [ visible, setVisible ] = useState(false);
    const modalHandler = () => {
        setVisible(!visible);
    }

    // for dropzone
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    })

    // display preview after dropping image
    const preview = files.map(file => (
        <Avatar
            key={file.name}
            size={128}
            src={file.preview}
        />
    ))

    return (
        <div className="clientProfileView">
            <Form className="profileForm"
            {...layout}
            >   
                <Form.Item className="profilePhoto">
                    <Avatar 
                        size={128}
                        src=""
                    />
                    <EditOutlined 
                        className="editIcon"
                        onClick={modalHandler}/>
                </Form.Item>
                <Form.Item className="clientName">
                    <div>Jane Doe</div>
                </Form.Item>

                <Form.Item
                    label="Email"
                    className="formItems"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Phone"
                    className="formItems"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="City"
                    className="formItems"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Province"
                    className="formItems"
                >
                    <Input />
                </Form.Item>
                <Form.Item className="formItems">
                    <Button className="saveBtn">
                        Save
                    </Button>
                </Form.Item>
            </Form>
            {/* modal */}
            <Modal
            title='Change Photo'
            visible={visible}
            onCancel={modalHandler}
            destroyOnClose={true}
            className="changePhotoModal"
            >
                <div className="modalProfilePhoto">
                    {files.length === 0 ?
                        <Avatar size={128} src="" />
                        :
                        preview
                    }

                </div>

                <div {...getRootProps({className: 'dropzone'})} className="dragDropContainer">
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                            <p>Drop the files here...</p> :
                            <p>Drag and drop your photo here, or click to select files</p>
                    }
                    
                </div>

            </Modal>
        </div>


    );
}
