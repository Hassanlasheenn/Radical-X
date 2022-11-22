import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Surveys.css';

const SurveysContent = () => {
  return (
    <>
        <div className='surveysContainer'>
           <div className='surveyContainer'>
            <div className='menuLogoCont'>
                <div className='menuLogo' />
           </div> 
                <Link to={'1'} className='barContainer'>
                    <div className='textContainer'>
                        <div className='textContSurvey'>
                            <div className='textCont'>
                                <span className='surveyText'>Survey 1</span>
                            </div>
                        </div>
                        <div className='surveyArrowLogo'/>
                    </div>
                </Link>
            </div>

           <div className='surveyContainer'>
                <div className='menuLogoCont'>
                    <div className='menuLogo' />
                </div> 
                <Link to={'2'} className='barContainer'>
                    <div className='textContainer'>
                        <div className='textContSurvey'>
                            <div className='textCont2'>
                                <span className='surveyText2'>Survey 2</span>
                            </div>
                        </div>
                        <div className='surveyArrowLogo'/>
                    </div>
                </Link>
            </div>

            <div className='assessmentContainer'>
                <div className='textContainerAssess'>
                    <div className='addItemAssess'/>
                    <span className='addSurveyText'>Add Survey</span>
                </div>
            </div>




        </div>
    </>
  )
}

export default SurveysContent;
