import React from 'react';
import { Outlet } from 'react-router-dom';
import InternshipDesc from '../Components/InternshipDescription/InternshipDesc';
import Navbar from '../Components/InternshipDescription/Navbar';
import SettingsContent from '../Components/Settings/SettingsContent';

const Settings = () => {
  return (
    <>
        <Navbar />
        <InternshipDesc />
        <SettingsContent />

        <Outlet />
    </>
  )
}

export default Settings;
