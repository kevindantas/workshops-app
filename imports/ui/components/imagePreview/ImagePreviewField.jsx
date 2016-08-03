import Meteor from 'meteor/meteor';
import React , { Component, PropTypes } from 'react';


import ImagePreview from './ImagePreview';

/**
 * Preview a image file 
 *
 * 
 */
export default class ImagePreviewField extends Component {

	/**
	 * @constructor
	 */
	constructor(props) {
		super(props);

		this.styles = {
			wrapper: {
				color: '#455a64',
				padding: '40px 20px',
				display: 'inline-block',
				border: '3px dashed rgba(0, 0, 0, .2)',
				position: 'relative',
				textAlign: 'center',
				boxSizing: 'border-box'
			},
			input: {
				width: '100%',
				height: '100%',
				opacity: 0,
				position: 'absolute',
				left: 0,
				top: 0
			},
			previewWrapper: {

			}
		};

		if(this.props.fullWidth) 
			this.styles.wrapper.width = '100%';

		this.state = {
			visibleDisplayText: true,
			images: []
		}
	}


	/**
	 * Set default value for the component
	 * @return {object} Properties values
	 */
	static get defaultProps() {
		return {
 			multiple: false
		}
	}


	/**
	 * Validate MIME type
	 * @param  {object} photo - Image to be evaluated
	 * @return {bool} - If it is a valid image
	 */
	validatePhoto(image) {

	}



	/**
	 * [onChangeHandle description]
	 * @return {[type]} [description]
	 */
	onChangeHandle(e) {

	    var inputFiles = e.target.files;

	    if(inputFiles.length <= 0)
	    	return false;

	    var arrFiles = [];

	    for (var i = 0; i < inputFiles.length; i++) {
	    	arrFiles.push(inputFiles.item(i));
	    }

	    if(!this.props.multiple)
	    	this.setState({ visibleDisplayText: false })

	    this.setState({images: arrFiles});
	}


	/**
	 * Render input file
	 * @return {[type]} [description]
	 */
	renderInput() {
		this.input = (
			<input 
				style={this.styles.input}
				onChange={ this.onChangeHandle.bind(this) }
				accept="image/*"
				type="file" 
				name={this.props.name}  />
		);

		return this.input;
	}


	getInputNode() {
		return this._reactInternalInstance.getNativeNode();
	}




	removeImage(image) {
		console.log(images);
		console.log(this.getInputNode())
	}



	/**
     * Render the component
     * 
     * @return {dom} Rendered component
     */
	render() {
		return (
			<div>
				<div className="wrapper" style={this.styles.wrapper}>
					{(() => {
						if(this.state.visibleDisplayText)
							return (<span>{ this.props.displayText || 'Drag and drop your files here' }</span>)
					})() }

					{ this.renderInput() }

					{ (() => {
						if(!this.props.multiple)
							return (
								<div style={this.styles.previewWrapper}>
									{ this.state.images.map((image) => (
										<ImagePreview key={image.name + image.lastModified} image={image} onRemoveImage={this.removeImage.bind(this)} />
									)) }
								</div>
							)
					})() }
				</div>
				{ (() => {
					if(this.props.multiple)
						return (
							<div style={this.styles.previewWrapper}>
								<h2>multiple</h2>
								{ this.state.images.map((image) => (
									<ImagePreview key={image.name + image.lastModified} image={image} onRemoveImage={this.removeImage.bind(this)} />
								)) }
							</div>
						)
				})() }
			</div>
		);
	}
}

ImagePreviewField.propTypes = {
	name: PropTypes.string.isRequired,
	multiple: PropTypes.bool
};
