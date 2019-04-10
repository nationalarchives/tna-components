import React, { Component } from 'react';
import Wrapper from './child_components/wrapper.react';
import Headline from './child_components/headline.react';
import Form from './child_components/form.react';
import Input from './child_components/input.react';
import Select from './child_components/select.react';
import Data from './homePageSearchDiscoveryData.json';

class HomePageSearchDiscovery extends Component {
  render() {
    const { mainHead, classNameContainer, form } = Data,
      {
        method,
        action,
        role,
        grid,
        fieldShow,
        fieldBetween,
        fieldAnd,
        fieldAcross,
        inputSearch
      } = form;
    return (
      <Wrapper>
        <Headline mainhead={mainHead} />
        <div className={classNameContainer} role={role}>
          <Form method={method} action={action}>
            <div className={grid.container}>
              <div className={`${grid.group.fieldGroup} ${grid.group.full}`}>
                <Input
                  labelClass={fieldShow.label.class}
                  for={fieldShow.label.for}
                  placeholder={fieldShow.input.placeholder}
                  type={fieldShow.input.type}
                  name={fieldShow.input.name}
                  id={fieldShow.input.id}
                  aria={fieldShow.input.ariaRequired}
                  required={fieldShow.input.req}>
                  {fieldShow.label.text}
                </Input>
              </div>
            </div>
            <div className={grid.container}>
              <div
                className={`${grid.group.fieldGroup} ${grid.group.halfToHalf}`}>
                <div className={grid.group.fieldSubGroup}>
                  <Input
                    labelClass={fieldBetween.label.class}
                    for={fieldBetween.label.for}
                    placeholder={fieldBetween.input.placeholder}
                    type={fieldBetween.input.type}
                    name={fieldBetween.input.name}
                    id={fieldBetween.input.id}
                    inputClass={fieldBetween.input.class}>
                    {fieldBetween.label.text}
                  </Input>
                </div>
                <div className={grid.group.fieldSubGroup}>
                  <Input
                    labelClass={fieldAnd.label.class}
                    for={fieldAnd.label.for}
                    placeholder={fieldAnd.input.placeholder}
                    type={fieldAnd.input.type}
                    name={fieldAnd.input.name}
                    id={fieldAnd.input.id}
                    inputClass={fieldAnd.input.class}>
                    {fieldAnd.label.text}
                  </Input>
                </div>
              </div>
              <div
                className={`${grid.group.fieldGroup} ${grid.group.halfToHalf}`}>
                <Select option={fieldAcross.select.options}>
                  {fieldAcross.label.text}
                </Select>
              </div>
            </div>
            <input
              type={inputSearch.type}
              title={inputSearch.title}
              value={inputSearch.value}
            />
          </Form>
        </div>
      </Wrapper>
    );
  }
}

export default HomePageSearchDiscovery;
