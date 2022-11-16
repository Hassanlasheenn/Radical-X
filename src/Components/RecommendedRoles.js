import React, { useState } from 'react';
import '../Styles/RecommendedRoles.css';

const RecommendedRoles = () => {

    const [searchRoles, setSearchRoles] = useState('');
    const [roles, setRoles] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchRoles(e.target.value);
    }

    const handleAdd = (id) => {
        const newRole = roles.concat({
            id:id,
            name: searchRoles,
        });
        setRoles(newRole);
        setSearchRoles('');
    }

    const handleRemove = (id) => {
        const rolDelete = roles.filter((item) => item.id !== id);

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
                />
                <button type='button' onClick={handleAdd} className='searchIconRoles' />
            </div>
            <div className='searchResultContRoles'>
            {roles.map((role) => {
                return (
                    <>
                        <div className='resultContRoles' key={role.id}> 
                            <span className='resultTextRoles'>{role.name}</span>
                            <button type='button' onClick={() => handleRemove(role.id)} className='closeBtnRoles' />
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
