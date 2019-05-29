describe('Checks for the initial elements to not be loaded', () => {
  it('successfully checks the initial elements are not loaded', () => {
    cy.visit('http://localhost:3000/details/r/');
    cy.get('form').should('not.exist');
  });
});

describe('Checks for the initial elements', () => {
  it('successfully checks the initial elements', () => {
    cy.visit(
      'http://localhost:3000/details/r/0125874efb9c41f78f1cfdbdb1544e08'
    );
    cy.get('h2').should('contain', 'Feedback');
    cy.get('fieldset').should('class', 'initial-question');
    cy.get('fieldset')
      .find('legend')
      .contains('Could this page be improved?');

    cy.get('fieldset')
      .find('button')
      .contains('No');
    cy.get('fieldset')
      .find('button')
      .contains('Yes');
  });
});

describe('Check the no state', () => {
  it('successfully checks the No Fieldset', () => {
    cy.visit(
      'http://localhost:3000/details/r/0125874efb9c41f78f1cfdbdb1544e08'
    );
    cy.get('form')
      .find('button')
      .contains('No')
      .click();
    cy.get('fieldset').should('id', 'no_fieldset');
    cy.get('fieldset')
      .find('legend')
      .contains("We'd like to hear from you");

    cy.focused();

    cy.get('fieldset')
      .find('div')
      .should('have.class', 'comment');

    cy.get('.comment').children('p');
    cy.get('.comment').children('label');
    cy.get('.comment').children('input');

    cy.get('fieldset')
      .find('button')
      .contains('Send');

    cy.get('fieldset')
      .find('button')
      .contains('Cancel');
  });
});
