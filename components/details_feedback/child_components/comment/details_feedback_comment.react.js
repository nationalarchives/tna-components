import React from 'react';

const Comment = props => {
  const { id, commentLabel, commentWarning } = props;
  return (
    <div className="comment">
      <label for={id}>{commentLabel}</label>
      <input type="text" id={id} />

      {commentWarning ? <p>{commentWarning}</p> : null}
    </div>
  );
};

Comment.defaultProps = {
  id: null,
  commentLabel: null,
  commentWarning: false
};

export default Comment;
