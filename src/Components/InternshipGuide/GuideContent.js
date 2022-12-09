import React, { useContext, useRef, useState } from 'react';
import { TickContext } from '../../Context/useTickCircle';


const GuideContent = ({ props, title1, title2, title3, fieldText, icon }) => {

  const inputRef = useRef(null);
  const [fileList, setFileList] = useState([]);

  const { setTick } = useContext(TickContext);

  const onDragEnter = () => inputRef.current.classList.add('dragover');

  const onDragLeave = () => inputRef.current.classList.remove('dragover');

  const onDrop = () => inputRef.current.classList.remove('dragover');

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      setTick("Intro Video", true);
      props.onFileChange(updatedList);
    }
  }

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    setTick("Intro Video", false);
    props.onFileChange(updatedList);
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
            onChange={handleBrief}
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
            onChange={handleRequire}
            value={req}

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
            onChange={handleMileStone}
            value={mile}
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
