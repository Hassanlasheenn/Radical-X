import React from 'react';

const OverviewContent = () => {
  return (
    <>
        <div className='detailFrame'>
                <div className='box'>
                  <div className='boxComponent'>
                    <div className='menuBox' />
                    <span className='boxText'>Brief</span>
                  </div>
                </div>

                <div className='box'>
                  <div className='boxComponent'>
                    <div className='menuBox' />
                    <span className='boxText'>Requirements</span>
                  </div>
                </div>

                <div className='box'>
                  <div className='boxComponent'>
                    <div className='menuBox' />
                    <span className='boxText'>Milestones</span>
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

export default OverviewContent;
