import React from 'react';

// components imports 
import Navbar from '../Components/InternshipDescription/Navbar';
import InternshipDesc from '../Components/InternshipDescription/InternshipDesc';
import Categories from '../Components/InternshipDescription/Categories';
import { Outlet, useNavigate } from 'react-router-dom';

// css & icons imports 
import arrowRightBtn from '../images/arrow-right-internships.svg';
import addMoreSq from '../images/add-square-newInternship.svg';
import unTickCircle from '../images/untick-circle-newInternship.svg';



const NewInternship = () => {

  const navigate = useNavigate();

  return (
    <>
        {/* passing props for the label of the button */}
        <Navbar title="Continue to Next Step" link={'internship-guide'} back={'/'} />


        <div className='internshipBar'>
          <InternshipDesc name='Internship Description' icon={unTickCircle} />
          <InternshipDesc name='Internship Guide' icon={unTickCircle} />
          <InternshipDesc name='Surveys' icon={unTickCircle} />
          <InternshipDesc name='Settings' icon={unTickCircle} />
        </div>

        <div className='categoryContCategory'>
          <Categories name='Category' icon={arrowRightBtn} onClick={() => navigate('category')} />
          <Categories name='Description' icon={arrowRightBtn} onClick={() => navigate('description')} />
          <Categories name='Location' icon={arrowRightBtn} onClick={() => navigate('location')} />
          <Categories name='Benefits' icon={arrowRightBtn} onClick={() => navigate('benefits')} />
          <Categories name='Intro Video' icon={arrowRightBtn} onClick={() => navigate('intro-video')} />
          <Categories name='Mentor Details' icon={arrowRightBtn} onClick={() => navigate('mentor-details')} />
          <Categories name='Recommended Roles' icon={arrowRightBtn} onClick={() => navigate('recommended-roles')} />
          <Categories name='Web Links & Resources' icon={arrowRightBtn} onClick={() => navigate('links')} />

          {/* Add more bar */}
          <div className='assessmentBarCategory'>
            <div className='assessmentBarContCategory'>
              <img src={addMoreSq} alt='' />
              <span className='addTextCategory'>Add More</span> 
            </div>
          </div> 
        </div>

        <Outlet />
    </>
  )
}

export default NewInternship;
