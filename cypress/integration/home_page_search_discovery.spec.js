describe('Discovery Search UI E2E', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('dev') + '/home-page-search-discovery');
  });
  it('Check user interactions', () => {
    const uniqueID = '#discovery-homepage-search-react-component';

    cy.get(uniqueID).should('be.visible');
    cy.get(`${uniqueID} button`).click();
    cy.get(`${uniqueID} .emphasis-block span`).contains(
      'Please enter keyword or catalogue reference'
    );
    cy.get(`${uniqueID} #search-all-collections`)
      .should('be.visible')
      .type('birth');
    cy.get(`${uniqueID} #start-date`)
      .should('be.visible')
      .type('1988');
    cy.get(`${uniqueID} #end-date`)
      .should('be.visible')
      .type('1987');
    cy.get(`${uniqueID} button`).click();
    cy.get(`${uniqueID} .emphasis-block span`)
      .should('be.visible')
      .contains('Between date must be earlier than And date');
    cy.get(`${uniqueID} #start-date`).clear();
    cy.get(`${uniqueID} #start-date`).type('1947');
    cy.get(`${uniqueID} #end-date`).clear();
    cy.get(`${uniqueID} #end-date`).type(' ');
    cy.get(`${uniqueID} button`).click();
    cy.get(`${uniqueID} #start-date`).clear();
    cy.get(`${uniqueID} #start-date`).type('2020');
    cy.get(`${uniqueID} .emphasis-block span`).contains(
      'Please enter a valid year, e.g. 1922'
    );
    cy.get(`${uniqueID} #start-date`).clear();
    cy.get(`${uniqueID} #start-date`).type('2019');
    cy.get(`${uniqueID} #end-date`).type('2020');
    cy.get(`${uniqueID} .emphasis-block span`).contains(
      'Please enter a valid year, e.g. 1922'
    );
    cy.get(`${uniqueID} #start-date`).clear();
    cy.get(`${uniqueID} #end-date`).clear();
    cy.get(`${uniqueID} #end-date`).type('2019');
    cy.get(`${uniqueID} button`).click();
    cy.get(`${uniqueID} .emphasis-block span`).contains(
      'Please enter both start date and end date'
    );
    cy.get(`${uniqueID} #start-date`).type('2018');
    cy.get(`${uniqueID} button`).click();
  });
});
