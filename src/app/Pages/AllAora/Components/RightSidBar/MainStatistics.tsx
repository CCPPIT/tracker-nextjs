import { CircularProgressbar } from 'react-circular-progressbar'
import React from 'react'
import { defaultColor } from '@/constants/Colors';
import {Cell, Pie, PieChart}from "recharts"

type Props = {}

const MainStatistics = (props: Props) => {
    const statistics=[
        {id:1,num:7,subTitle:"Best streaks"},
        {id:2,num:7,subTitle:"Perfect days"}

    ]
  return (
    <div className='flex mx-4 flex-col gap-6 bg-slate-50 rounded-xl p-5 justify-center items-center mt-20'>
        <span className='font-bold text-xl cursor-pointer hover:text-customed'>Statistics</span>
        {/**the circular progres bar */}
        <div className='relative pt-3'>
            <CircularProgressBar progress={89}/>
            <div className='flex flex-col justify-center items-center absolute top-[54%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <span className='font-bold text-xl text-customed'>89%</span>
            <span className='text-[11px]'>{`Today's Progress`}</span>


            </div>
          

        </div>
        {/*** bast streaks and perfect days */}
        <div className='my-4 flex justify-center gap-6 flex-wrap items-center w-full'>
            {statistics.map((singleItem,singleIndex)=>(
                <div key={singleIndex} className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-customed rounded-full'></div>
                    <div className='text-[12px]'>
                        <span className='flex flex-col font-bold'>{singleItem.num}</span>
                        <span className='text-gray-500'>{singleItem.subTitle}</span>


                    </div>
                </div>

            ))}

        </div>
    </div>
  )
}

export default MainStatistics
interface CircularProgressBarProps{
    progress:number,
}
const CircularProgressBar:React.FC<CircularProgressBarProps>=({
    progress



})=>{
    const COLORS=[defaultColor.default,"#edf2f4"];
    const data=[
        {name:"Completed",value:progress},
        {name:"Remaining",value:100-progress}
    ]
    return(
       <PieChart
       width={200}
       height={160}
       margin={{top:-20,right:0,bottom:40,left:0}}
       >
        
        <Pie data={data} dataKey={"value"} startAngle={180} endAngle={-180} paddingAngle={0} innerRadius={66} cx={100} cy={100} outerRadius={progress===100?80:70} fill="#8884d8" >
            {data.map((entry,index)=>(
                <Cell key={`cell-${index}`} fill={COLORS[index%COLORS.length]}/>
            ))}
            </Pie>


      
       

        

       </PieChart>

    )
}