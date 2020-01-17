import React from 'react';

const weatherCard = ({today, dataToday}) => {
    return(
        <div className="weatherCard">
        <p>{today}</p>
                    <img src={`http://openweathermap.org/img/wn/${dataToday.weather[0].icon}@2x.png`} />
                    <p>{dataToday.weather[0].description}</p>
                    <p>Température minimale: {dataToday.main.temp_min} °C</p>
                    <p>Température maximale: {dataToday.main.temp_max} °C</p>
                    <p>Humidité: {dataToday.main.humidity} %</p>
        </div>
    )
}
export default weatherCard;