import React from 'react';
import CreateIntership from '../Components/CreateIntership';
import InternshipInsights from '../Components/InternshipInsights';
import InternshipTitle from '../Components/InternshipTitle';
import Sidebar from '../Components/Sidebar';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className='rightCont'>
          <div className='create'>
            <CreateIntership />
          </div>
          <div className='insight'>
            <InternshipInsights />
          </div>
          <div className='titleIntern'>
            <InternshipTitle />
          </div>
      </div>
    </div>
  )
}

export default Home;
