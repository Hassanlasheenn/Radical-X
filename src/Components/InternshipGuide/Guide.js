import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Guide.css';
import OverviewContent from './GuideContent/Overview/OverviewContent';
import ResourcesDetail from './GuideContent/Resources/ResourcesDetail';
import ScheduleDetails from './GuideContent/Schedule/ScheduleDetails';

const Guide = () => {

  const [show, setShow] = useState(false);
  const [Height, setHeight] = useState('72px');


  const handleClickMenu = () => { 
    if (show) {
      setShow(false);
      setHeight('72px')
    } 
    else {
      setShow(true)
      setHeight('360px')
    }
  }

  return (
    <>
      <div className='guideOverview'>

        <div className='overviewCont' style={{ height: Height }}>
          <div className='overviewLogoCont'>
            <div className='menuOverview' />
          </div>

          <Link to={'overview'} className='overviewDetail' style={{ height: Height }}>
              <button onClick={handleClickMenu} className='overviewTextCont'>
                <div className='overviewFrameText'>
                  <div className='headingCont'>
                    <span className='overviewText'>Overview</span>
                  </div>
                </div>
                <div className='overviewArrow' />
              </button>
          { show && <OverviewContent /> }
          </Link>
        </div>


        <div className='scheduleBar' style={{ height: Height }}>
          <div className='scheduleLogoCont'>
            <div className='menuSchedule'/>
          </div>

          <Link to={'schedule'} className='scheduleDetail' style={{ height: Height }}>
            <button onClick={handleClickMenu} className='scheduleCont'>
              <div className='scheduleContRow'>
                <div className='scheduleContText'>
                  <span className='scheduleText'>Schedule</span>
                </div>
              </div>
              <div className='scheduleArrow'/>
            </button>
            { show && <ScheduleDetails /> }
          </Link>
        </div>

        <div className='scheduleBar' style={{ height: Height }}>
          <div className='scheduleLogoCont'>
            <div className='menuSchedule'/>
          </div>

          <Link to={'resources'} className='scheduleDetail' style={{ height: Height }}>
            <button onClick={handleClickMenu} className='scheduleCont'>
              <div className='scheduleContRow'>
                <div className='scheduleContText'>
                  <span className='scheduleText'>Resources</span>
                </div>
              </div>
              <div className='scheduleArrow'/>
            </button>
            { show && <ResourcesDetail /> }
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
