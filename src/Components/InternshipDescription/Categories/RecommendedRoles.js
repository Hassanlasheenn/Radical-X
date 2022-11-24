import React, { useState } from 'react';

// css & icon imports
import '../../../Styles/RecommendedRoles.css';
import closeIcon from '../../../images/close.svg';
import searchIcon from '../../../images/search-normal.svg';

const RecommendedRoles = () => {

    const [searchRoles, setSearchRoles] = useState('');
    const [roles, setRoles] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchRoles(e.target.value);
    }

    const handleAdd = () => {
        const newRole = roles.concat({
            name: searchRoles,
        });
        setRoles(newRole);
        setSearchRoles('');
    }

    const handlePress = (e) => {
        if(e.key === 'Enter') {
            handleAdd();
        }
    }

    const handleRemove = (name) => {
        const rolDelete = roles.filter((item) => item.name !== name);
        setRoles(rolDelete);
    }
  return (
    <div className='rolesCont'>
        <span className='rolesTitleText'>Recommended Roles</span>
        <div className='rolesFormCateg'>
            <div className='roleFormCont'>
                <input 
                    className='placeholderRoles'
                    placeholder='Search Roles'
                    onChange={handleChange}
                    value={searchRoles}
                    onKeyDown={handlePress}
                />
                <img src={searchIcon} alt='' type='button' onClick={handleAdd} className='searchIconRoles' />
            </div>
            <div className='searchResultContRoles'>
            {roles.map((role) => {
                return (
                    <>
                        <div className='resultContRoles' key={role.id}> 
                            <span className='resultTextRoles'>{role.name}</span>
                            <img src={closeIcon} alt='' type='button' onClick={() => handleRemove(role.name)} />
                        </div>  
                    </>
                )
            })}
                
            </div>
        </div>
    </div>
  )
}

export default RecommendedRoles;
