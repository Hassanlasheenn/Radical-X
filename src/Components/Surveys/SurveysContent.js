import React, { useContext } from 'react';

// css & icons imports 
import '../../Styles/Surveys.css';
import menuIcon from '../../images/menu.svg';
import arrowIcon from '../../images/arrow-right-internships.svg';
import { TickContext } from '../../Context/useTickCircle';

const SurveysContent = ({ title, onClick, tick }) => {

    const { active } = useContext(TickContext);

    const handleSurveys = () => {
        if(onClick) {
            onClick();
        }
    }
  return (
        <div className='surveyContainer'>
            <div className='menuLogoCont'>
                <img src={menuIcon} alt='' />
            </div> 
            <div onClick={handleSurveys} className='barContainer'>
                <div className='textContainer'>
                    <div className='textContSurvey'>
                        <div className='textCont'>
                            <span className='surveyText'>{title}</span>
                            { active[title] && 
                            <span>{ tick && <img src={tick} alt='' /> }</span>}
                        </div>
                    </div>
                    <img src={arrowIcon} alt='' />
                </div>
            </div>
        </div>
  )
}

export default SurveysContent;
