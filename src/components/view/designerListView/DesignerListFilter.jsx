import React from "react";
import { Menu, Dropdown, Button, DatePicker, TimePicker, Divider } from "antd/lib/index";

export default function DesignerListFilter(props) {
  const { tags, numberOfDesigners, location } = props;

  const typesMenu = (
    <Menu>
      {tags.map((type, index) => (
        <Menu.Item key={index} className="typeBtn">
          {type}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="designerListFilter">
      <Divider className="designerCardComponentDividerTop" />
        <div className="designerListFilterInner">

        <div>
          <Dropdown overlay={typesMenu} trigger={["click"]}>
            <Button className="filterBtn">Types</Button>
          </Dropdown>
          <DatePicker className="filterBtn" />
          <TimePicker className="filterBtn" format="HH:mm" minuteStep={10} />
        </div>
        <div className="numberOfDesigners">
          {numberOfDesigners} matches in {location}
        </div>
      </div>
      <Divider className="designerCardComponentDividerBottom"/>
    </div>
  );
}
