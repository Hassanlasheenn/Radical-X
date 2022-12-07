import React from 'react';
import CreateIntership from '../Components/InternshipHome/CreateInternship';
import InternshipInsights from '../Components/InternshipHome/InternshipInsights';
import InternshipTitle from '../Components/InternshipHome/InternshipTitle';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className='right--cont'>
        <CreateIntership />
        <InternshipInsights />
        <InternshipTitle />
    </div>
  )
}

export default Home;
