import React, { useState } from 'react' // eslint-disable-line no-unused-vars
import MapContainer from '../components/SearchPage/MapContainer'
import styled from 'styled-components';
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
  }

  return (
    <StyledSearch>
      <SearchHeader className="inputForm" onSubmit={handleSubmit}>
        <Link to="/boast">
          <img src="/assets/icons/arrow-back.svg"/>
        </Link>
        <SearchBar placeholder="Please search for a location" onChange={onChange} value={InputText} onFocus={() => setInputText('')}/>
      </SearchHeader>
      <MapContainer searchPlace={Place} />
    </StyledSearch>
  )
}

const StyledSearch = styled.div`
  width: 390px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
`

const SearchHeader = styled.form`
  width: 390px;
  height: 71px;

  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 16px;
`

const SearchBar = styled.input`
  width: 318px;
  height: 48px;
  border-radius: 8px;
  background: #EEE;
  border: none;
  background-image: url('/assets/icons/search.svg');
  background-repeat: no-repeat;
  background-position: 12px center;
  padding-left: 40px;
  margin-left: 16px;
`

export default SearchPage;