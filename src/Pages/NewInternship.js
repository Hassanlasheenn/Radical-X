import React from 'react';
import Navbar from '../Components/InternshipDescription/Navbar';
import InternshipDesc from '../Components/InternshipDescription/InternshipDesc';
import Categories from '../Components/InternshipDescription/Categories';
import { Outlet } from 'react-router-dom';

const NewInternship = () => {
  return (
    <>
        <Navbar />
        <InternshipDesc />
        <Categories />

        <Outlet />
    </>
  )
}

export default NewInternship;
