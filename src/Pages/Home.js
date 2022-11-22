import React from 'react';
import CreateIntership from '../Components/Home/CreateIntership';
import InternshipInsights from '../Components/Home/InternshipInsights';
import InternshipTitle from '../Components/Home/InternshipTitle';
import Sidebar from '../Components/Home/Sidebar';
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
