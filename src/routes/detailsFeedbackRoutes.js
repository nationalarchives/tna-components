const express = require("express"),
	detailsFeedbackRouter = express.Router();

/* This route will only run when the url
 *  controlled by app.js
 */
detailsFeedbackRouter.route("/").get((req, res) => {
	res.render("details-feedback", {});
});

detailsFeedbackRouter.route("/*").get((req, res) => {
	res.render("details-feedback", {});
});

module.exports = detailsFeedbackRouter;
