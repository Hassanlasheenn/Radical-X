import React from 'react';

// css & icons imports 
import '../../Styles/Settings.css';
import menuIcon from '../../images/menu.svg';
import arrowIcon from '../../images/arrow-right-internships.svg';

const SettingsContent = ({ title, onClick }) => {

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
                        </div>
                    </div>

                    <img src={arrowIcon} alt='' />
                </div>
            </div>
        </div>
  )
}

export default SettingsContent;
