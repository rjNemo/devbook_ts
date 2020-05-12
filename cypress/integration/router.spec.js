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

  it('contains SignIn page', () => {
    cy.visit(ROUTES.SIGN_IN);
    cy.get('section');
  });

  it('contains Developers page', () => {
    cy.visit(ROUTES.DEVELOPERS);
    cy.get('section');
  });

  it('contains Profile page', () => {
    cy.visit(ROUTES.PROFILE);
    cy.get('section');
  });

  it('contains Dashboard page', () => {
    cy.visit(ROUTES.DASHBOARD);
    cy.get('section');
  });
});
