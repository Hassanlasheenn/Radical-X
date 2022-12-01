import React from 'react';
import NavBtns from './NavBtns';
import { Outlet, useNavigate } from 'react-router-dom';

// css import
import '../../Styles/Sidebar.css';
// icons imports
import radicalLogo from '../../images/RadicallX-Black-Logo 1.svg';
import dashboardIcon from '../../images/dashboard-3.svg';
import apprenticeIcon from '../../images/medal-star.svg';
import internIcon from '../../images/book.svg';
import jobIcon from '../../images/briefcase.svg';
import settingIcon from '../../images/setting-2.svg';
import avatar from '../../images/Rectangle 18895.svg';


const Sidebar = () => {

  const click = useNavigate();

  return (
    <>
      <div className='sidebar--container'>
          {/* company logo */}
          <div className='sidebar-container'>
              <img src={radicalLogo} alt='RadicalX Logo' />
              
              {/* categories */}
              <div className='sidebar-categories'>
                  <NavBtns name={'Dashboard'} icon={dashboardIcon} />
                  <NavBtns name={'Apprenticeships'} icon={apprenticeIcon} />
                  <NavBtns name={'Internships'} icon={internIcon} isActive onClick={() => click('home')}  />
                  <NavBtns name={'Jobs'} icon={jobIcon} />
                  <NavBtns name={'Settings'} icon={settingIcon} />
              </div> 
          </div>
          
          {/* user */}
          <div className='sidebar-container_author'>
              <img src={avatar} alt=''/>
              <p className='sidebar-container_author--text'>Adam Scott</p>
          </div>
      </div>

      <Outlet />

    </>
  )
}

export default Sidebar;
