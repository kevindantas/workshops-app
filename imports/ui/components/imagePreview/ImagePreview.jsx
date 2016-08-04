import React , { Component, PropTypes } from 'react';


import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import Paper from 'material-ui/Paper';


/**
 * Show a image from to preview
 */
export default class ImagePreview extends Component {


	/**
	 * @constructor
	 */
	constructor(props) {
		super(props);

		this.state = {};

		this.styles = {
			image: {
				width: '100%',
				maxWidth: 400
			},
			closeButton: {
				position: 'absolute',
				top: 0,
				right: 0
			},
			wrapper: {
				position: 'relative',
				display: 'inline-block'
			}
		};

		// Preview image
		var reader = new FileReader();
		reader.onload = (event) => {
			this.setState({
				previewImage: event.target.result
			})
		}
		reader.readAsDataURL(this.props.image);
	}



	/**
	 * Handle close button click
	 */
	onClickHandle() {
		this.props.onRemoveImage(this.props.image);
	}


	/**
     * Render the component
     * 
     * @return {dom} Rendered component
     */
	render () {
		return (
			<Paper style={this.styles.wrapper} zDepth={2}>
				<IconButton style={this.styles.closeButton} onClick={this.onClickHandle.bind(this)}> <CloseIcon /> </IconButton>
				<img src={this.state.previewImage} alt={this.props.image.name} style={this.styles.image} />
			</Paper>
		);
	}
}


ImagePreview.propTypes = {
	image: PropTypes.object.isRequired
}