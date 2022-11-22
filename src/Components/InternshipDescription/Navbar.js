import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TickContext } from '../../Context/useTickCircle';
import '../../Styles/Navbar.css';

const Navbar = () => {

    const { activeColor, setActiveColor  } = useContext(TickContext);

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
            <Link to={'/internship-guide'} style={{ textDecoration: 'none' }}>
                <div className='continueBtnNavbar' style={{ background: activeColor ? '#793EF5' : setActiveColor(false)}}>
                    <span   className='continueTextNavbar'
                            style={{ color: activeColor ? '#FFFFFF' : setActiveColor(false) }}
                    >
                        Continue to Next Step
                    </span>
                    <div className='forwardBtnNavbar' style={{ background: activeColor ? 'url(../images/arrow-right 4.png)' : setActiveColor(false) }} />
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Navbar;
