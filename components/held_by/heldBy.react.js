import React, { Component } from 'react';
import Wrapper from './child_components/wrapper.react';
import Headline from './child_components/headline.react';
import Form from './child_components/form.react';
import Input from './child_components/input.react';

const DATA = {
  mainHead:
    'Search The National Archives and over 2,500 archives across the UK',
  fieldShow: {
    label: {
      text: 'Show',
      class: 'fixed-width',
      for: 'search-all-collections'
    },
    input: {
      name: '_q',
      type: 'text',
      required: 'required',
      ariaRequired: true,
      id: 'search-all-collections',
      placeholder: 'everything that contains these terms'
    }
  }
};

class HeldBy extends Component {
  render() {
    const { mainHead, fieldShow } = DATA;
    return (
      <Wrapper>
        <Headline mainhead={mainHead} />
        <div className="search-form-container" role="search">
          <Form>
            <div className="main-search-container">
              <div className="field-group full">
                <Input
                  labelClass={fieldShow.label.class}
                  for={fieldShow.label.for}
                  type={fieldShow.input.type}
                  name={fieldShow.input.name}
                  id={fieldShow.input.id}
                  ari-required={fieldShow.input.ariaRequired}
                  required={fieldShow.input.required}
                >
                  {fieldShow.label.text}
                </Input>
              </div>
            </div>
          </Form>
        </div>
      </Wrapper>
    );
  }
}

export default HeldBy;
