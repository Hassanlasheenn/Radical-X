import React, { useContext, useState } from 'react';

// css & icons import 
import '../../../Styles/CategoryContent.css';
import closeIcon from '../../../images/close.svg';
import { TickContext } from '../../../Context/useTickCircle';


const CategoryContent = () => {

    const [searchInput, setSearchInput] = useState('');
    const [categories, setCategories] = useState([]);

    const { setTick } = useContext(TickContext);

    const handleAdd = (e) => {
        if(searchInput.length === 0) {return 'disabled'}
        else if (e.key === 'Enter') {
            const newCategory = categories.concat({
                field: searchInput,
            });
            setCategories(newCategory);
            setSearchInput('');
            setTick("Category", true);
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    const handleRemove = (field) => {
        const categRemove = categories.filter((item) => item.field !== field);
        setCategories(categRemove);
        setTick("Category", false);
    }


  return (
    <div className='contentContCateg'>
        <span className='categoryTitleTextCateg'>Category</span>
        <div className='categoryFormCateg'>
            <input
                type='category'
                id='category'
                name='category'
                placeholder='Search Category'
                onKeyDown={handleAdd}
                onChange={handleChange}
                value={searchInput}
                required
            />
            <div className='searchResultContCateg'>
                {categories.map((category) => {
                    return (
                        <div className='resultContCateg' key={category.id}> 
                            <span className='resultTextCateg'>{category.field}</span>
                            <img src={closeIcon} alt='' type='button' onClick={() => handleRemove(category.field)} style={{ cursor: 'pointer' }} />
                        </div>
                    )
            })}
            </div>
        </div>
    </div>
  )
}

export default CategoryContent;
