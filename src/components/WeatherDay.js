import React from 'react';
import Day from './Day';

const WeatherCard = ({today, dataToday, setSelected, selected}) => {
    
    return(
        <div className="weatherCard" style={selected===today? {backgroundColor: "rgb(217, 232, 233)"}: null} onClick={()=> setSelected(today)}>
            {dataToday? (
                <>
                <p><Day dt={dataToday.dt} /></p>
                <p>{today}</p>
                    <img src={`http://openweathermap.org/img/wn/${dataToday.weather[0].icon}@2x.png`} />
                    <p>{dataToday.weather[0].description}</p>
                    <p>Température minimale: {dataToday.main.temp_min} °C</p>
                    <p>Température maximale: {dataToday.main.temp_max} °C</p>
                    <p>Humidité: {dataToday.main.humidity} %</p>
                    </>
            ):null}
       
        </div>
    )
}
export default WeatherCard;