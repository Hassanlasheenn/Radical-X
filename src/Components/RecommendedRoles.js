import React from 'react';
import '../Styles/RecommendedRoles.css';

const RecommendedRoles = () => {
  return (
    <div className='rolesCont'>
        <span className='rolesTitleText'>Recommended Roles</span>
        <div className='rolesFormCateg'>
            <div className='roleFormCont'>
                <span className='placeholderRoles'>Search Roles</span>
                <div className='searchIconRoles' />
            </div>
            <div className='searchResultContRoles'>
                <div className='resultContRoles'> 
                    <span className='resultTextRoles'>Fullstack Developer</span>
                    <div className='closeBtnRoles' />
                </div>
                <div className='resultCont2Roles'> 
                    <span className='resultText2Roles'>Backend Developer </span>
                    <div className='closeBtnRoles'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecommendedRoles;
