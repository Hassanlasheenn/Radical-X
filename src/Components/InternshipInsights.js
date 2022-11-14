import React from 'react';
import '../Styles/InternshipInsights.css';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';



function InternshipInsights() {

  // as Data can't be taken as a png i used Recharts library to draw the graph
  // and as the data is not shown or clear i chose random numbers to make this chart similar

  const data = [
    {
      uv: 60000,
    },
    {
      uv: 200000,
    },
    {
      uv: 80000,
    },
    {
      uv: 65000,
    },
    {
      uv: 30000,
    },
    {
      uv: 15000,
    },
    {
      uv: 15000,
    }
  ];


  return (
    <div className='insightContInsights'>
    <div className='internshipInsightInsights'>
          <div className='insightTextContInsights'>
            <h5 className='titleInsights'>Internship Insights</h5>
            <span className='textInsights'>In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic</span>
          </div>
        </div>
        <div className='rightContainerInsights'>
        <div className='filterBarInsights'>
          <div className='datesContInsights'>
            <div className='weekMonthBtnsInsights'>
              <button className='weekBtnInsights'>
                <span className='weekTextInsights'>This week</span>
              </button>
              <button className='monthBtnInsights'>
              <span className='monthTextInsights'>This month</span>
              </button>
            </div>
            <div className='dateBtnInsights'>
                <div className='scheduleBtnInsights'/>
                <span className='textDateInsights'>Select dates</span>
            </div>
          </div>
        </div>
          <div className='graphContainerInsights'>
            <ResponsiveContainer width="100%" aspect={6}>
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 0,
                  right: 0,
                  left: -20,
                  bottom: 0,
                }}
              >
                <CartesianGrid horizontal="" vertical="" />
                <XAxis tick={false} hide />
                <YAxis tick={false} hide />
                  <Area type="monotone" dataKey="uv" stroke="" fill="rgba(102, 95, 239, 0.2)" />
              </AreaChart>
            </ResponsiveContainer>
              <div className='line1Insights'></div>
              <div className='line2Insights'></div>
              <div className='line3Insights'></div>

              <div className='greyContainerInsights'>
              {/* i need a feedback here how to highlight the className vector on the chart */}
                <div className='vectorInsights' />
                <span className='numberContInsights'>850</span>
                <span className='textContInsights'>Qualified Candiates</span>
              </div>

          </div>

              <div className='labelsContInsights'>

                <div className='firstNumInsights'>
                  <span className='numberCont1Insights'>100,000</span>
                  <span className='textContInsights'>Total Enrollments</span>
                </div>
                <div className='secondNumInsights'>
                  <span className='numberCont2Insights'>65,000</span>
                  <span className='textContInsights'>Completion</span>
                </div>
                <div className='thirdNumInsights'>
                  <span className='numberCont3Insights'>375</span>
                  <span className='textContInsights'>Reached Out</span>
                </div>
                <div className='fourNumInsights'>
                  <span className='numberCont4Insights'>300</span>
                  <span className='textContInsights'>Interview Set</span>
                </div>
                <div className='fiveNumInsights'>
                  <span className='numberCont5Insights'>150</span>
                  <span className='textContInsights'>Candiates Hired</span>
                </div>

              </div>
        </div>
    </div>
  )
}

export default InternshipInsights;
