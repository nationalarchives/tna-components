import React, { Component } from 'react';

class FieldsetComment extends Component {
  render() {
    const { id, commentText, commentWarning } = this.props;
    return (
      <div className="comment">
        <label for={id}>{commentText}</label>
        <input type="text" id={id} />
        {commentWarning && (
          <p dangerouslySetInnerHTML={{ __html: commentWarning }} />
        )}
      </div>
    );
  }
}

export default FieldsetComment;
