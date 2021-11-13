import Search from './Search'
import Details from './Details'
import '../css/sidebar.css'


export default function SideBar(props){
    const style = {"clear":{backgroundColor:"rgba(0,0,0,0.2)"},"sun":{backgroundColor:"rgba(0,0,0,0.2)"},
                "rain":{backgroundColor:"rgba(79, 103, 100,0.3)"}}

    let styles =  props.ui? style[props.ui] : style.clear;
    return(
        <div style={styles} className="sidebar">
            <Search data={props.data} ui = {props.ui}/>
            <Details data ={props.data}/>
        </div>
    );
}