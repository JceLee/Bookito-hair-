import React from "react";
import { Row, Col, Avatar } from "antd";
import DesignerCardTopLeft from "./DesignerCardTop/DesignerCardTopLeft";
import DesignerCardTopRight from "./DesignerCardTop/DesignerCardTopRight";

const designer = {
  fname: 'John',
  lname: 'Doe',
  location: '111 W Georgia St, Vancouver',
  rating: 3.7,
  img:
    'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
  types: [ "Men's Hair", "Women's Hair", "Colour", "Perm"],
  walk: "10",
  drive: "5"
};

export default function DesignerCardComponent(props) {
  return (
    <>
    <Row>
        <DesignerCardTopLeft rating={designer.rating} fname={designer.fname}/>
        <DesignerCardTopRight types={designer.types} walk={designer.walk} drive={designer.drive}/>
    </Row>
    </>
  );
}
