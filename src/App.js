import React, {useState} from 'react';
import './App.css';
import WeatherWeek from './components/WeatherWeek'
import cities from './assets/cities.json'

const App = ()=> {
  const [city, setCity] = useState(2988507)
  // console.log(city)
return(
  <div className="App">
  <div className="city">
    <select value={city} onChange={(e)=>setCity(e.target.value)} >
     {cities.map(el=> <option value={el.id}>{el.name}</option>)}
    </select>
    </div>
    <WeatherWeek id={city} /> 
  </div>
  
)
}

export default App;
