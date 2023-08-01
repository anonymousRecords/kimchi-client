import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Autocomplete from 'react-google-autocomplete';

const StyledSearch = styled.div`
    width: 390px;
    height: 71px;
    background-color: #F7F7F7;
    display: flex;
    justify-content: center;
    align-items: center;

    header {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }

    .search-bar {
        width: 318px;
        height: 48px;
        border-radius: 8px;
        background-color: #EEEEEE;
        border-style: none;
        padding: 14px;
    }
`

const SearchPage = () => {
    const [selectedPlace, setSelectedPlace] = useState(null);

    const handlePlaceSelect = (place) => {
        setSelectedPlace(place);
    }

    return (
        <StyledSearch>
            <header>
                <div className='arrow-back'>
                    <Link to="/boast">
                        <img src="/assets/icons/arrow-back.svg"/>
                    </Link>
                </div>
                <Autocomplete
                        className='search-bar'
                        onPlaceSelected={handlePlaceSelect}
                        types={['geocode']}
                        placeholder="장소를 검색해주세요"
                    >
                        {/* <img src='/assets/icons/search.svg' alt='search'/> */}
                </Autocomplete>
            </header>
            {selectedPlace && (
                <div>
                    <h2>Selected Place</h2>
                    <p>{selectedPlace.name}</p>
                    <p>{selectedPlace.formatted_address}</p>
                </div>
            )}
        </StyledSearch>
    );
}

export default SearchPage;
