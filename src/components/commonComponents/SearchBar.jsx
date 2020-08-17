import React from "react";
import { Input, AutoComplete, Select, Menu, Dropdown } from "antd";
import PlacesAutocomplete from "react-places-autocomplete";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchBar(props) {
  let {
    address,
    clearAddress,
    handleAddressChange,
    handleAddressSelect,
    handleSearch,
    handleGeolocation,
  } = props;

  const typeSelector = (
    <Select
      className="typeSelector"
      placeholder="Choose type"
      showArrow={false}
    >
      <Select.Option value="Hair Designer">Hair Designer</Select.Option>
      <Select.Option value="Nail Artist">Nail Artist</Select.Option>
      <Select.Option value="Makeup Artist">Makeup Artist</Select.Option>
    </Select>
  );

  return (
    <div className="searchBar">
      <PlacesAutocomplete
        onChange={handleAddressChange}
        onSelect={handleAddressSelect}
        value={address}
      >
        {({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
          <React.Fragment>
            {/* Mobile view */}

            <Input.Group className="mobileSearchBar">
              {typeSelector}
              <div className="rearText">Near by</div>
              <Input.Search
                prefix="Location"
                className="locationSelector"
                {...getInputProps({
                  id: "address-input",
                })}
                size="large"
                // placeholder="Your location" // TODO: Extract string to string file
                onSearch={handleSearch}
              />
            </Input.Group>

            {/* Except mobile view */}

            <Input.Group className="notMobileSearchBar">
              <Input.Search
                prefix="Location"
                className="locationSelector"
                {...getInputProps({
                  id: "address-input",
                })}
                size="large"
                // placeholder="Your location" // TODO: Extract string to string file
                onSearch={handleSearch}
                addonBefore={typeSelector}
              />
            </Input.Group>

            {/* Location auto complete container */}

            <div className="autocomplete-dropdown-container">
              {loading ? <div>Loading...</div> : null}
              {suggestions.map((suggestion, index) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                const style = suggestion.active
                  ? {
                      backgroundColor: "#fafafa",
                      cursor: "pointer",
                      padding: 10,
                    }
                  : {
                      backgroundColor: "#ffffff",
                      cursor: "pointer",
                      padding: 10,
                    };
                const spread = {
                  ...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  }),
                };

                return (
                  <div {...spread} key={`${suggestion.id}-${index}`}>
                    <div>{suggestion.description}</div>
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        )}
      </PlacesAutocomplete>
    </div>
  );
}
