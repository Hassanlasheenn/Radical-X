import React, { useContext, useState } from 'react';

// css & icons import 
import '../../../Styles/CategoryContent.css';
import searchIcon from '../../../images/search-normal.svg';
import closeIcon from '../../../images/close.svg';
import { TickContext } from '../../../Context/useTickCircle';


const CategoryContent = () => {

    const [searchInput, setSearchInput] = useState('');
    const [categories, setCategories] = useState([]);

    const { setTick } = useContext(TickContext);

    const handleAdd = () => {
        if(searchInput.length === 0) {return 'disabled'}
        else {
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

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleAdd();
        }
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
            <div className='formContCateg'>
                <input
                    type='text'
                    placeholder='Search Category'
                    onKeyDown={handleKeyPress}
                    onChange={handleChange}
                    value={searchInput}
                    className='placeholderCateg'
                />
                <img src={searchIcon} alt='' type='button' onClick={handleAdd} />
            </div>
            <div className='searchResultContCateg'>
            {categories.map((category) => {
                return (
                    <>
                        <div className='resultContCateg' key={category.id}> 
                            <span className='resultTextCateg'>{category.field}</span>
                            <img src={closeIcon} alt='' type='button' onClick={() => handleRemove(category.field)} style={{ cursor: 'pointer' }} />
                        </div>
                    </>
                )

            })}
            </div>
        </div>
    </div>
  )
}

export default CategoryContent;
