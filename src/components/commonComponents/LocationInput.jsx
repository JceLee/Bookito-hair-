import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import PlacesAutocomplete from "react-places-autocomplete";

export default function LocationInput(props) {
  let {
    address,
    clearAddress,
    handleAddressChange,
    handleAddressSelect,
    handleSearch,
    handleGeolocation,
  } = props;

  return (
    <>
      <PlacesAutocomplete
        onChange={handleAddressChange}
        onSelect={handleAddressSelect}
        value={address}
      >
        {({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
          <React.Fragment>
            <Input
              {...getInputProps({
                id: "address-input",
              })}
              suffix={<SearchOutlined />}
              size="large"
              placeholder="Your location" // TODO: Extract string to string file
              onPressEnter={handleSearch}
            />
            <div className="autocompleteDropdownContainer">
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
    </>
  );
}
