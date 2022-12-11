import React, { useContext, useState } from 'react';
import { TickContext } from '../../../Context/useTickCircle';
import DragNdrop from '../../DragNDrop/DragNdrop';

const inputs = {
    brief: "",
    requirements: "",
    milestones: ""
}
const OverviewContent = ({ title1, title2, title3 }) => {
    
    
    const [user, setUser] = useState(inputs);

    const { setTick } = useContext(TickContext);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUser({...user, [name]: value});

        setTick("Overview", true);
    }

  return (
    <>
      <div className='contentDetails'>
        <div className='briefContainer'>
          <span className='briefText'>{title1}</span>
          <input
            placeholder='Description'
            type='brief'
            onChange={handleChange}
            value={user.brief}
            name="brief"
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
            onChange={handleChange}
            value={user.requirements}
            name="requirements"
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
            onChange={handleChange}
            value={user.milestones}
            name="milestones"
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

export default OverviewContent;
