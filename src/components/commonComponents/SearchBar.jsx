import React from "react";
import { Input, AutoComplete } from "antd";
import { AimOutlined, SearchOutlined } from "@ant-design/icons";

export default function SearchBar(props) {
  const { handleSearch } = props;

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="searchBar">
      <AutoComplete dropdownMatchSelectWidth={252} onSearch={() => {}}>
        <Input.Search
          // GPS icon inside input
          // prefix={
          //   <AimOutlined
          //     className="site-form-item-icon"
          //     onClick={handleGeolocation}
          //   />
          // }
          suffix={<SearchOutlined onClick={handleSearch} />}
          size="large"
          placeholder="    Your location" // TODO: Extract string to string file
          onSearch={handleSearch}
          enterButton
        />
      </AutoComplete>
    </div>
  );
}
