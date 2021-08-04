const express = require('express'),
    enterYourDetailsTimer = express.Router();

/* This route will only run when the url
 *  controlled by app.js
 */
enterYourDetailsTimer.route('/').get((req, res) => {
    res.render('enter-your-details-timer', {});
});

module.exports = enterYourDetailsTimer;
