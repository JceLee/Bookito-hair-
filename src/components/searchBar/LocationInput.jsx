import React from "react";
import { Input, AutoComplete } from "antd";
import { AimOutlined } from '@ant-design/icons';
import "../../assets/scss/searchBar/LocationInput.scss";

export default function LocationSearch(props) {
    const { handleSearch } = props;

    const handleGeolocation = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position.coords);
            });
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    return (
        <div className="locationInput">
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
                            onClick={handleGeolocation}
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
