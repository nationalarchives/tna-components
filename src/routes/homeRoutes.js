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
      detailsFeedback: '/details/r/0125874efb9c41f78f1cfdbdb1544e08',
      wtegView: '/what-to-expect-guide',
      homePageSearchDiscovery: '/home-page-search-discovery',
      globalSearch: '/global-search',
      enterYourDetailsTimer: '/enter-your-details-timer'
    }
  });
});

module.exports = homeRouter;
