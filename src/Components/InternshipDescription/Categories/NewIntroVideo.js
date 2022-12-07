import React, { useContext, useRef, useState } from 'react';

// css & icons import 
import '../../../Styles/NewIntroVideo.css';
import '../../../Styles/CategoryContent.css';
import uploadIcon from '../../../images/document-upload.svg';
// import closeIcon from '../../../images/close.svg';
// import { TickContext } from '../../../Context/useTickCircle';

const NewIntroVideo = () => {

  const inputRef = useRef(null);

  // const { setTick } = useContext(TickContext);

  const handleLogoClick = () => {
    inputRef.current.click();
    // setTick("Intro Video", true);
  }

  const handleVideoFile = e => {
    // const fileObj = e.target.files && e.target.files[0];
    console.log(e.target.files)
  }

  // const handleRemove = (name) => {
  //   const fileRemove = files.filter((item) => item.name !== name);

  //   setFiles(fileRemove);
  //   setTick("Intro Video", false);
  // }

  return (
    <>
    <div className='introVideoCont'>
        <span className='introVideoTitle'>Intro Video</span>
        <div className='form-group files'>
            <label className='dragDropText'>Drag n drop to upload your video</label>
            <input style={{ display: 'none' }} ref={inputRef} type='file'  onChange={handleVideoFile} />
            <img src={uploadIcon} alt='' onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
        </div>
    </div>

    {/* <div className='file-name'>
      {files.map((file) => {
        return (
          <div className='resultContCateg' key={file.id}>
            <span className='resultTextCateg'>{file.name}</span>
            <img src={closeIcon} alt='' type='button' onClick={() => handleRemove(file.name)} style={{cursor: 'pointer'}} />
          </div>
        )
      })}
    </div> */}
    </>
  )
}

export default NewIntroVideo;
