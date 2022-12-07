import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TickContext } from '../../Context/useTickCircle';

// button imports 
import BtnSec from '../Buttons/Button_2';
import BackBtn from '../Buttons/Back-Button';

// css & icons import 
import '../../Styles/Navbar.css';
import arrowRightIcon from '../../images/arrow-right.svg';
import arrowLeftIcon from '../../images/arrow-left.svg';
import whiteArrowIcon from '../../images/arrow-right-white.svg';



const Navbar = ({ title, link, back, isActive }) => {

    const { active } = useContext(TickContext);

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
        {active[title] ?
            <BtnSec icon={whiteArrowIcon} onClick={() => navigate(`/${link}`)}>
                {title}
            </BtnSec>
            :
            <BtnSec icon={arrowRightIcon} className='continueBtnNavbar' onClick={() => navigate(`/${link}`)}>
                {title}
            </BtnSec>
        }
        </div>

        
    </div>
  )
}

export default Navbar;