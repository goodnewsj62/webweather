import {useEffect, useState} from 'react'

export default function DateTime(props){
    const [date,setDate] =  useState(new Date())
    
    useEffect(()=>{
        const currentTime = setInterval(()=>{setDate(new Date())},1000);
        return clearInterval(currentTime);
    },[date])

    const decodeDate = (str) =>{
        const match =/(.{3}) (.{3}) (\d{2}) (\d{4}) (\d{2}:\d{2}):\d/.exec(str);
        const day = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"].filter(e=> e.startsWith(match[1].toLowerCase()));
        return `${match[5]} - ${day}, ${match[3]}${match[2]} '${match[4].substring(2)}`
    } 
    return(
        <div className="date">
            {decodeDate(date.toString())}
        </div>
    )
}