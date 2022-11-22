import React, {useContext, useState } from 'react';
import { TickContext } from '../../../Context/useTickCircle';
import '../../../Styles/CategoryContent.css';


const CategoryContent = () => {

    const [searchInput, setSearchInput] = useState('');
    const [categories, setCategories] = useState([]);
    const { setActiveCateg } = useContext(TickContext);

    

    const handleAdd = () => {
        if(searchInput.length === 0) return 'disabled' && setActiveCateg(false);
        const newCategory = categories.concat({
            field: searchInput,
        });
        setActiveCateg(true);
        setCategories(newCategory);
        setSearchInput('');
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            setActiveCateg(true);
            handleAdd();
        }
    }

    const handleRemove = (field) => {
        const categRemove = categories.filter((item) => item.field !== field);

        setCategories(categRemove);
        setActiveCateg(false);
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
                <button type='button' className='searchIconCateg' />
            </div>
            <div className='searchResultContCateg'>
            {categories.map((category) => {
                return (
                    <>
                        <div className='resultContCateg' key={category.id}> 
                            <span className='resultTextCateg'>{category.field}</span>
                            <button type='button' onClick={() => handleRemove(category.field)} className='closeBtnCateg' />
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
