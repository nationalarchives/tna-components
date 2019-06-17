const express = require('express'),
	wtegFeedbackRouter = express.Router();

wtegFeedbackRouter.route('/').get((req, res) => {
	res.render('wteg-feedback', {});
});

wtegFeedbackRouter.route('/*').get((req, res) => {
	res.render('wteg-feedback', {});
});

module.exports = wtegFeedbackRouter;
