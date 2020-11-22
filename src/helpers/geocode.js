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

// Rough calculation of distance between two LatLng in KM.
export const getDistanceFromLatLonInKm = (lat1, lng1, lat2, lng2) => {
  const degToRad = (deg) => {
    return deg * (Math.PI / 180);
  };
  let R = 6371;
  let dLat = degToRad(lat2 - lat1);
  let dLon = degToRad(lng2 - lng1);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degToRad(lat1)) *
      Math.cos(degToRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;
  let format_distance = d < 1 ? "Less than 1" : Math.round(d);
  return format_distance;
};
