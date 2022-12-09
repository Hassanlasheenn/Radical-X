import React, { useContext, useRef, useState } from 'react';
import { TickContext } from '../../Context/useTickCircle';


const GuideContent = ({ title1, title2, title3, fieldText, icon }) => {

    const guideRef = useRef(null);
    const [brief, setBrief] = useState('');
    const [req, setReq] = useState('');
    const [mile, setMile] = useState('');
    
    const { setTick } = useContext(TickContext);

    const handleLogoClick = () => {
      guideRef.current.click();
    }
  
    const handleVideoFile = e => {
      const fileObj = e.target.files && e.target.files[0];
      if(!fileObj) {
        return;
      }
    }

    const handleBrief = (e) => {
      e.preventDefault();
      setBrief(e.target.value);

      if(brief.length >= 0) {
        setTick("Brief", true);
      } else {
        setTick("Brief", false);
      }
    }

    const handleTitle2 = (e) => {
      e.preventDefault();
      setReq(e.target.value);

      if(req.length >= 0) {
        setTick("Requirements", true);
        setTick("Internship Guide", true);
        setTick("Continue to Surveys", true);
      } else {
        setTick("Requirements", false);
      }
    }

    const handleTitle3 = (e) => {
      e.preventDefault();
      setMile(e.target.value);

      if(mile.length >= 0) {
        setTick("Milestones", true);
      } else {
        setTick("Milestones", false);
      }
    }

  return (
    <>
      <div className='contentDetails'>
        <div className='briefContainer'>
          <span className='briefText'>{title1}</span>
          <input
            className='briefField'
            placeholder='Description'
            type='text'
            onChange={handleBrief}
            value={brief}
          />
          <div className='briefVideoCont'>
                <label className='briefDropText'>{fieldText}</label>
                <input style={{ display: 'none' }} ref={guideRef} type='file'  onChange={handleVideoFile} />
                {icon && <img src={icon} alt='' onClick={handleLogoClick}/>}
          </div>

          <div className='searchObjects'>

          </div>
        </div>

        <div className='briefContainer'>
          <span className='briefText'>{title2}</span>
          <input
            className='briefField'
            placeholder='Description'
            type='text'
            onChange={handleTitle2}
            value={req}

          />
          <div className='briefVideoCont'>
                <label className='briefDropText'>{fieldText}</label>
                <input style={{ display: 'none' }} ref={guideRef} type='file'  onChange={handleVideoFile} />
                {icon && <img src={icon} alt='' onClick={handleLogoClick} />}
          </div>

          <div className='searchObjects'>

          </div>
        </div>

        { title3 ? <div className='briefContainer'>
          <span className='briefText'>{title3}</span>
          <input
            className='briefField'
            placeholder='Description'
            type='text'
            onChange={handleTitle3}
            value={mile}
          />
          <div className='briefVideoCont'>
                <label className='briefDropText'>{fieldText}</label>
                <input style={{ display: 'none' }} ref={guideRef} type='file'  onChange={handleVideoFile} />
                {icon && <img src={icon} alt='' onClick={handleLogoClick} />}
          </div>

          <div className='searchObjects'>

          </div>
        </div> : null 
        }

      </div>
    </>
  )
}

export default GuideContent;
