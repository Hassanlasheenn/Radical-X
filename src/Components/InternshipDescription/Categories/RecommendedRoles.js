import React, { useContext, useState } from 'react';

// css & icon imports
import '../../../Styles/RecommendedRoles.css';
import closeIcon from '../../../images/close.svg';
import { TickContext } from '../../../Context/useTickCircle';

const RecommendedRoles = () => {

    const [searchRoles, setSearchRoles] = useState('');
    const [roles, setRoles] = useState([]);

    const { setTick } = useContext(TickContext);


    const handleChange = (e) => {
        e.preventDefault();
        setSearchRoles(e.target.value);
    }

    const handleAdd = () => {
        if (searchRoles.length === 0) {return 'disabled'}
        else{
            const newRole = roles.concat({
                name: searchRoles,
            });
            setRoles(newRole);
            setSearchRoles('');
            setTick('Recommended Roles', true);
        }

    }

    const handlePress = (e) => {
        if(e.key === 'Enter') {
            handleAdd();
            setTick('Recommended Roles', true);
        }
    }

    const handleRemove = (name) => {
        const rolDelete = roles.filter((item) => item.name !== name);
        setRoles(rolDelete);
        setTick('Recommended Roles', false)
    }
  return (
    <div className='rolesCont'>
        <span className='rolesTitleText'>Recommended Roles</span>
        <div className='rolesFormCateg'>
            {/* <div className='roleFormCont'> */}
                <input 
                    type='role'
                    id='role'
                    placeholder='Search Roles'
                    onChange={handleChange}
                    value={searchRoles}
                    onKeyDown={handlePress}
                    required
                />
                {/* <img src={searchIcon} alt='' type='button' onClick={handleAdd} className='searchIconRoles' /> */}
            {/* </div> */}
            <div className='searchResultContRoles'>
            {roles.map((role) => {
                return (
                    <>
                        <div className='resultContRoles' key={role.id}> 
                            <span className='resultTextRoles'>{role.name}</span>
                            <img src={closeIcon} alt='' type='button' onClick={() => handleRemove(role.name)} style={{ cursor: 'pointer' }} />
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
