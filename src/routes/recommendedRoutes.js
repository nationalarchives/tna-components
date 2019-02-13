const express = require('express'),
  recommendedRouter = express.Router();

/* This route will only run when the url
 *  controlled by app.js
 */
recommendedRouter.route('/').get((req, res) => {
  res.render('recommended-links-discovery', {
    title: 'Recommended Links Discovery'
  });
});

module.exports = recommendedRouter;
