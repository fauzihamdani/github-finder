//Rce

import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/GithubContext';

const Search = ({ setAlert }) => {
	const githubContext = useContext(GithubContext);
	const [text, setText] = useState('');

	const onSubmit = e => {
		e.preventDefault();
		if (text === '') {
			setAlert(' Please enter something!', 'light');
		} else {
			githubContext.searchUsers(text); //<< send to searchUsers on GithubState.js
			setText('');
		}
	};

	const onChange = e => setText(e.target.value);
	// set state for form as dynamic as possible. e.target.name is pointing the name of field form

	return (
		<div>
			<form onSubmit={onSubmit} className='form'>
				<input
					type='text'
					name='text'
					placeholder='Search Users...'
					value={text}
					onChange={onChange}
				/>
				<input
					type='submit'
					value='Search'
					className='btn btn-dark btn-block'
				/>
			</form>
			{githubContext.users.length > 0 && (
				<button
					className='btn btn-light btn-block'
					onClick={githubContext.clearUsers}>
					Clear User
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	setAlert: PropTypes.func.isRequired,
};

export default Search;
