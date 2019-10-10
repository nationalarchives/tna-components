describe('Checks that the elements have loaded', () => {
  it('successfully checks that the desktop and mobile components loaded', () => {

    cy.visit('http://localhost:3000/global-search');

    cy.get('form').should('have.length', 2)

  })

});

describe('Checks that the element loads in the correct state', () => {

  it('has the correct props on load', () => {
    cy.visit('http://localhost:3000/global-search');

    cy.get('form').each(($element) => {

      cy.get($element).find('#search-query input')
          .should('have.attr', 'placeholder', 'Search our website')
    })

  });

  it('hides the search options on desktop, shows on mobile', () => {
    cy.visit('http://localhost:3000/global-search');

    cy.get('form').each(($element, index) => {

      if(index == 0) {
      cy.get($element).find('#select-search-type').should('not.exist');
      }
      else {
        cy.get($element).find('#select-search-type').should('exist');
      }

    })

  })


});

describe('Check that all the HTML elements exist', () => {


  it('has the correct attributes on the form elements',  ()=> {
    cy.visit('http://localhost:3000/global-search');

    cy.get('form').each(($element, index) => {

      cy.get($element).should('have.attr', 'class', 'global-search-js');
      cy.get($element).should('have.attr', 'role', 'search');
      cy.get($element).should('have.attr', 'action', 'https://www.nationalarchives.gov.uk/search/results');

    })
  })


});
