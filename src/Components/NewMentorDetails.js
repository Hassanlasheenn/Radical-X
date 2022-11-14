import React from 'react';
import '../Styles/NewMentorDetails.css';

const NewMentorDetails = () => {
  return (
    <div className='mentorContent'>
        <span className='mentorDetailsTitle'>Mentor Details</span>
        <div className='rectanglePhoto' />
        <div className='formInfos'>
            <div className='nameField'>
                <div className='profileLogo' />
                <div className='namePlaceholder'>
                    <span className='nameFieldText'>Name</span>
                </div>
            </div>
            <div className='emailField'>
                <div className='smsLogo' />
                <div className='emailPlaceholder'>
                    <span className='emailFieldText'>Email Address</span>
                </div>
            </div>
        </div>
        <div className='linkedinUrlForm'>
            <div className='linkLogo' />
            <div className='formText'>
                <span className='linkedinText'>LinkedIn URL (optional)</span>
            </div>
        </div>
        <div className='pictureLogo'>
            <div className='imageLogo' />
        </div>
    </div>
  )
}

export default NewMentorDetails;
