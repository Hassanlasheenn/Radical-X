import React from 'react';
import { useNavigate } from 'react-router-dom';

// button imports 
import BtnSec from '../Buttons/Button_2';
import BackBtn from '../Buttons/Back-Button';

// css & icons import 
import '../../Styles/Navbar.css';
import arrowRightIcon from '../../images/arrow-right.svg';
import arrowLeftIcon from '../../images/arrow-left.svg';



const Navbar = ({ title, link, back }) => {
    const navigate = useNavigate();
    

  return (
    <div className='containerNavbar'>
        <div className='backBtnContNavbar'>
                <BackBtn icon={arrowLeftIcon} onClick={() => navigate(`/${back}`)}>
                    Back
                </BackBtn>
        </div>

        <div className='titleContNavbar'>
            <span className='titleTextNavbar'>Add New Internship</span>
        </div>
        
        <div className='continueBtnContNavbar'>
            <BtnSec icon={arrowRightIcon} onClick={() => navigate(`/${link}`)}>
                {title}
            </BtnSec>
        </div>

        
    </div>
  )
}

export default Navbar;