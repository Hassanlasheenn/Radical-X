import React, { useRef } from 'react';

import uploadLogo from '../../../../images/document-upload.svg';

const ScheduleContent = () => {

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
            <span className='briefText'>Duration</span>
            <input
                className='briefField'
                placeholder='Description'
                type='text'
            />
            <div className='briefVideoCont'>
                    <label className='briefDropText'>Drag n drop to upload your video</label>
                    <input style={{ display: 'none' }} ref={inputRef} type='file'  onChange={handleVideoFile} />
                    <img src={uploadLogo} alt='' onClick={handleLogoClick} />
            </div>

            <div className='searchObjects'>

            </div>
            </div>

            <div className='briefContainer'>
            <span className='briefText'>Timeline</span>
            <input
                className='briefField'
                placeholder='Description'
                type='text'
            />
            <div className='briefVideoCont'>
                    <label className='briefDropText'>Drag n drop to upload your video</label>
                    <input style={{ display: 'none' }} ref={inputRef} type='file'  onChange={handleVideoFile} />
                    <img src={uploadLogo} alt='' onClick={handleLogoClick} />
            </div>

            <div className='searchObjects'>

            </div>
            </div>

            <div className='briefContainer'>
            <span className='briefText'>Deliverables</span>
            <input
                className='briefField'
                placeholder='Description'
                type='text'
            />
            <div className='briefVideoCont'>
                    <label className='briefDropText'>Drag n drop to upload your video</label>
                    <input style={{ display: 'none' }} ref={inputRef} type='file'  onChange={handleVideoFile} />
                    <img src={uploadLogo} alt='' onClick={handleLogoClick} />
            </div>

            <div className='searchObjects'>

            </div>
            </div>
        </div>
    </>
  )
}

export default ScheduleContent;
