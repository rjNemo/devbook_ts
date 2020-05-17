describe('App Layout', () => {
  it('contains a navbar', () => {
    cy.visit('/');
    cy.get('nav');
  });
});
