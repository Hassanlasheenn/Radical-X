import React, { useContext, useState } from 'react';
import { TickContext } from '../../Context/useTickCircle';
import DragNdrop from '../DragNDrop/DragNdrop';


const GuideContent = ({ title1, title2, title3 }) => {

    const [brief, setBrief] = useState('');
    const [req, setReq] = useState('');
    const [mile, setMile] = useState('');
    const { setTick } = useContext(TickContext);


    const handleTitle1 = (e) => {
      e.preventDefault();
      setBrief(e.target.value);

      if(brief.trim().length !== 0) {
        setTick("Brief", true);
        setTick("Duration", true);
        setTick("Curated Resources", true);
      } else if(brief.trim().length < 0) {
        setTick("Brief", false);
      }
    }

    const handleTitle2 = (e) => {
      e.preventDefault();
      setReq(e.target.value);

      if(req.trim().length !== 0) {
        setTick("Requirements", true);
        setTick("Timeline", true);
        setTick("Events", true);
      } else {
        setTick("Requirements", false);
      }
    }

    const handleTitle3 = (e) => {
      e.preventDefault();
      setMile(e.target.value);

      if(mile.trim().length !== 0) {
        setTick("Milestones", true);
        setTick("Overview", true);
        setTick("Schedule", true);
        setTick("Continue to Surveys", true);
        setTick("Internship Guide", true);
      } else {
        setTick("Milestones", false);
      }
    }

    
  return (
    <>
      <div className='contentDetails'>
        <div className='briefContainer'>
          <span className='briefText'>{title1}</span>
          <input
            placeholder='Description'
            type='brief'
            onChange={handleTitle1}
            value={brief}
          />
          <DragNdrop 
            style={{
                  opacity: 0,
                  'position': 'absolute',
                  'top': '120px',
                  'left': '24px',
                  'width': '741px',
                  'height': '68px',
                  'cursor': 'pointer'
            }}
            result={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              padding: '24px 20px',
              gap: '8px',
              position: 'absolute',
              top: '206px',
              left: '24px',
              width: '741px',
              height: '40px',
              borderRadius: '8px',
              background: '#EDEAFF'
            }}
          />
        </div>
        <div className='briefContainer'>
          <span className='briefText'>{title2}</span>
          <input
            placeholder='Description'
            type='brief'
            onChange={handleTitle2}
            value={req}
          />
          <DragNdrop 
             style={{
                  opacity: 0,
                  'position': 'absolute',
                  'top': '368px',
                  'left': '24px',
                  'width': '741px',
                  'height': '68px',
                  'cursor': 'pointer'
            }} 
            result={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              padding: '24px 20px',
              gap: '8px',
              position: 'absolute',
              top: '452px',
              left: '24px',
              width: '741px',
              height: '40px',
              borderRadius: '8px',
              background: '#EDEAFF'
            }}
          />
        </div>
        <div className='briefContainer'>
          <span className='briefText'>{title3}</span>
          <input
            placeholder='Description'
            type='brief'
            onChange={handleTitle3}
            value={mile}
          />
          <DragNdrop 
             style={{
                  opacity: 0,
                  'position': 'absolute',
                  'top': '614px',
                  'left': '24px',
                  'width': '741px',
                  'height': '68px',
                  'cursor': 'pointer'
            }} 
            result={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              padding: '24px 20px',
              gap: '8px',
              position: 'absolute',
              top: '698px',
              left: '24px',
              width: '741px',
              height: '40px',
              borderRadius: '8px',
              background: '#EDEAFF'
            }}
          />
        </div>
      </div>
    </>
  )
}

export default GuideContent;
