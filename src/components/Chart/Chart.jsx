
import React from 'react'
import './Chart.css'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {name: 'January', TotalMembers: 1200},
  {name: 'February', TotalMembers: 2100},
  {name: 'March', TotalMembers: 800},
  {name: 'April', TotalMembers: 1600},
  {name: 'May', TotalMembers: 900},
  {name: 'June', TotalMembers: 1700},
];


const Chart = ({aspect, title}) => {
  return (
    <div className='chart'>
      <div className="title">{title}</div>
        <ResponsiveContainer width="100%" aspect={aspect}>
         <AreaChart width={730} height={340} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <CartesianGrid strokeDasharray="3 3" className='gridChat'/>
            <Tooltip />
            <Area type="monotone" dataKey="TotalMembers" stroke="#8884d8" fillOpacity={1} fill="url(#total" />
          </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart