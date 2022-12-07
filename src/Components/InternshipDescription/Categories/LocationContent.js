import React, { useState, useEffect, useRef, useContext } from 'react';
import { TickContext } from '../../../Context/useTickCircle';

// css & icons imports
import '../../../Styles/LocationContent.css';
import '../../../Styles/CategoryContent.css';
import arrowIcon from '../../../images/arrow-down.svg';


let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if(script.readyState) {
    script.onreadystatechange = () => {
      if(script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback()
      } 
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

const handleScriptLoad = (updateQuery, autoCompleteRef) => {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ["(cities)"], componentRestrictions: { country: "us" } }
  );
  autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () => 
  handlePlaceSelect(updateQuery)
  );
}

const handlePlaceSelect = async (updateQuery) => {
const addressObject = autoComplete.getPlace();
const query = addressObject.formatted_address;
updateQuery(query);
console.log(addressObject);
}

const LocationContent = () => {

  const [query, setQuery] = useState("");
  const [cntry, setCntry] = useState([]);
  const autoCompleteRef = useRef(null);
  const { setTick } = useContext(TickContext);

 useEffect(() => {
  loadScript(
    `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}&libraries=places`,
    () => handleScriptLoad(setQuery, autoCompleteRef)
  );
}, []);

  

  const handleChange = (e) => {
    setQuery(e?.label);
    const handleAdd = (value) => {
      const newCuntry = cntry.concat({
        value:value,
        label: e.target.value,
      });
      setCntry(newCuntry);
      setTick("Location", true);
    }
    handleAdd();
  }

  return (
    <>
    <div className='locationCont'>
        <span className='locationTitle'>Location</span>
          <div className='location-container'>
            <input 
              className='locFieldText'
              id='countries'
              type='countries'
              placeholder='Select Location'
              ref={autoCompleteRef}
              onChange={e => setQuery(e.target.value) & handleChange}
              value={query}
              required
            />
            <button onClick={handleChange} className='arrow-down'>
              <img src={arrowIcon} alt='' />
            </button>
          </div>
    </div>

    <div className='countryField'>
    {cntry.map((c) => {
      return (
        <>
          <div className='resultContCateg' key={c.id}>
            <span className='resultTextCateg'>{c.formatted_address}</span>
          </div>
        </>
        )
        })}
    </div>

    </>
  )
}

export default LocationContent;
