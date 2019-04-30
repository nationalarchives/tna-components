import React, { Component } from 'react';
import Wrapper from '../global/wrapper/wrapper.react';
import Headline from '../global/headline/headline.react';
import Form from '../global/form/form.react';
import Input from '../global/form/input.react';
import Select from '../global/form/select.react';
import Button from '../global/button/button.react';
import Link from '../global/link/link.react';
import ErrorMessage from './child_components/errorMessage';
import Data from './homePageSearchDiscoveryData.json';
import './homePageSearchDiscovery.scss';

class HomePageSearchDiscovery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Data,
      valueShow: '',
      valueBetween: '',
      valueAnd: '',
      errorShow: '',
      errorBetween: '',
      errorAnd: ''
    };

    this.mainState = this.state;

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
    this.onKeyUpInp = this.onKeyUpInp.bind(this);
  }

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

  onKeyUpInp(e) {
    const currentYear = new Date().getFullYear();

    // Reset the state on valueShow to the main state
    if (this.state.valueShow !== '') {
      this.setState({ errorShow: this.mainState.valueShow });
    }

    // Check Year fileds if greater than the curreent year
    if (this.state.valueAnd > currentYear) {
      this.setState({
        errorAnd: this.state.Data.form.fieldAnd.errorMsgCurrentYear
      });
    } else {
      this.setState({
        errorAnd: this.mainState.errorAnd
      });
    }

    if (this.state.valueBetween > currentYear) {
      this.setState({
        errorBetween: this.state.Data.form.fieldBetween.errorMsgCurrentYear
      });
    } else {
      this.setState({
        errorBetween: this.mainState.errorBetween
      });
    }
  }

  onSubmitSearch(e) {
    // Check if field Show is empty or has a space inside
    // Update the state on errorShow with the error Message
    if (this.state.valueShow === ' ' || this.state.valueShow === '') {
      this.setState({ errorShow: this.state.Data.form.fieldShow.errorMsg });
      e.preventDefault();
    }

    // Check the presence of the value on Between and And fields
    // Update the state on errorBetween/errorAnd with the error Message
    if (
      this.state.valueShow !== '' &&
      this.state.valueBetween.length < 4 &&
      this.state.valueBetween.length > 0 || 
      this.state.valueBetween.length > 4
    ) {
      this.setState({
        errorBetween: this.state.Data.form.fieldBetween.errorMsgLength
      });
      e.preventDefault();
    }

    if (
      this.state.valueShow !== '' && 
      this.state.valueAnd.length < 4 && 
      this.state.valueAnd.length > 0 ||
      this.state.valueAnd.length > 4
      ) {
      this.setState({
        errorAnd: this.state.Data.form.fieldAnd.errorMsgLength
      });
      e.preventDefault();
    }

    
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

    if (
      this.state.valueAnd !== '' &&
      this.state.errorAnd === '' &&
      this.state.valueBetween === ''
    ) {
      this.setState({
        errorAnd: this.state.Data.form.fieldBetween.errorMsgDateRange
      });

      e.preventDefault();
    }
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
        method,
        action,
        role,
        fieldShow,
        fieldBetween,
        fieldAnd,
        fieldAcross,
        inputSearch,
        grid
      } = form;
    return (
      <Wrapper id={id}>
        <Form method={method} action={action} onSubmit={this.onSubmitSearch}>
          <div className={grid.container} role={role}>
            <div className={grid.group.headline}>
              <Headline mainhead={mainHead} />
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
                labelClass={fieldShow.label.class}
                for={fieldShow.label.for}
                placeholder={fieldShow.input.placeholder}
                type={fieldShow.input.type}
                name={fieldShow.input.name}
                id={fieldShow.input.id}
                value={valueShow}
                onChange={this.onChangeInput}
                onKeyUp={this.onKeyUpInp}>
                {fieldShow.label.text}
              </Input>
            </div>
            <div className={grid.group.inputBetween}>
              <Input
                labelClass={fieldBetween.label.class}
                for={fieldBetween.label.for}
                placeholder={fieldBetween.input.placeholder}
                type={fieldBetween.input.type}
                name={fieldBetween.input.name}
                id={fieldBetween.input.id}
                inputClass={fieldBetween.input.class}
                value={valueBetween}
                onChange={this.onChangeInput}
                onKeyUp={this.onKeyUpInp}>
                {fieldBetween.label.text}
              </Input>
            </div>
            <div className={grid.group.inputAnd}>
              <Input
                labelClass={fieldAnd.label.class}
                for={fieldAnd.label.for}
                placeholder={fieldAnd.input.placeholder}
                type={fieldAnd.input.type}
                name={fieldAnd.input.name}
                id={fieldAnd.input.id}
                inputClass={fieldAnd.input.class}
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
