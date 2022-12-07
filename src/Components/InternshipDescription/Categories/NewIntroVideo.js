import React, { useContext, useRef } from 'react';

// css & icons import 
import '../../../Styles/NewIntroVideo.css';
import uploadIcon from '../../../images/document-upload.svg';
import { TickContext } from '../../../Context/useTickCircle';

const NewIntroVideo = () => {
  
  const inputRef = useRef(null);

  const { setTick } = useContext(TickContext);

  const handleLogoClick = () => {
    inputRef.current.click();
    setTick("Intro Video", true);

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
            <img src={uploadIcon} alt='' onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
        </div>
    </div>
  )
}

export default NewIntroVideo;
