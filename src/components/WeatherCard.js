import React from 'react';
import Day from './Day';

const WeatherCard = ({el, setSelected, selected}) => {
    
    return(
        <div className="weatherCard" style={selected===el.date? {backgroundColor: "rgb(217, 232, 233)"}: null} onClick={()=> setSelected(el.date)}>
                    <p><Day dt={el.dt}/></p>
                    <p>{el.date}</p>
                    <img src={`http://openweathermap.org/img/wn/${el.icon}@2x.png`} />
                    <p>{el.description}</p>
                    <p>Température minimale: {el.temp_min} °C</p>
                    <p>Température maximale: {el.temp_max} °C</p>
                    <p>Humidité: {el.humidity} %</p>
                    </div>
    )
}
export default WeatherCard;