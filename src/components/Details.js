
export default function Details(props){
    return (
        <div className="details">
            <h3>Weather details</h3>
            <ul>
                <li><span>Temperature</span> <span>{props.data.data.main.temp}K</span></li>
                <li><span>Cloud</span> <span>{props.data.data.clouds.all}%</span></li>
                <li><span>Wind speed</span> <span>{props.data.data.wind.speed}m/s</span></li>
                <li><span>Humidity</span> <span>{props.data.data.main.humidity}%</span></li>
            </ul>
        </div>
    )
}