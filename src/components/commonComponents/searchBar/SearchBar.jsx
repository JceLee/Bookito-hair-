import React, { useState, useEffect } from 'react';
import { Form } from 'antd';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { useHistory } from 'react-router-dom';
import DesignerTypeCarousel from './DesignerTypeCarousel';
import LocationInput from './LocationInput';
import { reverseGeocode } from '../../../helpers/geocode';
import '../../../assets/scss/commonComponents/searchBar/SearchBar.scss';

export default function SearchBar() {
  const [designerType, setDesignerType] = useState();
  const [address, setAddress] = useState('');
  const [form] = Form.useForm();

  useEffect(() => {
    // TODO: is setFieldsValue working as intended?
    form.setFieldsValue({
      addressInput: '',
    });
  });

  const clearAddress = () => {
    form.setFieldsValue({
      addressInput: '',
    });
  };

  const handleAddressChange = (address) => {
    setAddress(address);
  };

  const handleAddressSelect = (address, placeID) => {
    handleAddressChange(address);
  };

  const getGeocodeByAddress = (address) => {
    geocodeByAddress(address)
      .then(async (results) => {
        return getLatLng(results[0]);
      })
      .then((latLng) => {
        return latLng;
      })
      .catch((error) => {
        console.error('Error', error);
        return null;
      });
  };

  const history = useHistory();
  const handleSearch = (location) => {
    const route = `/designer_list?type=${designerType}${
      location ? `&location=${location}` : ''
    }`;
    history.push(route);
  };

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        reverseGeocode(
          position.coords.latitude,
          position.coords.longitude
        ).then((address) => {
          if (address) {
            setAddress(address);
          } else {
            // TODO: Handle failure (ie. failure popover)
          }
        });
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className='searchBar'>
      <h3 className='searchBarText'>LookUp your new favorite</h3>
      <DesignerTypeCarousel setDesignerType={setDesignerType} />
      <h3 className='searchBarText'>near by</h3>
      <Form form={form} className='locationInput'>
        <Form.Item
          name='addressInput'
          initialValue=''
          rules={[{ required: true }]}
        >
          <LocationInput
            address={address}
            clearAddress={clearAddress}
            handleAddressChange={handleAddressChange}
            handleAddressSelect={handleAddressSelect}
            handleSearch={handleSearch}
            handleGeolocation={handleGeolocation}
          />
        </Form.Item>
      </Form>
    </div>
  );
}
