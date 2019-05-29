describe('Checks for the initial elements to not be loaded', function() {
  it('successfully checks the initial elements are not loaded', function() {
    cy.visit('http://localhost:3000/details/r/');
    cy.get('form').should('not.exist');
  });
});

describe('Checks for the initial elements', function() {
  it('successfully checks the initial elements', function() {
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

describe('Check the no state', function() {
  it('successfully checks the no fieldset', function() {
    cy.visit(
      'http://localhost:3000/details/r/0125874efb9c41f78f1cfdbdb1544e08'
    );
    cy.get('form')
      .find('button')
      .contains('No')
      .click();
    cy.get('fieldset').should('id', 'no_fieldset');
    cy.focused();
    cy.get('fieldset')
      .find('button')
      .contains('Send');
    cy.get('fieldset')
      .find('button')
      .contains('Cancel');
  });
});
