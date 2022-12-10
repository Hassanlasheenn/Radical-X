import React, { useContext, useRef, useState } from 'react';

// css & icons import 
import '../../../Styles/NewIntroVideo.css';
import '../../../Styles/CategoryContent.css';
import uploadIcon from '../../../images/document-upload.svg';
import closeIcon from '../../../images/close.svg';
import { TickContext } from '../../../Context/useTickCircle';
import { ImageUpload } from '../../../Config/ImagesUpload';

const NewIntroVideo = (props) => {

  const inputRef = useRef(null);
  const [fileList, setFileList] = useState([]);

  const { setTick } = useContext(TickContext);

  const onFileChange = (files) => {
    console.log(files);
  }

  const onDragEnter = () => inputRef.current.classList.add('dragover');
  const onDragLeave = () => inputRef.current.classList.remove('dragover');
  const onDrop = () => inputRef.current.classList.remove('dragover');

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      setTick("Intro Video", true);
      onFileChange(updatedList);
    }
  }

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    setTick("Intro Video", false);
    onFileChange(updatedList);
  }

  return (
    <>
    <div className='introVideoCont'>
        <span className='introVideoTitle'>Intro Video</span>
        <div 
          className='drop-file-input' 
          ref={inputRef}
          onDragEnter={onDragEnter} 
          onDragLeave={onDragLeave} 
          onDrop={onDrop} 
        >
            <label className='drop-file-input__label'>Drag n drop to upload your video</label>
            <input 
              type='file'  
              onChange={onFileDrop}
            />
            <img src={uploadIcon} alt='' />
        </div>
        </div>
   

    {
      fileList.length > 0 ? (
        <div className='drop-file-preview'>
          {
            fileList.map((item, index) => (
              <div key={index} className="drop-file-preview__item">
                <img src={ImageUpload[item.type.split('/')[1]] || ImageUpload['default']} alt='' />
                <div className='drop-file-preview__item__info'>
                  <p>{item.name}</p>
                  <img  
                    src={closeIcon} 
                    alt='' 
                    type='button' 
                    onClick={() => fileRemove(item)}
                    className='close-btn'
                  />
                </div>
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
