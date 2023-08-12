import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { SearchAtom } from "../../recoil/SearchAtom";
import { useNavigate } from "react-router-dom";

const { kakao } = window;

const MapContainer = ({ searchPlace }) => {
  const [searchList, setSearchList] = useRecoilState(SearchAtom);
  const navigate = useNavigate();

  MapContainer.propTypes = {
    searchPlace: PropTypes.string.isRequired,
  };
  // 검색결과 배열에 담아줌
  const [Places, setPlaces] = useState([]);

  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    // var markers = []
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
        // 페이지 목록 보여주는 displayPagination() 추가
        displayPagination(pagination);
        setPlaces(data);
      }
    }

    // 검색결과 목록 하단에 페이지 번호 표시
    function displayPagination(pagination) {
      var paginationEl = document.getElementById("pagination"),
        fragment = document.createDocumentFragment(),
        i;

      // 기존에 추가된 페이지 번호 삭제
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }

      for (i = 1; i <= pagination.last; i++) {
        var el = document.createElement("a");
        el.href = "#";
        el.innerHTML = i;

        if (i === pagination.current) {
          el.className = "on";
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i);
            };
          })(i);
        }

        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(
          '<div style="padding:5px; font-size:10px;">' +
            place.place_name +
            "<br/>" +
            (place.road_address_name || place.address_name) +
            "</div>"
        );
        infowindow.open(map, marker);
      });
    }
  }, [searchPlace]);

  return (
    <div>
      <div
        id="myMap"
        style={{
          width: "358px",
          height: "300px",
          borderRadius: "8px",
        }}
      ></div>
      <ResultList>
        {Places.slice(0, 5).map((item, i) => (
          <div key={i} style={{ marginTop: "8px" }}>
            {/* <span>{i + 1}</span> */}
            <ResultItem
              onClick={() => {
                const placeNameToAdd = item.place_name;
                const addressToAdd =
                  item.road_address_name || item.address_name;
                setSearchList([placeNameToAdd, addressToAdd]);
                console.log(searchList);
                navigate("/compelete");
              }}
            >
              <PlaceName>{item.place_name}</PlaceName>
              {item.road_address_name ? (
                <div>
                  <PlaceAddress>{item.road_address_name}</PlaceAddress>
                  {/* <span>{item.address_name}</span> */}
                </div>
              ) : (
                <PlaceAddress>{item.address_name}</PlaceAddress>
              )}
              {/* <span>{item.phone}</span> */}
            </ResultItem>
          </div>
        ))}
        <PaginationContainer id="pagination"></PaginationContainer>
      </ResultList>
    </div>
  );
};

const ResultList = styled.div`
  width: 358px;
  height: calc(100vh - 51px);
  margin-top: 24px;
`;

const ResultItem = styled.div`
  width: 358px;
  height: 60px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  padding: 12px;
  cursor: pointer;

  &:hover {
    border: 0.5px solid black;
  }
`;

const PlaceName = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 6px;
`;

const PlaceAddress = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const PaginationContainer = styled.div`
  width: 358px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 10px;
  a {
    color: #c9c9c9;

    &.on {
      color: black;
      font-weight: 600;
    }
  }
`;

export default MapContainer;
