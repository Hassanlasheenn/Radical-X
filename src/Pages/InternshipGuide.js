import React from 'react';
import { Outlet } from 'react-router-dom';
import InternshipDesc from '../Components/InternshipDescription/InternshipDesc';
import Navbar from '../Components/InternshipDescription/Navbar';
import Guide from '../Components/InternshipGuide/Guide';

const InternshipGuide = () => {
  return (
    <>
        <Navbar />
        <InternshipDesc />
        <Guide />

        <Outlet />
    </>
  )
}

export default InternshipGuide;
