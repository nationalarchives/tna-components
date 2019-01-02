// Guidance Feedback Routes
const express = require('express'),
      feedbackRouter = express.Router();

/* This route will only run when the url 
*   is set to /help-with-your-research/research-guides
*   and it's controlled by app.js
*/
feedbackRouter.route('/')
.get((req,res) => {
    res.render('feedback-widget', { 
        title: 'Guidance Feedback React Component'
    });
});

module.exports = feedbackRouter;