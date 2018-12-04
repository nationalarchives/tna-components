import React from "react";
import ReactDOM from "react-dom";
import FeedbackWidget from '../../components/feedback_widget/feedback-widget.react';
import Link from '../../components/link/Link.react';
import CheckboxWithLabel from  '../../components/checkbox/checkbox.react';

const rootElement = document.getElementById("feedBackWidget"),
      secondElement = document.getElementById("link"),
      thirdElement = document.getElementById('checkBox');

ReactDOM.render(<FeedbackWidget/>, rootElement);
ReactDOM.render(<Link/>, secondElement);
ReactDOM.render(<CheckboxWithLabel/>, thirdElement);