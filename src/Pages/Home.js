import React from 'react';
import CreateIntership from '../Components/InternshipHome/CreateInternship';
import InternshipInsights from '../Components/InternshipHome/InternshipInsights';
import InternshipTitle from '../Components/InternshipHome/InternshipTitle';
import Sidebar from '../Components/Sidebar/Sidebar';
import '../Styles/Home.css';

const Home = () => {
  return (
    <>
    <Sidebar />
    <div className='right--cont'>
        <CreateIntership />
        <InternshipInsights />
        <InternshipTitle />
    </div>
    </>
  )
}

export default Home;
