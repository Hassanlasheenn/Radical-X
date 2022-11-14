import React from 'react';
import Navbar from '../Components/Navbar';
import InternshipDesc from '../Components/InternshipDesc';
import Categories from '../Components/Categories';
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
