describe('Checks for the initial elements', () => {
	it('successfully checks the initial elements', () => {
		cy.visit(
			'http://localhost:3000/what-to-expect-guide'
		);
		cy.get('#what-to-expect');
		cy.get('h2').should('contain', 'Feedback');
		cy.get('fieldset').should('have.class', 'initial-question');
		cy.get('fieldset').find('legend').should('contain', 'Did you find this helpful?');
		cy.get('fieldset').find('button').should('contain', 'Yes');
		cy.get('fieldset').find('button').should('contain', 'No');
	})
});

describe('Checks the yes feedback form renders', () => {
	it('checks that the feedback form appears after clicking the yes button', () => {
		cy.visit(
			'http://localhost:3000/what-to-expect-guide'
		);
		cy.get('fieldset').find('button').contains('Yes').click();
		cy.get('fieldset').should('id', 'no_fieldset');
		cy.get('fieldset')
			.find('legend')
			.should('contain', 'We\'d like to hear from you');

		cy.focused();

		cy.get('fieldset')
			.find('div')
			.should('have.class', 'comment');

		cy.get('.comment').children('p');
		cy.get('.comment').children('label');
		cy.get('.comment').children('textarea');

		cy.get('fieldset')
			.find('button')
			.contains('Send');

		cy.get('fieldset')
			.find('button')
			.contains('Cancel');

		cy.get('fieldset')
			.find('button')
			.contains('Cancel')
			.click();
		cy.get('fieldset').should('class', 'initial-question');
	})
});

describe('Checks the no feedback form renders', () => {
	it('checks that the feedback form appears after clicking the no button', () => {
		cy.visit(
			'http://localhost:3000/what-to-expect-guide'
		);
		cy.get('fieldset').find('button').contains('No').click();
		cy.get('fieldset').should('id', 'no_fieldset');
		cy.get('fieldset')
			.find('legend')
			.should('contain', 'Please let us know why you are dissatisfied');

		cy.focused();

		cy.get('fieldset')
			.find('div')
			.should('have.class', 'comment');

		cy.get('.comment').children('p');
		cy.get('.comment').children('label');
		cy.get('.comment').children('textarea');

		cy.get('fieldset')
			.find('button')
			.contains('Send');

		cy.get('fieldset')
			.find('button')
			.contains('Cancel');

		cy.get('fieldset')
			.find('button')
			.contains('Cancel')
			.click();
		cy.get('fieldset').should('class', 'initial-question');
	})
});

describe('Test the feedback form end-to-end', function(){
	it('should present a feedback form and present a thank you message following form submission', function(){
		cy.get('form')
			.find('button')
			.contains('Yes')
			.click();

		cy.get('fieldset').should('id', 'no_fieldset');
		cy.get('fieldset')
			.find('legend')
			.contains('We\'d like to hear from you');

		cy.get('.comment').children('p');
		cy.get('.comment').children('label');
		cy.get('.comment').children('textarea');

		cy.get('.comment')
			.children('label')
			.contains(
				'Your feedback helps us improve our services. Please share any comments below.'
			);

		cy.get('.comment')
			.children('p')
			.contains('Please do not include personal contact details.');

		cy.get('fieldset')
			.find('button')
			.contains('Send');

		cy.get('fieldset')
			.find('button')
			.contains('Cancel');

		cy.get('form')
			.find('button')
			.contains('Send')
			.click();

		cy.get('form').should('not.exist');
		cy.get('#what-to-expect')
			.find('p')
			.contains('Thank you for your feedback');
		cy.get('form').should('not.exist');

		cy.visit(
			'http://localhost:3000/what-to-expect-guide'
		);
		cy.get('form')
			.find('button')
			.contains('Yes')
			.click();

		cy.get('form #no_fieldset')
			.find('button')
			.contains('Cancel')
			.click();

		cy.get('form').should('exist');
	})
});
