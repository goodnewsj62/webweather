import DateTime from './DateTime'
import '../css/display.css'

export default function DispWeather(props){
    const icons = {"clear":<i className="fa fa-cloud"></i>,"sun":<i className="fa fa-sun"></i>
                    ,"rain":<i className="fa fa-cloud-showers-heavy"></i>}

    let icon =  props.ui? icons[props.ui] : icons.clear;
    return (
        <div className="display">
            <div className="temp">{Math.round(props.data.data.main.temp - 273)} &deg;</div>
            <div className="location">
                <div className="place">
                    {props.data.data.name}
                </div>
                <DateTime data={props.data}/>
            </div>
            <div className="img">
                {icon}
                <p>{props.data.data.weather[0].main}</p>
            </div>
        </div>
    )
}