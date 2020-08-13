import Geocode from "react-geocode";

// Set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyDUz5tzN9Fm76pLUherzsDE-jG0LKBEhIc");

// Set response language. Defaults to english.
Geocode.setLanguage("en");

// Set response region. Its optional.
Geocode.setRegion("us");

// Enable or disable logs. Its optional.
// Geocode.enableDebug();

// Get address from latidude & longitude.
export const reverseGeocode = (lat, lng) => {
  return Geocode.fromLatLng(lat, lng).then(
    (response) => {
      return response.results[0].formatted_address;
    },
    (error) => {
      console.error(error);
      return null;
    }
  );
};

// Get latidude & longitude from address.
export const geocode = (address) => {
  return Geocode.fromAddress(address).then(
    (response) => {
      return response.results[0].geometry.location;
    },
    (error) => {
      console.error(error);
      return null;
    }
  );
};
