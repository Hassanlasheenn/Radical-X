import React, { useContext, useRef, useState } from 'react';

// css & icon imports 
import '../../../Styles/NewMentorDetails.css';
import picLogo from '../../../images/image.svg';
import { TickContext } from '../../../Context/useTickCircle';
import greenTick from '../../../images/icons8-ok.svg';

const inputs = {
    name: "",
    email: "",
    optional: ""
}

const NewMentorDetails = () => {

    const [field, setField] = useState(inputs);
    const [error, setError] = useState(false);
    const [file, setFile] = useState(null);
    const inputRef = useRef(null);

    const { setTick } = useContext(TickContext);

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleClick = () => {
        inputRef.current.click();
    }

    const handleFileChange = e => {
        const fileObj = setFile(URL.createObjectURL(e.target.files[0]));
        if(!fileObj) {
            return null;
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setField({ ...field, [name]: value });

        if(field["email"].length === 0) {
            setTick("Mentor Details", true);
        } else if(!isValidEmail(e.target.value)) {
            setError('Email is invalid');
        } else {
          setError(false);
        }
        setField(value);
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
                onChange={handleChange}
                name="name"

            />
            { !error ?
              <img className='green-email-tick' src={greenTick} alt ='' />
              :
              <span className='invalid-email'>Invalid Email</span> 
            }

            <input 
                placeholder='Email Adress'
                type="email-mentor"
                id='email-mentor'
                onChange={handleChange}
                name="email"
            />
        </div>

        <input 
            placeholder='LinkedIn URL (optional)'
            type="linkedin"
            id='linkedin'
            onChange={handleChange}
            value={field.optional}
            name="optional"
        />

        <div className='pictureLogo'>
            <input style={{ display: 'none' }} ref={inputRef} type='file' onChange={handleFileChange} />
            <img src={picLogo} alt='' onClick={handleClick} style={{ cursor: 'pointer'}} />
        </div>
    </div>
  )
}

export default NewMentorDetails;
