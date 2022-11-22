import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Settings.css';

const SettingsContent = () => {
  return (
    <>
      <div className='settingsContainer'>

        <div className='basicSettingsCont'>
            <div className='menuLogoCont'>
                <div className='menuLogo'/>
            </div>

            <Link to={'basic-settings'} className='basicSettingBar'>
                <div className='basicTextContainer'>
                    <div className='basicTextCont'>
                        <div className='basicCont'>
                            <span className='basicText'>Basic Settings</span>
                        </div>
                    </div>

                    <div className='basicArrowRight'/>
                </div>
            </Link>
        </div>

        <div className='basicSettingsCont'>
            <div className='menuLogoCont'>
                <div className='menuLogo'/>
            </div>

            <Link to={'hero-image'} className='basicSettingBar'>
                <div className='basicTextContainer'>
                    <div className='basicTextCont'>
                        <div className='basicCont'>
                            <span className='heroText'>Hero Image</span>
                        </div>
                    </div>

                    <div className='basicArrowRight'/>
                </div>
            </Link>
        </div>


      </div>
    </>
  )
}

export default SettingsContent;
