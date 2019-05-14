// Home page Routes
const express = require('express'),
  homeRouter = express.Router();

/* This route will only run when the url
 *   is set to /
 *   and it's controlled by app.js
 */
homeRouter.route('/').get((req, res) => {
  res.render('home', {
    title: 'The National Archives React Components',
    page: {
      guidanceFeedback: '/help-with-your-research/research-guides',
      recommendedLinksDiscovery: '/results/r',
      detailsFeedback: '/details/r'
    }
  });
});

module.exports = homeRouter;
