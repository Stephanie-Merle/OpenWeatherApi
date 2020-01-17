import React from 'react';

const weatherCard = ({el}) => {
    return(
        <div className="weatherCard" key={el.date}>
                    <p>{el.date}</p>
                    <img src={`http://openweathermap.org/img/wn/${el.icon}@2x.png`} />
                    <p>{el.description}</p>
                    <p>Température minimale: {el.temp_min} °C</p>
                    <p>Température maximale: {el.temp_max} °C</p>
                    <p>Humidité: {el.humidity} %</p>
                    </div>
    )
}
export default weatherCard;