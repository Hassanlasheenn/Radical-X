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
                    <input 
                        className='nameFieldText'
                        placeholder='Name'
                        type="text"

                    />
                </div>
            </div>
            <div className='emailField'>
                <div className='smsLogo' />
                <div className='emailPlaceholder'>
                    <input 
                        className='emailFieldText'
                        placeholder='Email Adress'
                        type="text"
                    />
                </div>
            </div>
        </div>
        <div className='linkedinUrlForm'>
            <div className='linkLogo' />
            <div className='formText'>
                <input 
                    className='linkedinText'
                    placeholder='LinkedIn URL (optional)'
                    type="text"
                />
            </div>
        </div>
        <div className='pictureLogo'>
            <div className='imageLogo' />
        </div>
    </div>
  )
}

export default NewMentorDetails;
