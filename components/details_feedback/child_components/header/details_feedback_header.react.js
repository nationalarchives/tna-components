import React from 'react';

const FeedbackHeader = props => {
  const { componentTitle } = props;

  return (
    <React.Fragment>
      <h2 className="h2Style">{componentTitle}</h2>
    </React.Fragment>
  );
};

export default FeedbackHeader;
