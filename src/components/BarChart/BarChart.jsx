import React from 'react'
import {
    ComposedChart,
    Line,
    // Area,
    // Bar,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts';
import './BarChart.css'
  
const data = [
    {name: 'January', Present: 1, TotalMembers: 10},
    {name: 'February', Present: 3},
    {name: 'March', Present: 2},
    {name: 'April', Present: 4},
    {name: 'May', Present: 2},
    {name: 'June', Present: 1},
  ];
  

const BarChart = () => {
      
  return (
    <div className='barChart'>   
    <div className="name">Last Six Months Attendance for <b>Tunde Amos</b> </div>                         
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" label={{ value: 'Months', position: 'insideBottomLeft', offset: 0 }} scale="band" />
          <Tooltip />
          <Line type="monotone" dataKey="Present" className='barChartLine' stroke='#000080'/>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChart