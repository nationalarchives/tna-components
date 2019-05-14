// Guidance Feedback Routes
const express = require('express'),
    detailsFeedbackRouter = express.Router();

/* This route will only run when the url
*   is set to /details
*   and it's controlled by app.js
*/
detailsFeedbackRouter.route('/r')
    .get((req,res) => {
        res.render('details-feedback-widget', {
            title: 'Details Feedback React Component'
        });
    });

module.exports = detailsFeedbackRouter;