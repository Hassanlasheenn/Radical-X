import React from 'react';

const ResourcesDetail = () => {
  return (
      <>
    <div className='detailFrame'>
            <div className='box'>
              <div className='boxComponent'>
                <div className='menuBox' />
                <span className='boxText'>Curated Resources</span>
              </div>
            </div>

            <div className='box'>
              <div className='boxComponent'>
                <div className='menuBox' />
                <span className='boxText'>Events</span>
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

export default ResourcesDetail;
