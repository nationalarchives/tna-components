const express = require('express'),
  recommendedRouter = express.Router();

/* This route will only run when the url
 *  controlled by app.js
 */
recommendedRouter.route('/r').get((req, res) => {
  res.render('recommended-links-discovery', {});
});

recommendedRouter.route('/r/2').get((req, res) => {
  res.render('recommended-links-discovery', {});
});

module.exports = recommendedRouter;
