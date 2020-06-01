import React, { Fragment, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './DailyWeather.css';

const DailyWeather = (props) => {
	const [ show, setShow ] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const findDay = (index) => {
		let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
		const date = new Date();

		return `${days[(date.getDay() + index) % 7]}`;
	};
	return (
		<Fragment>
			<div className='col-lg-2 weather-box ' onClick={handleShow}>
				<div className='card text-center'>
					<div className='card-body'>
						<div className='day'>{findDay(props.i)} </div>
						<div className='temp'>{Math.round(props.day.main.temp)}°C</div>
						<div className='icon'>
							<img src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`} alt='' />
						</div>
						<div className='dercription'>{props.day.weather[0].main} </div>
					</div>
				</div>
			</div>
			<Modal show={show} onHide={handleClose} size='lg' centered>
				<Modal.Header closeButton className='header'>
					<Modal.Title>{findDay(props.i)}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='content row'>
						<div className='temp col-sm-4'>
							<div className='temp--min text-right'>
								{' '}
								<i className='fas fa-arrow-up' />
								{Math.round(props.day.main.temp_max)}°
							</div>
							<div className='temp--max text-left'>
								<i className='fas fa-arrow-down' />
								{Math.round(props.day.main.temp_min)}°
							</div>
							<div className='temp--now'>{Math.round(props.day.main.temp)}°C</div>
							<div className='temp--feels_like text-center'>
								Feels Like: {Math.round(props.day.main.feels_like)}°
							</div>
						</div>
						<div className='weather-description offset-4 col-sm-4'>
							<img
								src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`}
								alt=''
								className='modal-icon'
							/>
							<div className='description'> {props.day.weather[0].description} </div>
						</div>
					</div>
					<hr />
					<div className=' current-details'>
						<div className='humidity'>Humidity: {props.day.main.humidity}% </div>
						<div className='pressure'>Pressure: {props.day.main.pressure} mBar </div>
						<div className='wind'>Wind: {props.day.wind.speed} m/s </div>
					</div>
				</Modal.Body>
			</Modal>
		</Fragment>
	);
};

export default DailyWeather;
