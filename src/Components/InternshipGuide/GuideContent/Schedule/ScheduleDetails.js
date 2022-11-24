import React from 'react';

const ScheduleDetails = () => {
  return (
    <>
    <div className='detailFrame'>
            <div className='box'>
              <div className='boxComponent'>
                <div className='menuBox' />
                <span className='boxText'>Duration</span>
              </div>
            </div>

            <div className='box'>
              <div className='boxComponent'>
                <div className='menuBox' />
                <span className='boxText'>Timeline</span>
              </div>
            </div>

            <div className='box'>
              <div className='boxComponent'>
                <div className='menuBox' />
                <span className='boxText'>Deliverables</span>
              </div>
            </div>

            <div className='addMoreBox'>
              <div className='addMoreComponent'>
                <div className='squareBox' />
                <span className='addMoreText'>Add More</span>
              </div>
            </div>

    </div>
</>
  )
}

export default ScheduleDetails;
