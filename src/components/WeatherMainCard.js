import React, {useState, useEffect} from 'react';

const WeatherMainCard = ({date, data}) => {
    const [ dayData, setDayData ] = useState();
    const getData = ()=>{
        if(data){
            const results = data.filter(el=> el.dt_txt.includes(date))
            setDayData(results)
        }
    }
   useEffect(() => {
      getData();
   }, [date, data])

    return(
        <div className="weatherMainCard" >
            <div className="displayContainer">
            {dayData? dayData.map(el=> <div className="card" style={{width: `${Math.floor(100/dayData.length)}%`}} key={el.dt}>
            <img src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`} />
            <p>{el.dt_txt.slice(11,16)}</p>
            <p>{el.weather[0].description}</p>
            <p>{el.main.temp} °C</p>
            <p>Humidité: {el.main.humidity}%</p>
            <p>Vent: {Math.round(el.wind.speed*3.6)} km/h</p>
            </div>)
            : null}
            </div>
                    </div>
    )
}
export default WeatherMainCard;