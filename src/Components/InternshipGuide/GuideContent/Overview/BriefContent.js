import React, { useRef } from 'react';

const BriefContent = () => {

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
          <span className='briefText'>Brief</span>
          <input
            className='briefField'
            placeholder='Description'
            type='text'
          />
          <div className='briefVideoCont'>
                <label className='briefDropText'>Drag n drop to upload your video</label>
                <input style={{ display: 'none' }} ref={inputRef} type='file'  onChange={handleVideoFile} />
                <button onClick={handleLogoClick} className='uploadLogo' />
          </div>

          <div className='searchObjects'>

          </div>
        </div>

        <div className='briefContainer'>
          <span className='briefText'>Requirements</span>
          <input
            className='briefField'
            placeholder='Description'
            type='text'
          />
          <div className='briefVideoCont'>
                <label className='briefDropText'>Drag n drop to upload your video</label>
                <input style={{ display: 'none' }} ref={inputRef} type='file'  onChange={handleVideoFile} />
                <button onClick={handleLogoClick} className='uploadLogo' />
          </div>

          <div className='searchObjects'>

          </div>
        </div>

        <div className='briefContainer'>
          <span className='briefText'>Milestones</span>
          <input
            className='briefField'
            placeholder='Description'
            type='text'
          />
          <div className='briefVideoCont'>
                <label className='briefDropText'>Drag n drop to upload your video</label>
                <input style={{ display: 'none' }} ref={inputRef} type='file'  onChange={handleVideoFile} />
                <button onClick={handleLogoClick} className='uploadLogo' />
          </div>

          <div className='searchObjects'>

          </div>
        </div>

      </div>
    </>
  )
}

export default BriefContent;
