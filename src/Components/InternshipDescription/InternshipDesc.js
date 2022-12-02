import React, { useContext } from 'react';
import { TickContext } from '../../Context/useTickCircle';
import '../../Styles/InternshipDesc.css';
import unTickCircle from '../../images/untick-circle-newInternship.svg';

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
           { active[name] && icon ? <img src={icon} alt='' /> : <img src={unTickCircle} alt='' />} 
          <span className='descText'>{name}</span>
        </div>
      </div>
    </>
  )
}

export default InternshipDesc;