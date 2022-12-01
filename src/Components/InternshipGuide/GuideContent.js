import React, { useRef } from 'react';




const GuideContent = ({ title1, title2, title3, fieldText, icon }) => {

    const inputRef = useRef(null);
    const handleLogoClick = () => {
      inputRef.current.click();
    }
  
    const handleVideoFile = e => {
      const fileObj = e.target.files && e.target.files[0];
      if(!fileObj) {
        return;
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
          />
          <div className='briefVideoCont'>
                <label className='briefDropText'>{fieldText}</label>
                <input style={{ display: 'none' }} ref={inputRef} type='file'  onChange={handleVideoFile} />
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
          />
          <div className='briefVideoCont'>
                <label className='briefDropText'>{fieldText}</label>
                <input style={{ display: 'none' }} ref={inputRef} type='file'  onChange={handleVideoFile} />
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
          />
          <div className='briefVideoCont'>
                <label className='briefDropText'>{fieldText}</label>
                <input style={{ display: 'none' }} ref={inputRef} type='file'  onChange={handleVideoFile} />
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
