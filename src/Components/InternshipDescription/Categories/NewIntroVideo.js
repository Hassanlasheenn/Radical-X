import React, { useContext, useRef } from 'react';
import { TickContext } from '../../../Context/useTickCircle';
import '../../../Styles/NewIntroVideo.css';

const NewIntroVideo = () => {
  
  const inputRef = useRef(null);
  const { setActiveVideo } = useContext(TickContext);

  const handleLogoClick = () => {
    inputRef.current.click();
    setActiveVideo(true)
  }

  const handleVideoFile = e => {
    const fileObj = e.target.files && e.target.files[0];
    if(!fileObj) {
      return;
    }
  }

  return (
    <div className='introVideoCont'>
        <span className='introVideoTitle'>Intro Video</span>
        <div className='form-group files'>
            <label className='dragDropText'>Drag n drop to upload your video</label>
            <input style={{ display: 'none' }} ref={inputRef} type='file'  onChange={handleVideoFile} />
            <button onClick={handleLogoClick} className='uploadLogo' />
        </div>
    </div>
  )
}

export default NewIntroVideo;
