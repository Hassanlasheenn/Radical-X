import React from 'react';
import '../Styles/NewIntroVideo.css';

const NewIntroVideo = () => {
  return (
    <div className='introVideoCont'>
        <span className='introVideoTitle'>Intro Video</span>
        <div className='videoUploadCont'>
            <span className='dragDropText'>Drag n drop to upload your video</span>
            <div className='uploadLogo' />
        </div>
        <div className='videoCont'>
            <span className='categoryIntroText'>Intro Video.mp4</span>
            <div className='closeIntroBtn' />
        </div>
    </div>
  )
}

export default NewIntroVideo;
