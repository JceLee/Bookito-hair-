import React from "react";
import { Menu, Dropdown, Button, DatePicker, TimePicker } from 'antd/lib/index';

export default function DesignerListFilter(props) {

    const { numberOfDesigners, location } = props;
    
    const types = ['Haircut', 'Perm', 'Colour']

    const typesMenu = ( 
        <Menu>
            {types.map((type, index) => (
                <Menu.Item key={index} className="typeBtn">{type}</Menu.Item>
            ))}
        </Menu>
    );

    return (
    <div className="designerListFilter">
        <div className="numberOfDesigners">
            {numberOfDesigners} in {location}
        </div>
        <div>
            <Dropdown overlay={typesMenu} trigger={['click']}>
                <Button className="filterBtn">
                    Types
                </Button>
            </Dropdown>
            <DatePicker className="filterBtn"/>
            <TimePicker className="filterBtn" format='HH:mm' minuteStep={10}/>
        </div>
    </div>
    );
}