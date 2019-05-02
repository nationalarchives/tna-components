import React from 'react';

const ErrorMessage = ({ errorShow, errorBetween, errorAnd }) => {
  return (
    <React.Fragment>
      {errorShow !== '' ? <span>{errorShow}</span> : null}
      {errorBetween !== '' ? <span>{errorBetween}</span> : null}
      {errorAnd !== '' ? <span>{errorAnd}</span> : null}
    </React.Fragment>
  );
};

export default ErrorMessage;
