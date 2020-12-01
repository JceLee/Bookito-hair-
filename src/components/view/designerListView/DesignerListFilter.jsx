import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Button, DatePicker, TimePicker, Divider, Checkbox, Collapse } from "antd/lib/index";
import { TagOutlined, CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
// <ControlOutlined /> <BarsOutlined />

const { Panel } = Collapse;

export default function DesignerListFilter(props) {
  const { numberOfDesigners, location } = props;
  
  const [activeKey, setActiveKey] = useState([0]);

  const openFilterSetting = (i) => () => {
    setActiveKey([i])
  };

  const confirmFilterSetting = (
    <Button className="designerListFilterConfirm" type="primary" block onClick={openFilterSetting(0)}>
      Show results
    </Button>
  );

  return (
    <div className="designerListFilter">
      <Divider className="designerCardComponentDividerTop" />
        <div className="designerListFilterInner">
          <Button className="filterBtn" onClick={openFilterSetting(1)}><span><TagOutlined /> Tags</span></Button>
          <Button className="filterBtn" onClick={openFilterSetting(2)}><span><CalendarOutlined /> Date</span></Button>
          <Button className="filterBtn" onClick={openFilterSetting(3)}><span><ClockCircleOutlined /> Time</span></Button>
          
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
