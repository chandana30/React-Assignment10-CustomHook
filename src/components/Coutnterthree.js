import React from 'react'

function Coutnterthree() {
   const timer=useNewTimer(new Date());
    return (
        <div>
            <h1>Today Time</h1>
            <h2> {timer.toLocaleTimeString()}</h2>

            
        </div>
    )
}
const useNewTimer=(currentDate)=>{
    const[date,setDate]=React.useState(currentDate);
    React.useEffect(()=>{
        var timerID=setInterval(()=>tick(),1000);
        return function cleanup(){
            clearInterval(timerID);

        };
    });
    function tick(){
        setDate(new Date());
    }
    return date;
}

export default Coutnterthree
