import React, { useContext, useRef, useState } from 'react';

// css & icon imports 
import '../../../Styles/NewMentorDetails.css';
import picLogo from '../../../images/image.svg';
import { TickContext } from '../../../Context/useTickCircle';
// import linkIcon from '../../../images/link-internship.svg';

const NewMentorDetails = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [optional, setOptional] = useState('');

    const [file, setFile] = useState(null);
    const inputRef = useRef(null);

    const { setTick } = useContext(TickContext);


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
        setTick("Mentor Details", true);
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
            <input 
                className='nameFieldText'
                placeholder='Name'
                type="name"
                id='name'
                onChange={handleName}
                value={name}

            />
            <input 
                placeholder='Email Adress'
                type="email-mentor"
                id='email-mentor'
                onChange={handleEmail}
                value={email}
            />
        </div>

        <input 
            placeholder='LinkedIn URL (optional)'
            type="linkedin"
            id='linkedin'
            onChange={handleOptional}
            value={optional}
        />

        <div className='pictureLogo'>
            <input style={{ display: 'none' }} ref={inputRef} type='file' onChange={handleFileChange} />
            <img src={picLogo} alt='' onClick={handleClick} style={{ cursor: 'pointer'}} />
        </div>
    </div>
  )
}

export default NewMentorDetails;
