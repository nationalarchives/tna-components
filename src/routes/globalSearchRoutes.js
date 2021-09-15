const express = require('express'),
    globalSearch = express.Router();

/* This route will only run when the url
 *  controlled by app.js
 */
globalSearch.route('/').get((req, res) => {
    res.render('global-search', {});
});

globalSearch.route('/discovery').get((req, res) => {
    res.render('global-search-discovery', {});
});

module.exports = globalSearch;
