import React, { useMemo, useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

// css & icons imports
import '../../../Styles/LocationContent.css';
import '../../../Styles/CategoryContent.css';
import pinIcon from '../../../images/location.svg';

const LocationContent = () => {
  
  const [countries, setCountries] = useState('');
  const [cntry, setCntry] = useState([]);


  const options = useMemo(() => countryList().getData(), []);

  const handleChange = (e) => {
    console.log('Country selected');
    setCountries(e?.label);
    console.log(e.label)
    const handleAdd = (value) => {
      const newCuntry = cntry.concat({
        value:value,
        label: e.label,
      });
      console.log(newCuntry);
      setCntry(newCuntry);
    }
    handleAdd();
  }

  return (
    <>
    <div className='locationCont'>
        <span className='locationTitle'>Location</span>
        <div className='locationField'>
            <img src={pinIcon} alt='' />

              <Select 
                options={options}
                className='locFieldText'
                value={countries}
                onChange={handleChange}
              />
        </div>
    </div>
    <div className='countryField'>
    {cntry.map((c) => {
      return (
        <>
          <div className='resultContCateg' key={c.id}>
            <span className='resultTextCateg'>{c.label}</span>
          </div>
        </>
        )
        })}
    </div>

    </>
  )
}

export default LocationContent;
