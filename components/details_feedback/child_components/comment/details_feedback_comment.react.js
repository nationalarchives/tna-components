import React from 'react';
import Message from '../message/details_feedback_message.react';
import PropTypes from 'prop-types';

const Comment = props => {
  const { id, commentLabel, commentWarning, onChange, autoFocus } = props;
  return (
    <div className="comment">
      <label for={id}>{commentLabel}</label>
      <textarea onChange={onChange} id={id} name={id} autoFocus={autoFocus} rows="5" cols="33" />

      {commentWarning ? <Message message={commentWarning} /> : null}
    </div>
  );
};

Comment.defaultProps = {
  id: null,
  commentLabel: null,
  onChange: null,
  autoFocus: null
};

Comment.propTypes = {
  id: PropTypes.string,
  commentLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  commentWarning: PropTypes.string
};

export default Comment;
