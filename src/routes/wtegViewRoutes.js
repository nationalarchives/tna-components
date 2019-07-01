const express = require('express'),
  wtegFeedbackRouter = express.Router();

wtegFeedbackRouter.route('/').get((req, res) => {
  res.render('wteg-view', {});
});

wtegFeedbackRouter.route('/*').get((req, res) => {
  res.render('wteg-view', {});
});

module.exports = wtegFeedbackRouter;
