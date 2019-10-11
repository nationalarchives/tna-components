/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * Guidance Feedback React Parent Component
 * Developer: Mihai Diaconita
 **/

import React, { Component } from 'react';
import Textarea from './child_components/textarea/textarea.react';
import Button from './child_components/button/button.react';
import Input from './child_components/input/input.react';
import './style.scss';

export default class GuidanceFeedback extends Component {
	constructor(props) {
		super(props);

		// Set properties
		this.textarea = null;
		this.objGTM = {};

		// Bind methods to the class component construtor
		this.handleSubmit = this.handleSubmit.bind(this);
		this.buildGTMObj = this.buildGTMObj.bind(this);
		this.updateStateBtnNo = this.updateStateBtnNo.bind(this);
		this.updateStateBtnYes = this.updateStateBtnYes.bind(this);
		this.pushInDataLayer = this.pushInDataLayer.bind(this);
		this.handleCancel = this.handleCancel.bind(this);

		this.setTextareaRef = element => {
			this.textarea = element;
		};

		// Define default state props
		this.state = {
			btnVisible: true,
			formVisible: false,
			label: '',
			fieldId: '',
			message: 'Did you find the guidance you needed?'
		};

		// Preserve the initial state in a new object so it can be reused
		this.initialState = this.state;
	}

	buildGTMObj(obj) {
		// Focus the text input using the raw DOM API
		if (this.textarea) {
			obj.event = 'Feedback';
			obj.eventCategory = 'Research guides feedback';
			obj.eventLabel =
				this.textarea.value === '' ? 'No comment made' : this.textarea.value;
			obj.eventAction = this.textarea.id === 'field-no' ? 'No' : 'Yes';
			return obj;
		}
	}

	pushInDataLayer(obj) {
		let wd = window.dataLayer || [];
		!!obj || typeof obj === 'object' ? wd.push(obj) : '';

		return obj;
	}

	updateStateBtnYes() {
		this.setState(state => ({
			btnVisible: !state.btnVisible,
			formVisible: !state.formVisible,
			label: 'Any comments on your experience?',
			fieldId: 'field-yes'
		}));
	}
	updateStateBtnNo() {
		this.setState(state => ({
			btnVisible: !state.btnVisible,
			formVisible: !state.formVisible,
			label: 'What did you expect to find?',
			fieldId: 'field-no'
		}));
	}

	handleCancel() {
		return this.setState(this.initialState);
	}

	handleSubmit(event) {
		event.preventDefault();

		this.setState(state => ({
			btnVisible: false,
			formVisible: false,
			label: state.label,
			fieldId: state.fieldId,
			message: 'Thank you for your feedback.'
		}));

		// Build the GTM Object
		this.buildGTMObj(this.objGTM);
		// Push the GTM Object in dataLayer
		this.pushInDataLayer(this.objGTM);

		return true;
	}

	render() {
		const btnVisible = this.state.btnVisible,
			formVisible = this.state.formVisible,
			fieldLabel = this.state.label,
			fieldId = this.state.fieldId;

		return (
			<form action="" id="guidance_feedback" className="react_component_gf">
				<h2>Feedback</h2>
				<fieldset>
					<legend id="aria">{this.state.message}</legend>
					<Button
						onClick={this.updateStateBtnNo}
						className={btnVisible ? 'btnGF--no show' : 'btnGF--no hide'}
						type="button"
						name="btnGF--no">
						No
					</Button>

					<Button
						onClick={this.updateStateBtnYes}
						className={btnVisible ? 'btnGF--yes show' : 'btnGF--yes hide'}
						type="button"
						name="btnGF--yes">
						Yes
					</Button>
				</fieldset>

				<fieldset className={formVisible ? 'show' : 'hide'}>
					<Textarea
						id={fieldId}
						label={fieldLabel}
						name={fieldId}
						ref={this.setTextareaRef}
						maxlength="300"
					/>

					<Input
						type="submit"
						value="Send"
						className="btnGF btnGF--send"
						onClick={this.handleSubmit}
					/>

					<Input
						type="reset"
						value="Cancel"
						className="btnGF btnGF--cancel"
						onClick={this.handleCancel}
					/>
				</fieldset>
			</form>
		);
	}
}
