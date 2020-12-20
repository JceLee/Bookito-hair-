import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Button, Divider, Collapse } from "antd/lib/index";
import { TagOutlined, CalendarOutlined, ClockCircleOutlined, DownOutlined } from '@ant-design/icons';
import DesignerListFilterTags from "./DesignerListFilterTags";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

export default function DesignerListFilter(props) {
  const { filterTags, updateFilter, numberOfDesigners, location, updateSortBy } = props;
  const { Panel } = Collapse;

  const [activeKey, setActiveKey] = useState([0]);
  const [sortBy, setSortBy] = useState("");
  const [currentCheckedTags, setCurrentCheckedTags] = useState([]);
  const [filterDate, setFilterDate] = useState(null);
  
  useEffect(() => {

  }, []);

  const toggleFilterSetting = (i) => {
    setActiveKey(activeKey[0] === i ? [0] : [i])
  };

  const handleSortBy = (e) => {
    setSortBy(e.key);
    updateSortBy(e.key);
  }

  const onShowResultsTags = () => {
    toggleFilterSetting(0);
    updateFilter(currentCheckedTags, undefined);
  }

  const onShowResultsDate = () => {
    toggleFilterSetting(0);
    updateFilter(undefined, filterDate);
  }

  // const onShowResultsTime = () => {
  //   toggleFilterSetting(0);
  // }
  
  const handleFilterDate = (day, { selected }) => {
    setFilterDate(selected ? undefined : day);
    console.log(filterDate);
  };

  const sortMenu = (
    <Menu onClick={(e) => handleSortBy(e)}>
      {/* <Menu.Item key="featured">Featured</Menu.Item> */}
      <Menu.Item key="distance" className={sortBy === "distance" && "designerListSortByButtonBold"}>Distance</Menu.Item>
      <Menu.Item key="reviewScore" className={sortBy === "reviewScore" && "designerListSortByButtonBold"}>Review Score</Menu.Item>
      <Menu.Item key="reviewCount" className={sortBy === "reviewCount" && "designerListSortByButtonBold"}>Review Count</Menu.Item>
      <Menu.Item key="new" className={sortBy === "new" && "designerListSortByButtonBold"}>New</Menu.Item>
    </Menu>
  );

  const confirmFilterSettingButton = (onShowResults) => (
    <Button className="designerListFilterConfirm" type="primary" block onClick={onShowResults}>
      Show results
    </Button>
  );

  return (
    <div className="designerListFilter">
      <Divider className="designerCardComponentDividerTop" />
        <div className="designerListFilterInner">

          <Dropdown overlay={sortMenu} trigger={["click"]} placement="bottomRight" onClick={() => toggleFilterSetting(0)}>
            <Button className="filterBtn sortBtn">Sort<DownOutlined /></Button>
          </Dropdown>

          <Button className="filterBtn" onClick={() => toggleFilterSetting(1)}><span><TagOutlined /> Tag</span></Button>
          <Button className="filterBtn" onClick={() => toggleFilterSetting(2)}><span><CalendarOutlined /> Date</span></Button>
          {/* <Button className="filterBtn" onClick={() => toggleFilterSetting(3)}><span><ClockCircleOutlined /> Time</span></Button> */}

          <Collapse ghost activeKey={activeKey}>
            <Panel key="0" header={null} showArrow={false}>
              <div className="numberOfDesigners">
                {numberOfDesigners} matches in {location}
              </div>
            </Panel>
            <Panel key="1" header={null} showArrow={false}>
              {/* {() => resetCurrentFilterTags} */}
              <DesignerListFilterTags 
                filterTags={filterTags}
                currentCheckedTags={currentCheckedTags}
                setCurrentCheckedTags={setCurrentCheckedTags}/>
              {confirmFilterSettingButton(onShowResultsTags)}
            </Panel>
            <Panel key="2" header={null} showArrow={false}>
              <DayPicker
                format={"MM/dd/yyyy"}
                selectedDays={filterDate}
                onDayClick={handleFilterDate}
              />
              {confirmFilterSettingButton(onShowResultsDate)}
            </Panel>
            {/* <Panel key="3" header={null} showArrow={false}>
              3
              {confirmFilterSettingButton(onShowResultsTime)}
            </Panel> */}
          </Collapse>
        </div>
      <Divider className="designerCardComponentDividerBottom"/>
    </div>
  );
}
