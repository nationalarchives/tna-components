const express = require('express'),
  detailsFeedbackRouter = express.Router();

detailsFeedbackRouter.route('/').get((req, res) => {
  res.render('details-feedback', {});
});

detailsFeedbackRouter.route('/*').get((req, res) => {
  res.render('details-feedback', {});
});

module.exports = detailsFeedbackRouter;
