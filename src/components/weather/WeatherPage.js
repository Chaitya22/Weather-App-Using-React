import React, { useEffect, useState, Fragment } from 'react';
import './WeatherPage.css';
import Spinner from '../layouts/Spinner';
import DailyWeather from './DailyWeather';

import './DailyWeather.css';

const WeatherPage = (props) => {
	const [ dailyInfo, setdailyInfo ] = useState([]);
	let lists = [];
	const dateBuilder = (date) => {
		let months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		let monthShort = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
		let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

		let day = days[date.getDay()];
		let currentdate = date.getDate();
		let month = months[date.getMonth()];
		let year = date.getFullYear();

		return `${day} ${currentdate} ${month} ${year}`;
	};

	useEffect(
		() => {
			if (typeof props.data.list !== 'undefined') {
				for (let i = 0; i < props.data.list.length; i++) {
					let count = 0;
					if (i % 8 === 0) {
						lists.push(props.data.list[i]);
					}
				}
			}
			setdailyInfo(lists);
		},
		[ props.data ]
	);

	if (typeof props.data.list === 'undefined') {
		return (
			<Fragment>
				<div className='location-box'>
					<div className='date'>{dateBuilder(new Date())}</div>
				</div>
				{props.warning}
			</Fragment>
		);
	} else if (props.loading) {
		return <Spinner />;
	}

	return (
		<div className='location-box'>
			<div className='location'>
				{props.data.city.name}, {props.data.city.country}
			</div>
			<div className='date'>{dateBuilder(new Date())}</div>
			<div className='row'>
				<div className='offset-md-1' />
				{dailyInfo.map((list, index) => <DailyWeather day={list} key={list.dt} i={index} />)}
			</div>
		</div>
	);
};

export default WeatherPage;
