import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import InternshipDesc from '../Components/InternshipDescription/InternshipDesc';
import Navbar from '../Components/InternshipDescription/Navbar';
import SettingsContent from '../Components/Settings/SettingsContent';

// css & icons imports
import unTickCircle from '../images/untick-circle-newInternship.svg';
import tickCatIcon from '../images/tick-circle.svg';

const Settings = () => {

  const click = useNavigate();

  return (
    <>
        <Navbar title="Publish Internship" link={'done'} back={'surveys'}/>

        <div className='internshipBar'>
          <InternshipDesc name='Internship Description' icon={unTickCircle} />
          <InternshipDesc name='Internship Guide' icon={unTickCircle} />
          <InternshipDesc name='Surveys' icon={unTickCircle} />
          <InternshipDesc name='Settings' icon={unTickCircle} />
        </div>

        <div className='settingsContainer'>
          <SettingsContent title='Basic Settings' onClick={() => click('basic-settings')} tick={tickCatIcon} /> 
          <SettingsContent title='Hero Image' onClick={() => click('hero-image')} tick={tickCatIcon}/> 
        </div>

        <Outlet />
    </>
  )
}

export default Settings;
