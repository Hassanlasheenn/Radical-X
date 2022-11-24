import React, { useRef, useState } from 'react';

// css & icon imports 
import '../../../Styles/NewMentorDetails.css';
import picLogo from '../../../images/image.svg';
import userIcon from '../../../images/profile.svg';
import smsIcon from '../../../images/sms.svg';
import linkFieldIcon from '../../../images/link.svg';
// import linkIcon from '../../../images/link-internship.svg';

const NewMentorDetails = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [optional, setOptional] = useState('');

    const [file, setFile] = useState(null);
    const inputRef = useRef(null);


    const handleClick = () => {
        inputRef.current.click();
    }

    const handleFileChange = e => {
        const fileObj = setFile(URL.createObjectURL(e.target.files[0]));
        if(!fileObj) {
            return null;
        }
    }


    const handleName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handleOptional = (e) => {
        e.preventDefault();
        setOptional(e.target.value)
    }



  return (
    <div className='mentorContent'>
        <span className='mentorDetailsTitle'>Mentor Details</span>
        <img className='rectanglePhoto' src={file} alt='' style={{ width: '80px', height: '80px', borderRadius: '10px'}} />
        <div className='formInfos'>
            <div className='nameField'>
                <img src={userIcon} alt='' />
                <div className='namePlaceholder'>
                    <input 
                        className='nameFieldText'
                        placeholder='Name'
                        type="text"
                        onChange={handleName}
                        value={name}

                    />
                </div>
            </div>
            <div className='emailField'>
                <img src={smsIcon} alt='' />
                <div className='emailPlaceholder'>
                    <input 
                        className='emailFieldText'
                        placeholder='Email Adress'
                        type="text"
                        onChange={handleEmail}
                        value={email}
                    />
                </div>
            </div>
        </div>
        <div className='linkedinUrlForm'>
            <img src={linkFieldIcon} alt='' />
            <div className='formText'>
                <input 
                    className='linkedinText'
                    placeholder='LinkedIn URL (optional)'
                    type="text"
                    onChange={handleOptional}
                    value={optional}
                />
            </div>
        </div>
        <div className='pictureLogo'>
            <input style={{ display: 'none' }} ref={inputRef} type='file' onChange={handleFileChange} />
            <img src={picLogo} alt='' onClick={handleClick} />
        </div>
    </div>
  )
}

export default NewMentorDetails;
