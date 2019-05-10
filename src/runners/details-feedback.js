import React from "react";
import ReactDOM from "react-dom";
import DetailsFeedbackWidget from "../../components/details_feedback/details_feedback_widget.react";

{
	const detailsPage = document.querySelector(".details-page");
	const path = window.location.pathname;
	const regex = /\/details\/r\/(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

	if (detailsPage && path.match(regex)) {
		if (detailsPage.contains(document.getElementById("page_wrap"))) {
			const pageWrap = document.getElementById("page_wrap");
			if (!document.getElementById("details-feedback-wrapper")) {
				let asideDom = `
					<aside class="row">
						<div class="details-breather details-row margin-bottom holding-box border-top">
							<div id="details-feedback-wrapper"></div>
						</div>
					</aside>`;

				pageWrap.insertAdjacentHTML("beforeend", asideDom);

				ReactDOM.render(
					<DetailsFeedbackWidget />,
					document.getElementById("details-feedback-wrapper")
				);
			}
		}
	}
}
