describe('smoke', () => {
  it('sees learn', () => {
    cy.visit('/');
    cy.get('a').contains('Learn');
  });
});
