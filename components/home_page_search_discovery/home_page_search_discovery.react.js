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
  constructor(props) {
    super(props);

    // Set properties
    this.objGTM = {};

    // Set the initial State
    this.state = {
      Data,
      valueShow: '',
      valueBetween: '',
      valueAnd: '',
      errorShow: '',
      errorBetween: '',
      errorAnd: '',
      success: false
    };

    // Preserve the initial state in a new object so it can be reused
    this.mainState = this.state;

    // Create a unique DOM reference for the hidden input
    this.hiddenRef = React.createRef();

    // Bind methods to construtor
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
    this.onKeyUpInp = this.onKeyUpInp.bind(this);
    this.updateErrorMsgOnFieldShow = this.updateErrorMsgOnFieldShow.bind(this);
    this.checkIfValidYearOnFieldAnd = this.checkIfValidYearOnFieldAnd.bind(
      this
    );
    this.checkIfValidYearOnFieldBetween = this.checkIfValidYearOnFieldBetween.bind(
      this
    );
    this.updateErrorMsgOnFieldShowIfEmpty = this.updateErrorMsgOnFieldShowIfEmpty.bind(
      this
    );
    this.updateErrorMsgOnFiledBetween = this.updateErrorMsgOnFiledBetween.bind(
      this
    );
    this.updateErrorMsgOnFiledAnd = this.updateErrorMsgOnFiledAnd.bind(this);
    this.updateErrorMsgOnFieldAndIfFieldBetweenIsEmpty = this.updateErrorMsgOnFieldAndIfFieldBetweenIsEmpty.bind(
      this
    );
    this.updateErrorMsgOnFieldAndIfFieldAndIsEmpty = this.updateErrorMsgOnFieldAndIfFieldAndIsEmpty.bind(
      this
    );
    this.onFormSuccess = this.onFormSuccess.bind(this);
    this.buildGTMObj = this.buildGTMObj.bind(this);
  }

  // Check input value on change
  onChangeInput(e) {
    if (e.target.id === 'search-all-collections') {
      this.setState({ valueShow: e.target.value });
    }
    if (e.target.id === 'start-date') {
      this.setState({ valueBetween: e.target.value });
    }
    if (e.target.id === 'end-date') {
      this.setState({ valueAnd: e.target.value });
    }
  }

  // Check if it's a valid Year on Field And
  checkIfValidYearOnFieldAnd(year) {
    if (this.state.valueAnd > year) {
      this.setState({
        errorAnd: this.state.Data.form.fieldAnd.errorMsgCurrentYear
      });
    } else {
      this.setState({
        errorAnd: this.mainState.errorAnd
      });
    }
  }

  // Check if it's a valid Year on Field Between
  checkIfValidYearOnFieldBetween(year) {
    if (this.state.valueBetween > year) {
      this.setState({
        errorBetween: this.state.Data.form.fieldBetween.errorMsgCurrentYear
      });
    } else {
      this.setState({
        errorBetween: this.mainState.errorBetween
      });
    }
  }

  // Update errorShow message to the initial state message
  updateErrorMsgOnFieldShow() {
    if (this.state.valueShow !== '') {
      this.setState({ errorShow: this.mainState.valueShow });
    }
  }

  // Check if field Show is empty or has a space inside
  // Update the state on errorShow with the error Message
  updateErrorMsgOnFieldShowIfEmpty(e) {
    if (this.state.valueShow === ' ' || this.state.valueShow === '') {
      this.setState({ errorShow: this.state.Data.form.fieldShow.errorMsg });
      e.preventDefault();
    }
  }

  updateErrorMsgOnFiledBetween(e) {
    if (
      (this.state.valueShow !== '' &&
        this.state.valueBetween.length < 4 &&
        this.state.valueBetween.length > 0) ||
      this.state.valueBetween.length > 4
    ) {
      this.setState({
        errorBetween: this.state.Data.form.fieldBetween.errorMsgLength
      });
      e.preventDefault();
    }
  }

  updateErrorMsgOnFiledAnd(e) {
    if (
      (this.state.valueShow !== '' &&
        this.state.valueAnd.length < 4 &&
        this.state.valueAnd.length > 0) ||
      this.state.valueAnd.length > 4
    ) {
      this.setState({
        errorAnd: this.state.Data.form.fieldAnd.errorMsgLength
      });
      e.preventDefault();
    }
  }

  updateErrorMsgOnFieldAndIfFieldBetweenIsEmpty(e) {
    if (
      this.state.valueBetween !== '' &&
      this.state.errorBetween === '' &&
      this.state.valueAnd === ''
    ) {
      this.setState({
        errorAnd: this.state.Data.form.fieldAnd.errorMsgDateRange
      });

      e.preventDefault();
    }
  }

  updateErrorMsgOnFieldAndIfFieldAndIsEmpty(e) {
    if (
      this.state.valueAnd !== '' &&
      this.state.errorAnd === '' &&
      this.state.valueBetween === ''
    ) {
      this.setState({
        errorBetween: this.state.Data.form.fieldBetween.errorMsgDateRange
      });

      e.preventDefault();
    }
  }

  buildGTMObj(obj) {
    const { success } = this.state;
    if (success === true) {
      obj.event = 'Discovery search';
      obj.eventAction = 'Discovery homepage search';
      obj.eventCategory = 'Successful search';
      obj.eventLabel = 'Fields used:';
    } else {
      obj.event = 'Discovery search';
      obj.eventAction = 'Discovery homepage search';
      obj.eventCategory = 'Search errors';
      obj.eventLabel = 'Fields used:';
    }
    return obj;
  }

  pushInDataLayer(obj) {
    let wd = window.dataLayer || [];
    !!obj || typeof obj === 'object' ? wd.push(obj) : '';

    return obj;
  }

  onFormSuccess() {
    const {
      valueShow,
      errorShow,
      errorBetween,
      errorAnd,
      success
    } = this.state;
    if (
      valueShow !== '' &&
      valueShow !== ' ' &&
      errorShow === '' &&
      errorBetween === '' &&
      errorAnd === ''
    ) {
      this.setState({ success: !success });
      console.log(success);
    } else {
      this.setState({ success: false });
    }
  }

  onKeyUpInp() {
    const currentYear = new Date().getFullYear();

    this.updateErrorMsgOnFieldShow();
    this.checkIfValidYearOnFieldBetween(currentYear);
    this.checkIfValidYearOnFieldAnd(currentYear);
  }

  onSubmitSearch(e) {
    // If field Show is left empty update error message
    this.updateErrorMsgOnFieldShowIfEmpty(e);

    // Check the presence of value inside the field Between/And
    // Update the state on errorBetween/errorAnd with the error Message
    this.updateErrorMsgOnFiledBetween(e);
    this.updateErrorMsgOnFieldAndIfFieldBetweenIsEmpty(e);
    this.updateErrorMsgOnFieldAndIfFieldAndIsEmpty(e);

    // Set the value to the hidden element
    this.hiddenRef.current.value = this.state.Data.form.hiddenField.valueHidden;

    this.onFormSuccess();
    // GTM
    this.buildGTMObj(this.objGTM);
    this.pushInDataLayer(this.objGTM);
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
              <div
                role="alert"
                class={
                  errorShow !== '' || errorBetween !== '' || errorAnd !== ''
                    ? `emphasis-block`
                    : null
                }>
                <ErrorMessage {...this.state} />
              </div>
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
                name={fieldAcross.select.name}>
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
