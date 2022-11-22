import React, { useContext, useState } from 'react';
import { TickContext } from '../../../Context/useTickCircle';
import '../../../Styles/RecommendedRoles.css';

const RecommendedRoles = () => {

    const [searchRoles, setSearchRoles] = useState('');
    const [roles, setRoles] = useState([]);
    const { setActiveRoles } = useContext(TickContext);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchRoles(e.target.value);
    }

    const handleAdd = () => {
        const newRole = roles.concat({
            name: searchRoles,
        });
        setActiveRoles(true);
        setRoles(newRole);
        setSearchRoles('');
    }

    const handlePress = (e) => {
        if(e.key === 'Enter') {
            setActiveRoles(true);
            handleAdd();
        }
    }

    const handleRemove = (name) => {
        const rolDelete = roles.filter((item) => item.name !== name);
        setActiveRoles(false);
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
                <button type='button' onClick={handleAdd} className='searchIconRoles' />
            </div>
            <div className='searchResultContRoles'>
            {roles.map((role) => {
                return (
                    <>
                        <div className='resultContRoles' key={role.id}> 
                            <span className='resultTextRoles'>{role.name}</span>
                            <button type='button' onClick={() => handleRemove(role.name)} className='closeBtnRoles' />
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
