import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Button, DatePicker, TimePicker, Divider, Checkbox, Collapse, Select } from "antd/lib/index";
import { TagOutlined, CalendarOutlined, ClockCircleOutlined, DownOutlined, CheckOutlined } from '@ant-design/icons';

export default function DesignerListFilter(props) {
  const { tags, numberOfDesigners, location } = props;
  const { Panel } = Collapse;

  const [activeKey, setActiveKey] = useState([0]);
  const [sortBy, setSortBy] = useState("distance");

  const toggleFilterSetting = (i) => () => {
    setActiveKey(activeKey[0] == i ? [0] : [i])
  };

  function handleSortBy(e) {
    setSortBy(e.key);
  }

  const sortMenu = (
    <Menu onClick={handleSortBy}>
      {/* <Menu.Item key="featured">Featured</Menu.Item> */}
      <Menu.Item key="distance">{sortBy == "distance" && <CheckOutlined />}Distance</Menu.Item>
      <Menu.Item key="review">{sortBy == "review" && <CheckOutlined />}Avg. Review</Menu.Item>
      <Menu.Item key="priceLow">{sortBy == "priceLow" && <CheckOutlined />}Price Low</Menu.Item>
      <Menu.Item key="priceHigh">{sortBy == "priceHigh" && <CheckOutlined />}Price High</Menu.Item>
      <Menu.Item key="new">{sortBy == "new" && <CheckOutlined />}New</Menu.Item>
    </Menu>
  );

  const confirmFilterSetting = (
    <Button className="designerListFilterConfirm" type="primary" block onClick={toggleFilterSetting(0)}>
      Show results
    </Button>
  );

  return (
    <div className="designerListFilter">
      <Divider className="designerCardComponentDividerTop" />
        <div className="designerListFilterInner">

          <Dropdown overlay={sortMenu} trigger={["click"]} placement="bottomRight" onClick={toggleFilterSetting(0)}>
            <Button className="filterBtn sortBtn">Sort<DownOutlined /></Button>
          </Dropdown>

          <Button className="filterBtn" onClick={toggleFilterSetting(1)}><span><TagOutlined /> Tag</span></Button>
          <Button className="filterBtn" onClick={toggleFilterSetting(2)}><span><CalendarOutlined /> Date</span></Button>
          <Button className="filterBtn" onClick={toggleFilterSetting(3)}><span><ClockCircleOutlined /> Time</span></Button>
          
          <Collapse ghost activeKey={activeKey}>
            <Panel className="flexChild" key="0" header={null} showArrow={false}>
              <div className="numberOfDesigners">
                {numberOfDesigners} matches in {location}
              </div>
            </Panel>
            <Panel className="flexChild" key="1" header={null} showArrow={false}>
              1
              {confirmFilterSetting}
            </Panel>
            <Panel className="flexChild" key="2" header={null} showArrow={false}>
              2
              {confirmFilterSetting}
            </Panel>
            <Panel className="flexChild" key="3" header={null} showArrow={false}>
              3
              {confirmFilterSetting}
            </Panel>
          </Collapse>
        </div>
      <Divider className="designerCardComponentDividerBottom"/>
    </div>
  );
}
