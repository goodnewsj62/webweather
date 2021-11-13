import { useState } from "react";

const DUMMY_CITIES = ["jos","enugu","porthacourt","ogun"];

const APIKEY ="";


async function fetchWeatherData(apikey,q,propdata){
    const getData= await fetch("https://api.openweathermap.org/data/2.5/weather?q="+q+"&appid="+apikey);
    const data = await getData.json();
    if (data.cod === 200){
        propdata.setData(data);
    }
}

export default function Search(props){
    const [input, setInput] = useState("");

    const formControl = e => {
        e.preventDefault();
        fetchWeatherData(APIKEY,input,props.data)
            .catch(e => console.log("error: ",e));
    }

    const handleChange = (e) =>{
        setInput(e.target.value);
    }
    
    let style = {"clear":{backgroundColor:"#e77d04"},"sun":{backgroundColor:"#669dc4"},"rain":{backgroundColor:"#718583"}}
    let styles =  props.ui? style[props.ui] : style.clear;
    
    return (
        <div className="search">
            <form onSubmit={e => formControl(e)}>
                <div><input type="text" placeholder="Another location" name="location" id="search" onChange={(e)=> {handleChange(e)}} /></div>
                <button style={styles} type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </form>
            <ul>
                {DUMMY_CITIES.map((item,index )=> <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}