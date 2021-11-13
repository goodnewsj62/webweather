import SideBar from './Sidebar'
import DispWeather from './Display'
import '../css/weather.css'

export default function UIdecp(props){
    const weather = props.data.data.weather[0].main.toLowerCase();
    const style = {"sun":{backgroundImage:"linear-gradient(to bottom ,rgba(26, 91, 169,0.5) 10%,rgba(79, 139, 185,0.1) 60%,rgba(102, 157, 196,0.1)),url(../images/pexels-skitterphoto-597054.jpg"},
            "clear":{backgroundImage:"url(../images/pexels-julia-volk-6397609.jpg)"},"rain":{backgroundImage:"linear-gradient(rgba(40, 65, 62,0.3),rgba(40, 65, 62,0.3)),url(../images/pexels-pixabay-459483.jpg)"}}
    let UI = "sun";

    if(/clear/.test(weather) || /cloud/.test(weather)){
        UI = "clear";
    }
    else if(/sun/.test(weather)){
        UI = "sun";
    }
    else if(/rain/.test(weather)){
        UI = "rain";
    }


    return (
        <div style={style[UI]} className="container">
            <header>
                <a href="#">.weather</a>
            </header>
            <SideBar data={props.data} ui = {UI}/>
            <DispWeather data = {props.data} ui = {UI}/>
        </div>
    );
}