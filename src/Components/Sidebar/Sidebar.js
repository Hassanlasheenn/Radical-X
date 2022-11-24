import React from 'react';
// css import
import '../../Styles/Sidebar.css';
// images imports
import radicalLogo from '../../images/RadicallX-Black-Logo 1.svg';
import dashboardIcon from '../../images/dashboard-3.svg';
import apprenticeIcon from '../../images/medal-star.svg';
import internIcon from '../../images/book.svg';
import jobIcon from '../../images/briefcase.svg';
import settingIcon from '../../images/setting-2.svg';
import avatar from '../../images/Rectangle 18895.svg'


const Sidebar = () => {
  return (
    <div className='sidebar--container'>
        {/* company image */}
        <div className='sidebar-container'>
        <img src={radicalLogo} alt='' className='sidebar__radical-logo' />
        {/* categories */}
        <div className='sidebar-categories'>
            <div className='categories-dashboard'>
                <img src={dashboardIcon} alt='' className='categories__dash-logo'/>
                <p className='category-text'>Dashboard</p>
            </div>
            <div className='categories-apprentice'>
                <img src={apprenticeIcon} alt='' className='categories__appren-logo'/>
                <p className='category-text'>Apprenterships</p>
            </div>
            <div className='categories-internship'>
                <img src={internIcon} alt='' className='categories__intern-logo'/>
                <p className='internship-text'>Internships</p>
            </div>
            <div className='categories-jobs'>
                <img src={jobIcon} alt='' className='categories__jobs-logo'/>
                <p className='category-text'>Jobs</p>
            </div>
            <div className='categories-setting'>
                <img src={settingIcon} alt='' className='categories__settings-logo'/>
                <p className='category-text'>Settings</p>
            </div>
        </div>
        </div>
        {/* user */}
        <div className='sidebar-container_author'>
            <img src={avatar} alt='' className='rectangle-logo'/>
            <p className='sidebar-container_author--text'>Adam Scott</p>
        </div>
    </div>
  )
}

export default Sidebar;
