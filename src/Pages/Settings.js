import React from 'react';
import { Outlet } from 'react-router-dom';
import InternshipDesc from '../Components/InternshipDescription/InternshipDesc';
import Navbar from '../Components/InternshipDescription/Navbar';
import SettingsContent from '../Components/Settings/SettingsContent';

// css & icons imports
import unTickCircle from '../images/untick-circle-newInternship.svg';

const Settings = () => {
  return (
    <>
        <Navbar title="Publish Internship" link={'done'} back={'surveys'}/>

        <div className='internshipBar'>
          <InternshipDesc name='Internship Description' icon={unTickCircle} />
          <InternshipDesc name='Internship Guide' icon={unTickCircle} />
          <InternshipDesc name='Surveys' icon={unTickCircle} />
          <InternshipDesc name='Settings' icon={unTickCircle} />
        </div>
        
        <SettingsContent />

        <Outlet />
    </>
  )
}

export default Settings;
