import React, { useState } from 'react';
import './App.css';
import WeatherPage from './components/weather/WeatherPage';
import Axios from 'axios';
import Search from './components/layouts/Search';

function App() {
	const [ weather, setWeather ] = useState({});
	const [ loading, setLoading ] = useState(false);
	const [ warning, setWarning ] = useState('');
	const getForeCast = async (city) => {
		// const res = await Axios.get(
		// 	`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=3e56d37bca3899501a8e8e8b85e4f2ff`
		// );
		// console.log(res);
		// setWeather(res.data);

		setLoading(true);
		Axios.get(
			`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=3e56d37bca3899501a8e8e8b85e4f2ff`
		)
			.then((res) => {
				setWeather(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				if (err.response) {
					console.log('client received an error response (5xx, 4xx)');
					setWeather({});
					const element = <div className='warning'>Please Enter A Valid Location.....</div>;
					setWarning(element);
				}
			});
		setLoading(false);
	};
	return (
		<div className='app'>
			<div className='main'>
				<Search getForeCast={getForeCast} />
				<WeatherPage data={weather} loading={loading} warning={warning} />
			</div>
		</div>
	);
}

export default App;
