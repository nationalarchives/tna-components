const express = require('express'),
  wtegFeedbackRouter = express.Router();

wtegFeedbackRouter.route('/').get((req, res) => {
  res.render('what-to-expect-guide-feedback', {});
});

wtegFeedbackRouter.route('/*').get((req, res) => {
  res.render('what-to-expect-guide-feedback', {});
});

module.exports = wtegFeedbackRouter;
