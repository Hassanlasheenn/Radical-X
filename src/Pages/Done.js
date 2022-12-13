import React from 'react';
import BackBtn from '../Components/Buttons/Button_1';
import { useNavigate } from 'react-router-dom';

const Done = () => {

    const navigate = useNavigate();
  return (
    <div style={{ 
        height: '50vh', 
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-60%, -60%)',
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize: '5rem',
        fontWeight: '100',
        }}
    >
      <p style={{ marginBottom: '30px'}}>Internship Published! 🚀</p>

        <BackBtn onClick={() => navigate('/')}>
            <p style={{ transform: 'translate(-15px, 0)'}}>Back to Home</p>
        </BackBtn>
    </div>
  )
}

export default Done;