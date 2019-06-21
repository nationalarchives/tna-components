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
    success: null
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

  // Check if it's a valid Year
  checkIfValidYear = (field, objKey, errMsgOne, errMsgTwo, year) => {
    field > year
      ? this.setState({ [objKey]: errMsgOne }, this.stateIsOnFire)
      : this.setState({ [objKey]: errMsgTwo }, this.stateIsOnFire);
  };

  // Set the state to the initial state and hide the message
  hideErrorMsg = (field, objKey, errMsg) => {
    field !== '' ? this.setState({ [objKey]: errMsg }) : null;
  };

  // Check if field Show is empty or has a space inside
  // Update the state on errorShow with the error Message
  showErrorMsgIfEmptyOrWhiteSpace = e => {
    return (field, objKey, errMsg) => {
      if (field === ' ' || field === '') {
        this.setState({ [objKey]: errMsg }, this.stateIsOnFire);
        e.preventDefault();
      }
    };
  };

  showErrorMsgLength = e => {
    return (fieldOne, fieldTwo, objKey, errMsg) => {
      if (
        (fieldOne !== '' && fieldTwo.length < 4 && fieldTwo.length > 0) ||
        fieldTwo.length > 4
      ) {
        this.setState({ [objKey]: errMsg }, this.stateIsOnFire);
        e.preventDefault();
      }
    };
  };

  showErrorMsgYearEarlier = e => {
    return (yearBefore, yearAfter, objKey, errMsg) => {
      if (yearBefore > yearAfter) {
        e.preventDefault();
        this.setState({ [objKey]: errMsg });
        e.preventDefault();
      }
    };
  };

  enterBothDates = e => {
    return (field, errField, fieldTwo, objKey, errMsg) => {
      if (field !== '' && errField === '' && fieldTwo === '') {
        this.setState({ [objKey]: errMsg }, this.stateIsOnFire);
        e.preventDefault();
      }
    };
  };

  notANumber = e => {
    return (val, objKey, errMsg) => {
      if (isNaN(val)) {
        this.setState({ [objKey]: errMsg }, this.stateIsOnFire);
        e.preventDefault();
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

  onKeyUpInp = () => {
    /**
     * Set properties / destructuring
     */
    const currentYear = new Date().getFullYear(),
      { valueShow, valueBetween, valueAnd } = this.state,
      { fieldBetween, fieldAnd } = this.state.Data.form,
      { errorBetween, errorAnd } = this.mainState;

    /**
     * Error messages
     * Hide the error message once value is being typed
     */
    this.hideErrorMsg(valueShow, 'errorShow', this.mainState.valueShow);

    // Field Between
    // Error Message: Please enter a valid year
    this.checkIfValidYear(
      valueBetween,
      'errorBetween',
      fieldBetween.errorMsgCurrentYear,
      errorBetween,
      currentYear
    );

    // Field And
    // Error Message: Please enter a valid year
    this.checkIfValidYear(
      valueAnd,
      'errorAnd',
      fieldAnd.errorMsgCurrentYear,
      errorAnd,
      currentYear
    );
  };

  stateIsOnFire = () => {
    const { errorBetween, errorAnd, errorShow } = this.state;

    errorBetween !== '' || errorAnd !== '' || errorShow !== ''
      ? this.setState({ success: false })
      : this.setState({ success: true });
  };

  optionStateFire = () => {
    let option = '';

    if (this.state.valueAcross === 'all') {
      option = this.state.Data.form.fieldAcross.select.options[0].name;
    }
    if (this.state.valueAcross === 'tna') {
      option = this.state.Data.form.fieldAcross.select.options[1].name;
    }
    if (this.state.valueAcross === 'oth') {
      option = this.state.Data.form.fieldAcross.select.options[2].name;
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
      errMsgLengthFieldBetween = this.showErrorMsgLength(e),
      errMsgLengthFieldAnd = this.showErrorMsgLength(e),
      enterBothDatesFieldAnd = this.enterBothDates(e),
      enterBothDatesFieldBetween = this.enterBothDates(e),
      notANumberB = this.notANumber(e),
      notANumberA = this.notANumber(e),
      stopForm = this.preventFormSubmission(e),
      showErrorMsgYearEarlier = this.showErrorMsgYearEarlier(e);

    /**
     * Field Show =============================================================
     *  */
    // Please enter keyword or catalogue reference
    errMsgIfEmptyFieldShow(valueShow, 'errorShow', fieldShow.errorMsg);

    /**
     * Field Between ==========================================================
     * */

    // Error Message: Plese enter 4 digits
    errMsgLengthFieldBetween(
      valueShow,
      valueBetween,
      'errorBetween',
      fieldBetween.errorMsgLength
    );

    // Error Message: Please enter both start date and end date
    enterBothDatesFieldBetween(
      valueAnd,
      errorAnd,
      valueBetween,
      'errorBetween',
      fieldBetween.errorMsgDateRange
    );

    // Error Message: You have entered an invalid date format
    notANumberB(valueBetween, 'errorBetween', fieldBetween.errorMsgEarlier);

    // Error Message: Between date must be earlier than And date
    showErrorMsgYearEarlier(
      valueBetween,
      valueAnd,
      'errorBetween',
      fieldBetween.errorMsgEarlier
    );

    /**
     * Field And ============================================================
     * */

    // Error Message: Plese enter 4 digits
    errMsgLengthFieldAnd(
      valueShow,
      valueAnd,
      'errorAnd',
      fieldAnd.errorMsgLength
    );

    // Error Message: Please enter both start date and end date
    enterBothDatesFieldAnd(
      valueBetween,
      errorBetween,
      valueAnd,
      'errorAnd',
      fieldAnd.errorMsgDateRange
    );

    // Error Message: You have entered an invalid date format
    notANumberA(valueAnd, 'errorAnd', fieldAnd.errorMsgInvalid);

    /**
     * On Form Update
     */
    stopForm(errorShow, errorBetween, errorAnd);

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
        <Form
          id={formId}
          name={formId}
          method={method}
          action={action}
          onSubmit={this.onSubmitSearch}>
          <div className={grid.container} role={role}>
            <div className={grid.group.headline}>
              <h1>{mainHead}</h1>
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
                onKeyUp={this.onKeyUpInp}>
                {fieldShow.label.text}
              </Input>
            </div>
            <div className={grid.group.inputBetween}>
              <Input
                for={fieldBetween.label.for}
                placeholder={fieldBetween.input.placeholder}
                type={fieldBetween.input.type}
                name={fieldBetween.input.name}
                id={fieldBetween.input.id}
                inputClass={errorBetween !== '' ? `form-warning` : null}
                value={valueBetween}
                onChange={this.onChangeInput}
                onKeyUp={this.onKeyUpInp}>
                {fieldBetween.label.text}
              </Input>
            </div>
            <div className={grid.group.inputAnd}>
              <Input
                for={fieldAnd.label.for}
                placeholder={fieldAnd.input.placeholder}
                type={fieldAnd.input.type}
                name={fieldAnd.input.name}
                id={fieldAnd.input.id}
                inputClass={errorAnd !== '' ? `form-warning` : null}
                value={valueAnd}
                onChange={this.onChangeInput}
                onKeyUp={this.onKeyUpInp}>
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
                value={this.state.valueAcross}>
                {fieldAcross.label.text}
              </Select>
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
                value={inputSearch.value}>
                Search
              </Button>
            </div>
            <div className={grid.group.moreOptions}>
              <Link url={links.moreOptions.url}>{links.moreOptions.text}</Link>{' '}
              or <Link url={links.browse.url}>{links.browse.text}</Link>
            </div>
          </div>
        </Form>
      </Wrapper>
    );
  }
}

export default HomePageSearchDiscovery;
