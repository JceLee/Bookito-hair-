import React from "react";
import { Input } from "antd";
import PlacesAutocomplete from "react-places-autocomplete";

export default function LocationInput(props) {
  let {
    address,
    handleAddressChange,
    handleAddressSelect,
    handleSearch,
    allowClear,
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
            {!!handleSearch ?
              <Input.Search
                {...getInputProps({
                  id: "address-input",
                })}
                size="large"
                placeholder="Where should we look?"
                onSearch={handleSearch}
              />
              :<Input
                {...getInputProps({
                  id: "address-input",
                })}
                placeholder="Address"
                autoComplete="dontshow"
                allowClear={allowClear}
              />
            }
            <div className="autocompleteDropdownContainer">
              {loading ? <div className="autocompleteDropdownContainerLoading">Loading...</div> : null}
              {suggestions.map((suggestion, index) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                const style = suggestion.active
                  ? {
                      backgroundColor: "#ff7373",
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
