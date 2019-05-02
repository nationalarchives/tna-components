// Guidance Feedback Routes
const express = require('express'),
    globalSearchRouter = express.Router();

/* This route will only run when the url
*   is set to /help-with-your-research/research-guides
*   and it's controlled by app.js
*/
globalSearchRouter.route('/')
    .get((req,res) => {
        res.render('global-search', {
            title: 'Global Search React Component'
        });
    });

module.exports = globalSearchRouter;