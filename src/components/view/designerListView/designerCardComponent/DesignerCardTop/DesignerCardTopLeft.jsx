import React from "../../../../../../node_modules/react";
import { Row, Col, Avatar } from "../../../../../../node_modules/antd/lib";
import ReadOnlyStar from "../../../../commonComponents/ReadOnlyStar";
import { UserOutlined} from '../../../../../../node_modules/@ant-design/icons/lib';

export default function DesignerCardTopLeft(props) {
  return (
    <Row className="designerCardTopLeft">
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
    </Row>
  );
}