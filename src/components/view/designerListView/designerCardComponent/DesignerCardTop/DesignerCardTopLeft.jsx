import React from "../../../../../../node_modules/react";
import { Col, Avatar } from "../../../../../../node_modules/antd";
import ReadOnlyStar from "../../../../commonComponents/ReadOnlyStar";
import { UserOutlined} from '../../../../../../node_modules/@ant-design/icons';

export default function DesignerCardTopLeft(props) {
  return (
    <>
      <Col>
        <Avatar size={64} icon={<UserOutlined/>}/>
      </Col>
      <Col className="topLeftSecondCol">
        <div>
          {props.fname}
        </div>
        <div className="topLeftSecondColRating">
          <ReadOnlyStar rating={props.rating}/>
        </div>
      </Col>
    </>
  );
}