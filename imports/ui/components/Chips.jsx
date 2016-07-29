import React, { Component, PropTypes } from 'react';

import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';

/**
 * Component to write and add one or more Chips
 *
 * @example
 * <Chips hintText="My awesome hint" /> 
 */
export default class Chips extends Component {

	/**
	 * @constructor
	 */
	constructor(props) {
		super(props);


		this.chipsWrapperStyle = {
			display: 'flex',
			flexWrap: 'wrap'
		}


		this.chipStyle = {
			marginRight: 8,
			marginBottom: 8
		};
		

		this.state ={
			chipsData: []
		}

	}


	/**
	 * Add a new Chip to the component
	 * 
	 * @param {object} e - Trigered Event
	 */
	addChip(e) {
		var text = e.target.value.trim(),
			keyCode = e.keyCode;

		if(keyCode == 13)
			e.preventDefault();
		
		if(keyCode != 13 || !text) 
			return false;

		this.chipsData = this.state.chipsData;

		var hasAny = this.chipsData.some((chip) => {
			return chip.label == text;
		});

		if(hasAny) {
			e.target.value = null;
			return false;
		}

		const newChip = {
			key: this.chipsData.length,
			label: text
		};

		this.chipsData.push(newChip);
		this.setState({chipsData: this.chipsData});

		e.target.value = null;
	}

	/**
	 * Delete one Chip
	 * 
	 * @param  {int} key - Chip identifier
	 */
	handleRequestDelete(key) {
		this.chipsData = this.state.chipsData;

		this.chipsData = this.chipsData.filter((data) => {
			return data.key != key;
		});

		this.setState({
			chipsData: this.chipsData
		})
	}


	/**
	 * Render each Chip element
	 * @param  {object} data - Data of the new Chip element
	 * 
	 * @return {object} Rendered DOM element
	 */
	renderChip(data) {
		return (
			<Chip 
				key={data.key} 
				style={this.chipStyle}
				onRequestDelete={() => this.handleRequestDelete(data.key)}>
				{data.label}
			</Chip>
		);
	}


	/**
	 * Render the component
	 * 
	 * @return {object} Rendered component
	 */
	render() {
		return (
			<div style={this.props.style} >
				<div className="chips-wrapper" style={this.chipsWrapperStyle} >
					{this.state.chipsData.map(this.renderChip, this)}
				</div>
				<TextField hintText={this.props.hintText} onKeyDown={this.addChip.bind(this)} fullWidth={true} />
			</div>
		);
	}
}

Chips.propTypes = {
	hintText: PropTypes.string.isRequired,
	style: PropTypes.object,
};