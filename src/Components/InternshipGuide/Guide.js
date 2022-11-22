import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Guide.css';

const Guide = () => {

  return (
    <>
      <div className='guideOverview'>

        <div className='scheduleBar'>
          <div className='scheduleLogoCont'>
            <div className='menuOverview' />
          </div>

          <Link to={'overview'} className='overviewDetail'>
              <div className='overviewTextCont'>
                <div className='overviewFrameText'>
                  <div className='headingCont'>
                    <span className='overviewText'>Overview</span>
                  </div>
                </div>
                <div className='overviewArrow' />
              </div>
          </Link>
        </div>


        <div className='scheduleBar'>
          <div className='scheduleLogoCont'>
            <div className='menuSchedule'/>
          </div>

          <Link to={'schedule'} className='overviewDetail'>
            <div className='scheduleCont'>
              <div className='scheduleContRow'>
                <div className='scheduleContText'>
                  <span className='scheduleText'>Schedule</span>
                </div>
              </div>
              <div className='scheduleArrow'/>
            </div>
          </Link>
        </div>

        <div className='scheduleBar'>
          <div className='scheduleLogoCont'>
            <div className='menuSchedule'/>
          </div>

          <Link to={'resources'} className='overviewDetail'>
            <div className='scheduleCont'>
              <div className='scheduleContRow'>
                <div className='scheduleContText'>
                  <span className='scheduleText'>Resources</span>
                </div>
              </div>
              <div className='scheduleArrow'/>
            </div>
          </Link>

        </div>

        <div className='chapterContainer'>
          <div className='addChapterCont'>
            <div className='addChapterLogo'/>
            <span className='chapterText'>Add Chapter</span>
          </div>
        </div>

      </div>
    </>
  )
}

export default Guide;
