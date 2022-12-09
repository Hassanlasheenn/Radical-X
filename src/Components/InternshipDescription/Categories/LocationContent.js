import React, { useState, useEffect, useRef, useContext} from 'react';
import { TickContext } from '../../../Context/useTickCircle';

// css & icons imports
import '../../../Styles/LocationContent.css';
import '../../../Styles/CategoryContent.css';
import arrowIcon from '../../../images/arrow-down.svg';



const apiKey = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
const mapsApiJs = 'https://maps.googleapis.com/maps/api/js';

function loadAsyncScript(src) {
  return new Promise(res => {
    const script = document.createElement("script");
    Object.assign(script, {
      type: 'text/javascript',
      async: true,
      src
    })
    script.addEventListener('load', () => res(script));
    document.head.appendChild(script);
  })
}


const extractAddress = (place) => {

  const address = {
  country: ""
  }
  
  if(!Array.isArray(place?.address_components)) {
    return address;
  }

  place.address_components.forEach(component => {
    const types = component.types;
    const value = component.long_name;

    if(types.includes("locality")) {
      address.city = value;
    }

    if (types.includes("country")) {
      address.country = value;
    }
});
  return address;
}


const LocationContent = () => {

  const autoCompleteRef = useRef(null);
  const [search, setSearch] = useState({});
  const { setTick } = useContext(TickContext);

  // init map script
  const initMapScript = () => {
    // if(window.google) {
    //   // return Promise.res;
    // }
    const src = `${mapsApiJs}?key=${apiKey}&libraries=places&v=weekly`;
    return loadAsyncScript(src);
  }

  const onChangeAddress = (autocomplete) => {
    const place = autocomplete.getPlace();
    setSearch(extractAddress(place));
    setTick("Location", true);
  }

  // init autocomplete
  const initAutoComplete = () => {
    if(!autoCompleteRef.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(autoCompleteRef.current);
    autocomplete.setFields(["address_component", "geometry"]);
    autocomplete.addListener('place_changed', () => onChangeAddress(autocomplete));
  }

  // load map script after mounted
  useEffect(() => {
    initMapScript().then(() => initAutoComplete())
  }, []);


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
            />
            <button className='arrow-down'>
              <img src={arrowIcon} alt='' />
            </button>
          </div>
    </div>

    <div className='countryField'>
      {/* <ul className='countries-container'> */}
        <li className='country-name'>{search.country}</li>
      {/* </ul> */}
    </div>

    </>
  )
}

export default LocationContent;

