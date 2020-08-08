import React, { useState, useEffect} from "react";
import { Input, AutoComplete } from "antd";
import PlacesAutocomplete from "react-places-autocomplete";
import { AimOutlined } from '@ant-design/icons';
import "../../../assets/scss/commonComponents/searchBar/LocationInput.scss";

export default function LocationSearch(props) {
    let {
        address,
        clearAddress,
        handleAddressChange,
        handleAddressSelect,
        handleSearch,
        handleGeolocation,
    } = props;

    return (
        <PlacesAutocomplete onChange={handleAddressChange} onSelect={handleAddressSelect} value={address}>
            {({ getInputProps, getSuggestionItemProps, suggestions, loading }) => (
                <React.Fragment>
                    <Input.Search
                        {...getInputProps({
                            id: "address-input"
                        })}
                        // GPS icon inside input
                        prefix={
                            <AimOutlined
                                className="site-form-item-icon"
                                onClick={handleGeolocation}
                            />
                        }
                        size="large"
                        placeholder="Your location" // TODO: Extract string to string file
                        onSearch={handleSearch}
                        enterButton
                    />
                    <div className="autocomplete-dropdown-container">
                        {loading ? <div>Loading...</div> : null}
                        {suggestions.map((suggestion, index) => {
                            const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
                            const style = suggestion.active
                                ? { backgroundColor: "#fafafa", cursor: "pointer", padding: 10 }
                                : { backgroundColor: "#ffffff", cursor: "pointer", padding: 10 };
                            const spread = {
                                ...getSuggestionItemProps(suggestion, {
                                    className,
                                    style
                                })
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
    );
}
