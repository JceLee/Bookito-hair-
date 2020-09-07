import React from "react";
import { Input } from "antd";
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
            <Input.Search
              {...getInputProps({
                id: "address-input",
              })}
              size="large"
              placeholder="Type where you are looking for" // TODO: Extract string to string file
              onSearch={handleSearch}
            />
            <div className="autocompleteDropdownContainer">
              {loading ? <div>Loading...</div> : null}
              {suggestions.map((suggestion, index) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                const style = suggestion.active
                  ? {
                      backgroundColor: "#1b1b1b",
                      borderRadius: "10px",
                      color: "#fdfdfd",
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
