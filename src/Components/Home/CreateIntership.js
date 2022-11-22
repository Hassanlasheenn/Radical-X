import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/CreateInternship.css';

function CreateIntership() {
  return (
    <div className='createContCreate'>
      <h4 className='internshipTitleCreate'>Internships</h4>
      <button className='createInternshipContCreate'>
        <div className='plusLogoCreate'/>

        <Link to={'/internships'} className='btnTextCreate'>Create New Internship</Link>
        
      </button>
    </div>
  )
}

export default CreateIntership;
