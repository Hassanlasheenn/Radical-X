import React, { useState } from 'react';
import { Content } from './GuideContent/Overview/OverviewContent';

// css & icons imports
import '../../Styles/Guide.css';
import menuIcon from '../../images/menu.svg';
import squareIcon from '../../images/add-square-newInternship.svg';


const Guide = ({ title, icon, onClick }) => {

  const [show, setShow] = useState(false);
  const [Height, setHeight] = useState('72px');


  const handleClickMenu = () => { 
    if (show) {
      setShow(false);
      setHeight('72px')
    } 
    else {
      setShow(true)
      setHeight('360px')
    }
  }

  const handleGuides = () => {
    if(onClick) {
      onClick();
    } 
  }

  return (

        <div className='overviewCont' style={{ height: Height }}>
          <div className='overviewLogoCont'>
            <img src={menuIcon} alt='' />
          </div>

          <div onClick={handleGuides} className='overviewDetail' style={{ height: Height }}>
              <button onClick={handleClickMenu} className='overviewTextCont'>
                <div className='overviewFrameText'>
                  <div className='headingCont'>
                    <span className='overviewText'>{title}</span>
                  </div>
                </div>
               {icon &&  <img src={icon} alt='' /> }
              </button>

              <div className='detailFrame'>

                { show && <Content name='Brief' icon={menuIcon} /> }
                { show && <Content name='Requirements' icon={menuIcon} /> }
                { show && <Content name='Milestones' icon={menuIcon} /> }
                { show && 
                  <div className='addMoreBox'>
                    <div className='addMoreComponent'>
                      <img src={squareIcon} alt='' />
                      <span className='addMoreText'>Add More</span>
                    </div>
                  </div> 
                }
                
              </div>
          </div>
        </div>
  )
}

export default Guide;
