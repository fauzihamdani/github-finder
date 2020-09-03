//Rce

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
	state = {
		text: '',
		resultSearch: '',
	};

	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClear: PropTypes.func.isRequired,
		setAlert: PropTypes.func.isRequired,
	};

	onSubmit = e => {
		e.preventDefault();
		if (this.state.text === '') {
			this.props.setAlert(' Please enter something!', 'light');
		} else {
			this.props.searchUsers(this.state.text);
			this.setState({ resultSearch: this.state.text });
			this.setState({ text: '' });
		}
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}; // set state for form as dynamic as possible. e.target.name is pointing the name of field form

	render() {
		const { showClear, clearUsers } = this.props;

		return (
			<div>
				you searched : {this.state.resultSearch}
				<form onSubmit={this.onSubmit} className='form'>
					<input
						type='text'
						name='text'
						placeholder='Search Users...'
						value={this.state.text}
						onChange={this.onChange}
					/>
					<input
						type='submit'
						value='Search'
						className='btn btn-dark btn-block'
					/>
				</form>
				{showClear && (
					<button className='btn btn-light btn-block' onClick={clearUsers}>
						Clear User
					</button>
				)}
			</div>
		);
	}
}

export default Search;
