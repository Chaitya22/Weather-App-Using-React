import React, { useState } from 'react';

import './Search.css';

const Search = (props) => {
	const [ city, setCity ] = useState('');
	const [ isValid, setIsValid ] = useState(true);
	const [ isTouched, setIsTouched ] = useState(false);

	const searchCity = (event) => {
		if (event.key === 'Enter') {
			if (event.target.value !== '') {
				props.getForeCast(city);
				setCity('');
				setIsValid(true);
			} else {
				console.log('Invalid input');
				setIsValid(false);
			}
		}
	};
	const onChangeHandler = (event) => {
		setCity(event.target.value);
		// if (city === '') {
		// 	setIsValid(false);
		// } else setIsValid(true);
	};

	const onTouch = () => setIsTouched(true);

	return (
		<div className='search-box'>
			<input
				type='text'
				className={`search-bar `}
				placeholder='Search....'
				onChange={onChangeHandler}
				onBlur={onTouch}
				value={city}
				onKeyPress={searchCity}
			/>
		</div>
	);
};

export default Search;

//${!isValid && isTouched && 'search-bar--invalid'}
