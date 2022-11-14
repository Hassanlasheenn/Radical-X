import React, {useState } from 'react';
import '../Styles/CategoryContent.css';


const CategoryContent = () => {

    const [searchInput, setSearchInput] = useState('');
    const [categories, setCategories] = useState([]);

    
    const handleRemove = (id) => {
        const newCateg = categories.filter((item) => item.id !== id);

        setCategories(newCateg);
    }

    const handleAdd = (id) => {
        const newCategory = categories.concat({
            id: id,
            field: searchInput,
        });
        console.log(newCategory);
        setCategories(newCategory);
        setSearchInput('');
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    }


  return (
    <div className='contentContCateg'>
        <span className='categoryTitleTextCateg'>Category</span>
        <div className='categoryFormCateg'>
            <div className='formContCateg'>
                <input
                    type='text'
                    placeholder='Search Category'
                    onChange={handleChange}
                    value={searchInput}
                    className='placeholderCateg'
                />
                <button type='button' onClick={handleAdd} className='searchIconCateg' />
            </div>
            <div className='searchResultContCateg'>
            {categories.map((category) => {
                return (
                    <>
                        <div className='resultContCateg' key={category.id}> 
                            <span className='resultTextCateg'>{category.field}</span>
                            <button type='button' onClick={() => handleRemove(category.id)} className='closeBtnCateg' />
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
