beforeEach(() => {
  cy.visit('https://discovery.nationalarchives.gov.uk/results/r?_q=birth');
});

describe('Discovery search results page', () => {
  it('Check for URL and DOM elements', () => {
    cy.url().should(
      'eq',
      'https://discovery.nationalarchives.gov.uk/results/r?_q=birth'
    );
    cy.get('#search-results .generic-tabs').should('have.length', 1);
    cy.get('#recommended-links-discovery')
      .should('have.length', 1)
      .scrollIntoView();
    cy.get('#recommended-links-discovery h3').should(
      'have.text',
      'Looking for a birth, death, or marriage certificate?'
    );
    cy.get(
      '#recommended-links-discovery .searchList .recommended-link p'
    ).should('have.length', 1);
  });

  it('Hide if the user click on Record creator', () => {
    cy.get('.search-form-container #search-results-search-query')
      .should('have.length', 1)
      .clear()
      .type('birth', { delay: 100 });

    cy.get(
      '.search-form-container #search-keyword input[type="submit"]'
    ).click();

    cy.get('#generic-tabs #nameAuthorities')
      .should('have.length', 1)
      .click();

    cy.url().should(
      'eq',
      'https://discovery.nationalarchives.gov.uk/results/c?_q=birth'
    );

    cy.get('#recommended-links-discovery').should('have.length', 0);

    cy.get('#generic-tabs #records-tab #records')
      .should('have.length', 1)
      .click();

    cy.url().should(
      'eq',
      'https://discovery.nationalarchives.gov.uk/results/r?_q=birth'
    );
  });

  it('Hide the widget on search results inner pages', () => {
    cy.get('.pagination li:nth-child(2)')
      .should('have.length', 1)
      .click();

    cy.url().should(
      'eq',
      'https://discovery.nationalarchives.gov.uk/results/r/2?_q=birth'
    );

    cy.get('#recommended-links-discovery').should('have.length', 0);

    cy.get('.pagination li:nth-child(1)')
      .should('have.length', 1)
      .click();
  });

  it('Do not show the widget if the search term is not in our list', () => {
    cy.get('.search-form-container #search-results-search-query')
      .should('have.length', 1)
      .clear()
      .type('William Shakespeare', { delay: 100 });

    cy.get(
      '.search-form-container #search-keyword input[type="submit"]'
    ).click();

    cy.url().should(
      'eq',
      'https://discovery.nationalarchives.gov.uk/results/r?_q=William+Shakespeare'
    );
  });
});
