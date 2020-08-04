import React from "react";
import { Col, Avatar } from "antd";
import ReadOnlyStar from "../../../../commonComponents/ReadOnlyStar";
import { UserOutlined } from '@ant-design/icons';

export default function DesignerCardTopLeft(props) {
  return (
    <>
      <Col>
        <Avatar size={64} icon={<UserOutlined/>}/>
      </Col>
      <Col>
        <div>
          {props.fname}
        </div>
        <div>
          <ReadOnlyStar rating={props.rating}/>
        </div>
      </Col>
    </>
  );
}