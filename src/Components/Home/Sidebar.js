import React from 'react';
import '../../Styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div>
      <div className='containerSidebar'>
    <div className='subContainerSidebar'>
    <div className='logoContainerSidebar' />
    <div className='categoriesContainerSidebar'>
        <div className='dashboardSidebar'>
            <div className='logoIcon1Sidebar'/>
            <div className='categorySidebar'>Dashboard</div>
        </div>
        <div className='apprentershipsSidebar'>
            <div className='logoIcon2Sidebar'></div>
            <span className='categorySidebar'>Apprenterships</span>
        </div>
        <div className='internshipsSidebar'>
            <div className='logoIcon3Sidebar'></div>
            <div className='internshipSidebar'>Internships</div>
        </div>
        <div className='jobsSidebar'>
            <div className='logoIcon4Sidebar'></div>
            <span className='categorySidebar'>Jobs</span>
        </div>
        <div className='settingsSidebar'>
            <div className='logoIcon5Sidebar'></div>
            <span className='categorySidebar'>Settings</span>
        </div>
    </div>
    </div>
    <div className='authorContainerSidebar'>
        <div className='rectangleSidebar'></div>
        <span className='authorSidebar'>Adam Scott</span>
    </div>

    </div>
    </div>
  )
}

export default Sidebar;
