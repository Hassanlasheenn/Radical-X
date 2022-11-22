import React from 'react';
import { Outlet } from 'react-router-dom';
import InternshipDesc from '../Components/InternshipDescription/InternshipDesc';
import Navbar from '../Components/InternshipDescription/Navbar';
import SurveysContent from '../Components/Surveys/SurveysContent';

const Surveys = () => {
  return (
    <>
        <Navbar />
        <InternshipDesc />
        <SurveysContent />

        <Outlet />
    </>
  )
}

export default Surveys;
