import React, { useContext } from 'react';
import { TickContext } from '../../Context/useTickCircle';
import '../../Styles/InternshipDesc.css';
import unTickCircle from '../../images/untick-circle-newInternship.svg';
import tickIntern from '../../images/tick-circle-internship-finish.svg';

const InternshipDesc = ({ icon, name, onClick }) => {

  const { active } = useContext(TickContext);

  const handleDesc = () => {
    if(onClick) {
      onClick()
    }
  }

  return (
    <>
      <div onClick={handleDesc}>
        <div className='internDesc'>
           { active[name] && icon ? <img src={tickIntern} alt='' /> : <img src={unTickCircle} alt='' />} 
          <span className='descText'>{name}</span>
        </div>
      </div>
    </>
  )
}

export default InternshipDesc;