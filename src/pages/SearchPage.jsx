import GooglePlacesAutocomplete, { getLatLng } from 'react-google-places-autocomplete';
import { geocodeByPlaceId } from 'react-google-places-autocomplete';
import { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const StyledSearch = styled.div`
  display: flex;
  .search-bar {
    width: 300px;
    height: 100px;
    background-color: blue;
  }
`

function SearchPage() {
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
  const [value, setValue] = useState(null);
  const navigate = useNavigate();

  return (
    <StyledSearch>
      <img src='/assets/icons/arrow-left.svg'/>
      <GooglePlacesAutocomplete
        className="search-bar"
            apiOptions={{ language: 'en' }}
            autocompletionRequest={{
              bounds: [
                { lat: 50, lng: 50 },
                { lat: 100, lng: 100 }
              ],
              componentRestrictions: {
                country: ['KR'],
              }
            }}
            selectProps={{
              value,
              onChange: (value)=>{
                setValue(value)
                console.log(value);
                let place_id = value['value']['place_id']
                console.log(place_id);
                geocodeByPlaceId(place_id)
                  .then(results => {
                    console.log(results);
                    return getLatLng(results[0])
                  }
                  )
                  .then(({ lat, lng }) =>{
                    console.log('Successfully got latitude and longitude', { lat, lng })
                    navigate('/compelete');
                  })
                  .catch(error => console.error(error));
              },
            }}
        apiKey={GOOGLE_API_KEY}
      />
    </StyledSearch>
  );
}

export default SearchPage;