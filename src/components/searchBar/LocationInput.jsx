import React from "react";
import { Input, AutoComplete } from "antd";
import { AimOutlined } from '@ant-design/icons';
import "../../assets/css/searchBar/LocationInput.css";

export default function LocationSearch(props) {
    const { handleSearch } = props;

    return (
        <div className="locationInput">
            <h3 className="nearBy">near by</h3>
            <AutoComplete
                dropdownMatchSelectWidth={252}
                style={{
                    width: 300
                }}
                // options={options}
                // onSelect={onSelect}
                onSearch={()=>{}}
            >
                <Input.Search
                    // GPS icon inside input
                    prefix={
                        <AimOutlined
                            className="site-form-item-icon"
                            onClick={
                                // TODO: Prompt automatic location detection
                                ()=>{console.log("location")}
                            }
                        />
                    }
                    size="large"
                    placeholder="Where do you live?" // TODO: Extract string to string file
                    onSearch={handleSearch}
                    enterButton
                />
            </AutoComplete>
        </div>
    );
}
