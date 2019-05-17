import React from 'react';

const Comment = props => {
  const { id, commentText, commentWarning } = props;
  return (
    <div className="comment">
      <label for={id}>{commentText}</label>
      <input type="text" id={id} />

      {commentWarning ? <p>{commentWarning}</p> : null}
    </div>
  );
};

Comment.defaultProps = {
  id: null,
  commentText: null,
  commentWarning: false
};

export default Comment;
