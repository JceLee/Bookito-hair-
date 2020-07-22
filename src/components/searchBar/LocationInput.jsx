import React from "react";
import { Input, AutoComplete } from "antd";
import { Route } from "react-router-dom"
import TestView from "./TestView"
import { AimOutlined } from '@ant-design/icons';

export default function LocationSearch() {
    const handleSearch = value => {
        return (<Route exact path="/TestView/:id" component={TestView} />)
    };

    return (
        <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{
                width: 300
            }}
            // options={options}
            // onSelect={onSelect}
            onSearch={handleSearch}
        >
            <Input.Search
                // GPS icon inside input
                prefix={
                    <AimOutlined
                        className="site-form-item-icon"
                        onClick={
                            // TODO: Prompt automatic location detection
                            ()=>{}
                        }
                    />
                }
                size="large"
                placeholder="Where do you live?" // TODO: Extract string to string file
                onSearch={()=>console.log(1)}
                enterButton
            />
        </AutoComplete>
    );
}
