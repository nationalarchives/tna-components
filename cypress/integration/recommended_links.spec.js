describe('Recommended links => /results/r?_q=', () => {
  //
  before(() => {
    cy.visit('/results/r');
    cy.get('.search-results .generic-tabs');
  });

  it('Do not display the widget if the search term is not in our list', () => {
    cy.get('input[name="_q"]').type('William Shakespeare', { delay: 100 });
    cy.get('.searchbox form').submit();
    cy.get(
      '#recommended-links-discovery .searchList li.recommended-link'
    ).should('have.length', 0);
  });

  it('Display the widget when the search term matches', () => {
    cy.get('input[name="_q"]').type('Marriage records', { delay: 100 });
    cy.get('.searchbox form').submit();
    cy.get('#recommended-links-discovery .searchList li.recommended-link');
    cy.wait(2000);
  });

  it('Hide the widget when the search term does not matches', () => {
    cy.get('input[name="_q"]').type('Wills', { delay: 100 });
    cy.get('.searchbox form').submit();
    cy.get(
      '#recommended-links-discovery .searchList li.recommended-link'
    ).should('have.length', 0);
  });
});

describe('Recommended links => /results/r/2?_q=', () => {
  before(() => {
    cy.visit('/results/r/2');
    cy.get('.search-results .generic-tabs');
  });
  it('Should not display the widget and its DOM elements on inner page(s)', () => {
    cy.get('input[name="_q"]').type('birth certificates', { delay: 100 });
    cy.get('.searchbox form').submit();
    cy.get(
      '#recommended-links-discovery .searchList li.recommended-link'
    ).should('have.length', 0);
  });
});

describe('Recommended links => /results/c?_q=', () => {
  before(() => {
    cy.visit('/results/c');
    cy.get('.search-results .generic-tabs');
  });
  it('Should not display the widget and its DOM elements on Record creator page(s)', () => {
    cy.get('input[name="_q"]').type('death record', { delay: 100 });
    cy.get('.searchbox form').submit();
    cy.get(
      '#recommended-links-discovery .searchList li.recommended-link'
    ).should('have.length', 0);
  });
});
