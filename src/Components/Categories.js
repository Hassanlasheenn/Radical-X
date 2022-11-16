import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TickContext } from '../Context/useTickCircle';
import '../Styles/Categories.css';

const Categories = () => {

  const { activeCateg, setActiveCateg } = useContext(TickContext);
  const { activeLoc, setActiveLoc } = useContext(TickContext);
  const { activeDesc, setActiveDesc } = useContext(TickContext);
  const { activeBenefits, setActiveBenefits } = useContext(TickContext);


  return (
    <>
      <div className='categoryContCategory'>
    <div className='categoryBarCategory'>
        <div className='menuIconCategory' />
        <Link to={'category'}
          className='categoryBarContCategory'>
          <div className='textContCategory'>
            <span className='categoryTextCategory'>Category</span>
            <div  className='tickCircle' 
                  style={{  background: !activeCateg ? 'url(../images/tick-circle.png)' : setActiveCateg(true) }} 
            />
          </div>
          <div className='btnIconCategory' /> 
        </Link>
      </div>
      <div className='categoryBarCategory'>
        <div className='menuIconCategory' />
        <Link to={'description'} className='categoryBarContCategory'>
          <div className='textContCategory'>
            <span className='descTextCategory'>Description</span>
            <div  className='tickCircle' 
                  style={{  background: !activeDesc ? 'url(../images/tick-circle.png)' : setActiveDesc(true) }} 
            />
          </div>
          <div className='btnIconCategory' /> 
        </Link>
      </div>
      <div className='categoryBarCategory'>
        <div className='menuIconCategory' />
        <Link to={'location'} className='categoryBarContCategory'>
          <div className='textContCategory'>
            <span className='locationTextCategory'>Location</span>
            <div  className='tickCircle' 
                  style={{  background: !activeLoc ? 'url(../images/tick-circle.png)' : setActiveLoc(true) }} 
            />
          </div>
          <div className='btnIconCategory' /> 
        </Link>
      </div>
      <div className='categoryBarCategory'>
        <div className='menuIconCategory' />
        <Link to={'benefits'}   className='categoryBarContCategory'>
          <div className='textContCategory'>
            <span className='benefitsTextCategory'>Benefits</span>
            <div  className='tickCircle' 
                  style={{  background: !activeBenefits ? 'url(../images/tick-circle.png)' : setActiveBenefits(true) }} 
            />
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
    </>
    
  )
}

export default Categories;
