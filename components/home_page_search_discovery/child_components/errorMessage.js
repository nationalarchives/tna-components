import React from 'react';

const ErrorMessage = ({ errorShow, errorBetween, errorAnd }) => {
  let bool = false;

  if (errorShow !== '' || errorBetween !== '' || errorAnd !== '') {
    bool = true;
  }

  return (
    <React.Fragment>
      {bool ? (
        <div
          role="alert"
          class={
            errorShow !== '' || errorBetween !== '' || errorAnd !== ''
              ? `emphasis-block`
              : null
          }>
          {errorShow !== '' ? <span>{errorShow}</span> : null}
          {errorBetween !== '' ? <span>{errorBetween}</span> : null}
          {errorAnd !== '' ? <span>{errorAnd}</span> : null}
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default ErrorMessage;
