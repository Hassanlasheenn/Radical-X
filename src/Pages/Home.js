import React from 'react';
import CreateIntership from '../Components/CreateIntership';
import InternshipInsights from '../Components/InternshipInsights';
import InternshipTitle from '../Components/InternshipTitle';
import Sidebar from '../Components/Sidebar/Sidebar';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className='home-container'>
        <Sidebar />
        <div className='right--cont'>
            <CreateIntership />
            <InternshipInsights />
            <InternshipTitle />
        </div>
    </div>
  )
}

export default Home;
