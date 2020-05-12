import * as ROUTES from '../../src/constants/routes';

describe('App Router', () => {
  it('contains Landing page', () => {
    cy.visit(ROUTES.LANDING);
    cy.get('section');
  });
  it('contains SignUp page', () => {
    cy.visit(ROUTES.SIGN_UP);
    cy.get('section');
  });
});
