import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Categories.css';

const Categories = () => {

  return (
    <div className='categoryContCategory'>
    <div className='categoryBarCategory'>
        <div className='menuIconCategory' />
        <Link to={'category'} className='categoryBarContCategory'>
          <div className='textContCategory'>
            <span className='categoryTextCategory'>Category</span>
          </div>
          <div className='btnIconCategory' /> 
        </Link>
      </div>
      <div className='categoryBarCategory'>
        <div className='menuIconCategory' />
        <Link to={'description'}   className='categoryBarContCategory'>
          <div className='textContCategory'>
            <span className='descTextCategory'>Description</span>
          </div>
          <div className='btnIconCategory' /> 
        </Link>
      </div>
      <div className='categoryBarCategory'>
        <div className='menuIconCategory' />
        <Link to={'location'}   className='categoryBarContCategory'>
          <div className='textContCategory'>
            <span className='locationTextCategory'>Location</span>
          </div>
          <div className='btnIconCategory' /> 
        </Link>
      </div>
      <div className='categoryBarCategory'>
        <div className='menuIconCategory' />
        <Link to={'benefits'}   className='categoryBarContCategory'>
          <div className='textContCategory'>
            <span className='benefitsTextCategory'>Benefits</span>
          </div>
          <div className='btnIconCategory' /> 
        </Link>
      </div>
      <div className='categoryBarCategory'>
        <div className='menuIconCategory' />
        <Link to={'intro-video'}  className='categoryBarContCategory'>
          <div className='textContCategory'>
            <span className='introTextCategory'>Intro Video</span>
          </div>
          <div className='btnIconCategory' /> 
        </Link>
      </div>
      <div className='categoryBarCategory'>
        <div className='menuIconCategory' />
        <Link to={'mentor-details'} className='categoryBarContCategory'>
          <div className='textContCategory'>
            <span className='mentorTextCategory'>Mentor Details</span>
          </div>
          <div className='btnIconCategory' /> 
        </Link>
      </div>
      <div className='categoryBarCategory'>
        <div className='menuIconCategory' />
        <Link to={'recommended-roles'}   className='categoryBarContCategory'>
          <div className='textContCategory'>
            <span className='rolesTextCategory'>Recommended Roles</span>
          </div>
          <div className='btnIconCategory' /> 
        </Link>
      </div>
      <div className='categoryBarCategory'>
        <div className='menuIconCategory' />
        <Link to={'links'}   className='categoryBarContCategory'>
          <div className='textContCategory'>
            <span className='linksTextCategory'>Web Links & Resources</span>
          </div>
          <div className='btnIconCategory' /> 
        </Link>
      </div>

      <div className='assessmentBarCategory'>
        <div className='assessmentBarContCategory'>
          <div className='squareIconCategory' />
          <span className='addTextCategory'>Add More</span> 
        </div>
      </div>
    </div>
  )
}

export default Categories;
