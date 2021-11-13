import {React,useState,useEffect,useRef} from 'react'
import ReactDOM from 'react-dom'
import UIdescp from './components/App'

const APIKEY = ""

function Container(prop){
    const [data, setData] = useState({name:"Abuja"});
    const fetched = useRef(false)

    async function fetchWeatherData(apikey,data){
        const getData= await fetch("https://api.openweathermap.org/data/2.5/weather?q="+data.name+"&appid="+apikey);
        const response = await getData.json()
        if (response.cod === 200){
          setData(response);
        }
    }


    useEffect(() => {
      if (!fetched.current){
        fetchWeatherData(APIKEY,data)
              .catch(e => console.log("error:",e));
        fetched.current = true;
      }

      const fetchData = setInterval(()=>{
          fetchWeatherData(APIKEY,data)
          .catch(e => console.log("error:",e));;
      }, 15000);

      return () => clearInterval(fetchData);
      
    }, [data])
    
    if(fetched.current){
      return (
          <UIdescp data={{data,setData}}/>
      );
    }
    else{
      return "loading....."
    }
}

ReactDOM.render(<Container/>,document.getElementById("root"));

