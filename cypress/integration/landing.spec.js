describe('Landing page', () => {
  it('contains app name', () => {
    cy.visit('/');
    cy.get('h1').contains('DevBook');
  });
});
