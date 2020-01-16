import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherWeek = ({ id }) => {
	const [ city, setCity ] = useState(); // To store the city name
	const [ isLoading, setIsLoading ] = useState(true);
	const [ data, setData ] = useState(); // To store all data concerning weather
	const [ dataToday, setDataToday ] = useState(); 
	const [ today, setToday ] = useState(); 
	const [ week, setWeek ] = useState([]); // Array with 1 Object per day

	// fetching weather data for 5 days, 8 records per day
	const fetchingData = async () => {
		try {
			const url = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${process.env
				.REACT_APP_OPENWEATHER_KEY}`;
            const res = await axios.get(url);
			setCity(res.data.city.name);
            setData(res.data.list);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
			setIsLoading(false);
		}
    };
    
    const fetchingTodayData = async () => {
		try {
			const url = `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${process.env
				.REACT_APP_OPENWEATHER_KEY}`;
            const res = await axios.get(url);
            setDataToday(res.data);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
			setIsLoading(false);
		}
	};

	const getDataPerDay = () => {
        // We get all data for specific field
        let dateToday = data[0].dt_txt.slice(0, 10) // We get "day one" from the API
        setToday(dateToday);
        const date = [];
		const min = [];
		const max = [];
		const humidity = [];
        data.map((el) => date.push(el.dt_txt.slice(0, 10)));
        const tmr = date.findIndex(el => el !== dateToday) // start collecting data for day 2
        const n = 8; // 8 values per day
		data.map((el) => min.push(el.main.temp_min));
		data.map((el) => max.push(el.main.temp_max));
        data.map((el) => humidity.push(el.main.humidity));
        
		for (let i = 0; i < 4; i++) {
			// Storing data in 5 objects, 1 object per day
			let temp_min = min.slice(i * n + tmr, i * n + tmr + n).sort((a, b) => a - b);
			let temp_max = max.slice(i * n + tmr , i * n + tmr + n).sort((a, b) => b - a);
            let hum = humidity.slice(i * n + tmr, i * n + tmr + n)
            const len = hum.length;
            hum = hum.reduce((currentSum, val) => currentSum + val);
            
			const day = {
                date: date[i * n + tmr],
                icon: data[i * n + tmr + 4].weather[0].icon, // getting icon for the day
                description: data[i * n + tmr + 4].weather[0].description, // getting icon for the day
				temp_min: temp_min[0],
				temp_max: temp_max[0],
				humidity: hum /len // average humidity for the day
			};
			const newWeek = week;
			newWeek.push(day);
			setWeek(newWeek);
		}
	};

	useEffect(() => {
        fetchingData();
        fetchingTodayData();
	}, []);

	useEffect(
		() => {
			if (city) {
				getDataPerDay();
			}
		},
		[ data ]
	);

console.log("week",week)

	return ( 
		<div>
			WeatherWeek.js
			{isLoading ? null : (
                <div>
					{city}
                    <p>date: {today}</p>
                    <img src={`http://openweathermap.org/img/wn/${dataToday.weather[0].icon}@2x.png`} />
                    <p>weather: {dataToday.weather[0].description}</p>
                    <p>temp_min: {dataToday.main.temp_min}</p>
                    <p>temp_max: {dataToday.main.temp_max}</p>
                    <p>humidity: {dataToday.main.humidity}</p>
					{week.map((el) => 
                    <div key={el.date}>
                    <p>date: {el.date}</p>
                    <img src={`http://openweathermap.org/img/wn/${el.icon}@2x.png`} />
                    <p>weather: {el.description}</p>
                    <p>temp_min: {el.temp_min}</p>
                    <p>temp_max: {el.temp_max}</p>
                    <p>humidity: {el.humidity}</p>
                    </div>
                    )}
				</div>
            )}
		</div>
	);
};

export default WeatherWeek;
