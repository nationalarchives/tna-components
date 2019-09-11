const express = require('express'),
  homePageSearchDiscovery = express.Router();

/* This route will only run when the url
 *  controlled by app.js
 */
homePageSearchDiscovery.route('/').get((req, res) => {
  res.render('home-page-search-discovery', {});
});

module.exports = homePageSearchDiscovery;
