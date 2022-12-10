import React, { useRef, useState } from 'react';
import uploadIcon from '../../images/document-upload.svg';
import { ImageUpload } from '../../Config/ImagesUpload';
import closeIcon from '../../images/close.svg';
import '../DragNDrop/DragNDrop.css';



const DragNdrop = ({ style, result }) => {
    const guideRef = useRef(null);
    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => guideRef.current.classList.add('dragover');
    const onDragLeave = () => guideRef.current.classList.remove('dragover');
    const onDrop = () => guideRef.current.classList.remove('dragover');
    
    const onFileChange = (files) => {
        console.log(files);
    }

    const onFileDrop = (e) => {
      const newFile = e.target.files[0];
      if (newFile) {
        const updatedList = [...fileList, newFile];
        setFileList(updatedList);
        onFileChange(updatedList);
      }
    }
  
    const fileRemove = (file) => {
      const updatedList = [...fileList];
      updatedList.splice(fileList.indexOf(file), 1);
      setFileList(updatedList);
      onFileChange(updatedList);
    }

  return (
    <>
        <div 
            className='drop-file-input'
            ref={guideRef}
            onDragEnter={onDragEnter} 
            onDragLeave={onDragLeave} 
            onDrop={onDrop} 
        >
            <label className='drop-file-input__label'>Drag n drop to upload your video</label>
            <input 
                type='file'  
                onChange={onFileDrop}
                style={style}
            />
            <img src={uploadIcon} alt='' />
        </div>
            
        {
        fileList.length > 0 && (
            <div className='drop-file-preview'>
            {
                fileList.map((item, index) => (
                <div key={index} style={result}>
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
        ) 
        }
    </> 
  )
}

export default DragNdrop;
