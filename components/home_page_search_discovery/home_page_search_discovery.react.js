import React, { Component } from 'react';
import Wrapper from '../global/wrapper/wrapper.react';
import Form from '../global/form/form.react';
import Input from '../global/form/input.react';
import Select from '../global/form/select.react';
import Button from '../global/button/button.react';
import Link from '../global/link/link.react';
import ErrorMessage from './child_components/errorMessage';
import Data from './home_page_search_discovery_data.json';
import './home_page_search_discovery.scss';

class HomePageSearchDiscovery extends Component {
	// Set properties
	objGTM = {};

	// Set the initial State
	state = {
		Data,
		valueShow: '',
		valueBetween: '',
		valueAnd: '',
		valueAcross: 'all',
		errorShow: '',
		errorBetween: '',
		errorAnd: '',
		success: null,
		regEx: /^((0[1-9]|[[1-2][0-9]|3[0-1])\/(0[1-9]|1[012])\/)?[12][0-9]{3}$/
	};

	// Preserve the initial state in a new object
	// so it can be reused
	mainState = this.state;

	// Create a unique DOM reference
	// for hidden <input name="_dhs" value="y" />
	hiddenRef = React.createRef();

	/**
	 * ==================== IMPORTANT ========================
	 * All Class Methods auto bind using arrow function method
	 */

	// Check input value on change
	onChangeInput = e => {
		if (e.target.id === 'search-all-collections') {
			this.setState({ valueShow: e.target.value });
		}
		if (e.target.id === 'start-date') {
			this.setState({ valueBetween: e.target.value });
		}
		if (e.target.id === 'end-date') {
			this.setState({ valueAnd: e.target.value });
		}
	};

	// Set the state to the initial state and hide the message
	hideErrorMsg = (field, objKey, errMsg) => {
		field !== '' ? this.setState({ [objKey]: errMsg }) : '';
	};

	// Check if field Show is empty or has a space inside
	// Update the state on errorShow with the error Message
	showErrorMsgIfEmptyOrWhiteSpace = e => {
		return (field, objKey, errMsg) => {
			if (field.trim() === '') {
				this.setState({ [objKey]: errMsg }, this.stateIsOnFire);
				e.preventDefault();
			}
		};
	};

	dateValid = e => {
		const { regEx } = this.mainState;
		return (val, objKey, errMsg) => {
			if (val !== '' && regEx.test(val) === false) {
				e.preventDefault();
				this.setState({ [objKey]: errMsg }, this.stateIsOnFire);
			}
		};
	};

	buildGTMObj = obj => {
		const {
				valueShow,
				valueBetween,
				valueAnd,
				errorShow,
				errorBetween,
				errorAnd,
				success
			} = this.state,
			{ fieldShow, fieldBetween, fieldAnd } = this.state.Data.form,
			{ gtm } = this.state.Data;

		if (success === true) {
			obj.event = gtm.success.event;
			obj.eventAction = gtm.success.eventAction;
			obj.eventCategory = gtm.success.eventCategory;
			obj.eventLabel = `${gtm.success.eventLabel} ${
				valueShow !== '' ? fieldShow.input.id : ''
			}${valueBetween !== '' ? ' > ' + fieldBetween.input.id : ''}${
				valueAnd !== '' ? ' > ' + fieldAnd.input.id : ''
			}${' > ' + this.optionStateFire()}`;
		} else {
			obj.event = gtm.fail.event;
			obj.eventAction = gtm.fail.eventAction;
			obj.eventCategory = gtm.fail.eventCategory;
			obj.eventLabel = `${
				errorShow !== '' ? fieldShow.input.id + ': ' + errorShow + ' > ' : ''
			}${
				errorBetween !== ''
					? fieldBetween.input.id + ': ' + errorBetween + ' > '
					: ''
			}${errorAnd !== '' ? fieldAnd.input.id + ': ' + errorAnd : ''}`;
		}
		return obj;
	};

	pushInDataLayer = obj => {
		let wd = window.dataLayer || [];
		!!obj || typeof obj === 'object' ? wd.push(obj) : '';

		return obj;
	};

	stateIsOnFire = () => {
		const { errorBetween, errorAnd, errorShow } = this.state;

		errorBetween !== '' || errorAnd !== '' || errorShow !== ''
			? this.setState({ success: false })
			: this.setState({ success: true });
	};

	optionStateFire = () => {
		let option;
		const { valueAcross } = this.state;
		const { form } = this.state.Data;

		switch (valueAcross) {
			case 'all':
				option = form.fieldAcross.select.options[0].name;
				break;
			case 'tna':
				option = form.fieldAcross.select.options[1].name;
				break;
			case 'oth':
				option = form.fieldAcross.select.options[2].name;
				break;
		}

		return option;
	};

	preventFormSubmission = e => {
		return (err, errTwo, errThree) =>
			err !== '' || errTwo !== '' || errThree ? e.preventDefault() : null;
	};

	selectOption = e => {
		this.setState({ valueAcross: e.target.value });
	};

	showErrorMsgEarlierThan = e => {
		return (valOne, valTwo, objKey, errMsg) => {
			const { regEx } = this.mainState;
			if (regEx.test(valOne) && regEx.test(valTwo) && valOne > valTwo) {
				e.preventDefault();
				this.setState({ [objKey]: errMsg }, this.stateIsOnFire);
			}
		};
	};

	onKeyUpInp = () => {
		/**
		 * Set properties / destructuring
		 */
		const { valueShow, valueBetween, valueAnd } = this.state;

		/**
		 * Error messages
		 * Hide the error message while type
		 */
		this.hideErrorMsg(valueShow, 'errorShow', this.mainState.valueShow);
		this.hideErrorMsg(valueBetween, 'errorBetween', this.mainState.valueBetween);
		this.hideErrorMsg(valueAnd, 'errorAnd', this.mainState.valueAnd);
	};

	onSubmitSearch = e => {
		/**
		 * Set properties / destructuring
		 */
		const {
				valueShow,
				valueAnd,
				valueBetween,
				errorBetween,
				errorAnd,
				errorShow
			} = this.state,
			{ fieldShow, fieldBetween, fieldAnd } = this.state.Data.form;

		/**
		 * Error messages
		 */
		const errMsgIfEmptyFieldShow = this.showErrorMsgIfEmptyOrWhiteSpace(e),
			dateValidBetween = this.dateValid(e),
			dateValidAnd = this.dateValid(e),
			stopForm = this.preventFormSubmission(e),
			showErrorMsgEarlierBetween = this.showErrorMsgEarlierThan(e);

		// Error Message: Between date must be earlier than and date
		showErrorMsgEarlierBetween(
			valueBetween,
			valueAnd,
			'errorBetween',
			fieldBetween.errorMsgEarlier
		);

		// Error Message: Please enter keyword or catalogue reference
		errMsgIfEmptyFieldShow(valueShow, 'errorShow', fieldShow.errorMsg);

		// Error Message: You have entered an invalid date format
		dateValidBetween(valueBetween, 'errorBetween', fieldBetween.errorMsgInvalid);

		// Error Message: You have entered an invalid date format
		dateValidAnd(valueAnd, 'errorAnd', fieldAnd.errorMsgInvalid);

		//On Form Update
		stopForm(errorShow, errorBetween, errorAnd);

		this.stateIsOnFire();

		// Set the value to the hidden element
		this.hiddenRef.current.value = this.state.Data.form.hiddenField.valueHidden;

		setTimeout(() => this.pushInDataLayer(this.objGTM), 100);
	};

	// Use of React lifecycle method
	componentDidUpdate(prevProps, prevState) {
		this.buildGTMObj(this.objGTM);
	}

	render() {
		const {
				valueShow,
				valueBetween,
				valueAnd,
				errorShow,
				errorBetween,
				errorAnd
			} = this.state,
			{ mainHead, id, form, links } = this.state.Data,
			{
				formId,
				method,
				action,
				role,
				fieldShow,
				fieldBetween,
				fieldAnd,
				fieldAcross,
				inputSearch,
				grid,
				hiddenField
			} = form;
		return (
			<Wrapper id={id}>
				<h1>{mainHead}</h1>
				<Form
					id={formId}
					name={formId}
					method={method}
					action={action}
					onSubmit={this.onSubmitSearch}
				>
					<div className={grid.container} role={role}>
						<div className={grid.group.headline}>
							<ErrorMessage {...this.state} />
						</div>
						<div className={grid.group.mainSearch}>
							<Input
								for={fieldShow.label.for}
								placeholder={fieldShow.input.placeholder}
								type={fieldShow.input.type}
								name={fieldShow.input.name}
								id={fieldShow.input.id}
								value={valueShow}
								inputClass={errorShow !== '' ? `form-warning` : null}
								onChange={this.onChangeInput}
								onKeyUp={this.onKeyUpInp}
							>
								{fieldShow.label.text}
							</Input>
						</div>
						<div className={grid.group.inputBetween}>
							<Input
								for={fieldBetween.label.for}
								placeholder={fieldBetween.input.placeholder}
								type={fieldBetween.input.type}
								name={
									valueBetween === '' ? fieldAnd.input.name : fieldBetween.input.name
								}
								id={fieldBetween.input.id}
								inputClass={errorBetween !== '' ? `form-warning` : null}
								value={valueBetween}
								onChange={this.onChangeInput}
								onKeyUp={this.onKeyUpInp}
							>
								{fieldBetween.label.text}
							</Input>
						</div>
						<div className={grid.group.inputAnd}>
							<Input
								for={fieldAnd.label.for}
								placeholder={fieldAnd.input.placeholder}
								type={fieldAnd.input.type}
								name={
									valueBetween === '' ? fieldBetween.input.name : fieldAnd.input.name
								}
								id={fieldAnd.input.id}
								inputClass={errorAnd !== '' ? `form-warning` : null}
								value={valueAnd}
								onChange={this.onChangeInput}
								onKeyUp={this.onKeyUpInp}
							>
								{fieldAnd.label.text}
							</Input>
						</div>
						<div className={grid.group.inputAcross}>
							<Select
								id={fieldAcross.select.id}
								class={fieldAcross.select.class}
								option={fieldAcross.select.options}
								name={fieldAcross.select.name}
								onChange={this.selectOption}
								value={this.state.valueAcross}
							>
								{fieldAcross.label.text}
							</Select>
						</div>
						<div className={grid.group.moreOptions}>
							<Link url={links.moreOptions.url}>{links.moreOptions.text}</Link> or{' '}
							<Link url={links.browse.url}>{links.browse.text}</Link>
						</div>
						<div className={grid.group.search}>
							<Input
								type={hiddenField.type}
								name={hiddenField.name}
								value
								ref={this.hiddenRef}
							/>
							<Button
								type={inputSearch.type}
								title={inputSearch.title}
								value={inputSearch.value}
							>
								Search
							</Button>
						</div>
					</div>
				</Form>
			</Wrapper>
		);
	}
}

export default HomePageSearchDiscovery;
