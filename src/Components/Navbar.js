import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='containerNavbar'>
        <div className='backBtnContNavbar'>
            <Link to={'/'} className='backBtnNavbar'>
                <div className='backArrowNavbar'/>
                <span className='backTextNavbar'>Back</span>
            </Link>
        </div>

        <div className='titleContNavbar'>
            <span className='titleTextNavbar'>Add New Internship</span>
        </div>
        
        <div className='continueBtnContNavbar'>
            <div className='continueBtnNavbar'>
                <span className='continueTextNavbar'>Continue to Next Step</span>
                <div className='forwardBtnNavbar' />
            </div>
        </div>
    </div>
  )
}

export default Navbar;
