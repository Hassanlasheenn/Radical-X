import React, { useContext, useState } from 'react';
import { Content } from './Content';
import { TickContext } from '../../Context/useTickCircle';

// css & icons imports
import '../../Styles/Guide.css';
import menuIcon from '../../images/menu.svg';
import tickCatIcon from '../../images/tick-circle.svg';




const BoxContainer = ({ title, icon, onClick, name1, name2, name3, tick }) => {

  const [show, setShow] = useState(false);
  const [Height, setHeight] = useState('72px');

  const { active } = useContext(TickContext);


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
                    {active[title] && 
                    <span>{ tick && <img src={tick} alt='' />}</span> }
                  </div>
                </div>
               {icon &&  <img src={icon} alt='' /> }
              </button>

              <div className='detailFrame'>

                { show && 
                  <Content name1={name1} name2={name2} name3={name3} icon={menuIcon} tick={tickCatIcon} />
                }
                
              </div>
          </div>
        </div>
  )
}

export default BoxContainer;
