import React, { useContext, useRef, useState } from 'react';

// css & icons import 
import '../../../Styles/NewIntroVideo.css';
import '../../../Styles/CategoryContent.css';
import uploadIcon from '../../../images/document-upload.svg';
// import closeIcon from '../../../images/close.svg';
import { TickContext } from '../../../Context/useTickCircle';

const NewIntroVideo = () => {

  const inputRef = useRef(null);
  const [fileList, setFileList] = useState([]);
  const { setTick } = useContext(TickContext);

  const onDragEnter = () => inputRef.current.classList.add('dragover');
  const onDragLeave = () => inputRef.current.classList.remove('dragover');
  const onDrop = () => inputRef.current.classList.remove('dragover'); console.log()

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
    }
  }

  const handleLogoClick = () => {
    inputRef.current.click();
    setTick("Intro Video", true);
  }

  const handleVideoFile = e => {
    // const fileObj = e.target.files && e.target.files[0];
    console.log(e.target.files)
  }

  return (
    <>
    <div className='introVideoCont'>
        <span className='introVideoTitle'>Intro Video</span>
        <div 
          className='form-group files' 
          ref={inputRef}
          onDragEnter={onDragEnter} 
          onDragLeave={onDragLeave} 
          onDrop={onDrop} 
        >
            <label className='dragDropText'>Drag n drop to upload your video</label>
            <input 
              style={{ display: 'none' }} 
              type='file'  
              onChange={onFileDrop} 
            />
            <img src={uploadIcon} alt='' onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
        </div>
    </div>

    {
      fileList.length > 0 ? (
        <div className='drop-file-preview'>
            <p className='drop-file-preview__title'>
              Ready to upload
            </p>
            {
              fileList.map((item, index) => (
                <div key={index} className="drop-file-preview__item">
                </div>
              ))
            }
        </div>
      ) : null
    }
    </>
  )
}

export default NewIntroVideo;
