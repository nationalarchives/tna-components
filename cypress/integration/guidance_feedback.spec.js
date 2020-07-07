describe('Guidance feedback ', () => {
	beforeEach(() => {
		cy.visit(
			Cypress.env('live') +
				'/help-with-your-research/research-guides/political-history-16th-17th-centuries/'
		);
	});
	it('Should check for DOM elements and test the widget', () => {
		cy.get('#guidance-feedback-react')
			.scrollIntoView()
			.should('be.visible');
		cy.get('#guidance-feedback-react form#guidance_feedback');
		cy.get('#guidance-feedback-react form#guidance_feedback h2').should(
			'have.text',
			'Feedback'
		);
		cy.get('#guidance-feedback-react form#guidance_feedback legend#aria').should(
			'have.text',
			'Did you find the guidance you needed?'
		);
		cy.get('.btnGF--no.show')
			.should('be.visible')
			.click()
			.should('be.hidden');
		cy.get('#guidance-feedback-react form#guidance_feedback label').should(
			'have.text',
			'What did you expect to find?'
		);
		cy.get('textarea#field-no')
			.should('be.visible')
			.type('Cypress end-to-end testing', { delay: 100 });
		//cy.wait(3000);
		cy.get('.btnGF--cancel').click();
		//cy.wait(3000);
		cy.get('#guidance-feedback-react')
			.scrollIntoView()
			.should('be.visible');
		cy.get('.btnGF--yes.show')
			.should('be.visible')
			.click()
			.should('be.hidden');
		//cy.wait(3000);
		cy.get('textarea#field-yes')
			.should('be.visible')
			.type('Cypress end-to-end testing', { delay: 100 });
		cy.get('.btnGF--send').click();
		cy.get('#guidance-feedback-react form#guidance_feedback legend#aria').should(
			'have.text',
			'Thank you for your feedback.'
		);
	});
});
