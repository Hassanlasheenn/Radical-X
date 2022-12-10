import React, { useContext, useState } from 'react';
import { TickContext } from '../../Context/useTickCircle';

const SettingForm = ({ name1, name2, name3 }) => {

  const [setting, setSettings] =  useState('');

  const { setTick } = useContext(TickContext);

  const handleChange = (e) => {
    e.preventDefault();
    setSettings(e.target.value);

    if(setting.trim().length !== 0) {
      setTick("Basic Settings", true);
      setTick("Hero Image", true);
      setTick("Settings", true);
      setTick("Publish Internship", true);
    }
  }
  return (
      <div className='internshipUrlContainer'>
        <div className='urlInternField'>
          <span className='urlTitle'>Internship URL</span>
          <input 
            placeholder='radical-x-internship-url'
            type='text'
            className='textFieldUrl'
            value={setting}
            onChange={handleChange}
          />
        </div>

        <div className='accessContainer'>
          <span className='accessText'>Access</span>

          <div className='chechboxContainer'>
            <div className='privateContainer'>
              <input
                type='checkbox'
                className='privateCheckbox'
              /> 
              <span className='privateText'>{name1}</span>
            </div>

            <div className='hiddenContainer'>
              <input
                type='checkbox'
                className='hiddenCheckbox'
              /> 
              <span className='hiddenText'>{name2}</span>
            </div>
          </div>

        </div>

        <div className='securityContainer'>
          <span className='securityText'>Security</span>
          <div className='disableContainer'>
            <input 
              type='checkbox'
              className='disableCheckbox'
            />
            <span className='disableText'>{name3}</span>
          </div>
        </div>
      </div>
  )
}

export default SettingForm;
