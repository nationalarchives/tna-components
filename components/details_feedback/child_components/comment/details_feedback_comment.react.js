import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  const { id, commentLabel, commentWarning, onChange } = props;
  return (
    <div className="comment">
      <label for={id}>{commentLabel}</label>
      <input onChange={onChange} type="text" id={id} />

      {commentWarning ? <p>{commentWarning}</p> : null}
    </div>
  );
};

Comment.defaultProps = {
  id: null,
  commentLabel: null,
  commentWarning: false
};

Comment.propTypes = {
  id: PropTypes.string,
  commentLabel: PropTypes.string.isRequired,
  commentWarning: PropTypes.string,
  onChange: PropTypes.func
};

export default Comment;
