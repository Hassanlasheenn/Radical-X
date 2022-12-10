import React, { useContext } from 'react';

// css & icons imports 
import '../../Styles/Settings.css';
import menuIcon from '../../images/menu.svg';
import arrowIcon from '../../images/arrow-right-internships.svg';
import { TickContext } from '../../Context/useTickCircle';

const SettingsContent = ({ title, onClick, tick }) => {

    const { active } = useContext(TickContext);


    const handleSettings = () => {
        if(onClick) {
            onClick();
        }
    }
  return (
        <div className='basicSettingsCont'>
            <div className='menuLogoCont'>
                <img src={menuIcon} alt='' />
            </div>

            <div onClick={handleSettings} className='basicSettingBar'>
                <div className='basicTextContainer'>
                    <div className='basicTextCont'>
                        <div className='basicCont'>
                            <span className='basicText'>{title}</span>
                            { active[title] &&
                                <span>{ tick && <img src={tick} alt='' /> }</span>
                            }
                        </div>
                    </div>

                    <img src={arrowIcon} alt='' />
                </div>
            </div>
        </div>
  )
}

export default SettingsContent;
