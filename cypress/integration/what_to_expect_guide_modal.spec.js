describe('Checks the modal click events', () => {
  it('successfully the modal', () => {
    cy.visit('http://localhost:3000/what-to-expect-guide');
    cy.get('.what-to-expect-image').click();
    cy.get('.close').click({force: true});
  });
});

describe('Checks Enter and Esc keys working with the modal', () => {
  it('successfully the key events', () => {
    cy.visit('http://localhost:3000/what-to-expect-guide');
    cy.get('.what-to-expect-image').type('{enter}');
    cy.get('.what-to-expect-image').type('{esc}');
  });
});

describe('Checks clicks outside the image', () => {
  it('successfully the closes the modal when click outside', () => {
    cy.visit('http://localhost:3000/what-to-expect-guide');
    cy.get('.what-to-expect-image').click();
    cy.get('.modal').click({force: true});
  });
});
