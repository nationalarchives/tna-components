// Guidance Feedback Routes
const express = require("express"),
	feedbackRouter = express.Router();

/* This route will only run when the url
 *   is set to details-page
 *   and it's controlled by app.js
 */
feedbackRouter.route("/").get((req, res) => {
	res.render("details-feedback", {
		title: "Details Feedback React Component"
	});
});

module.exports = feedbackRouter;
