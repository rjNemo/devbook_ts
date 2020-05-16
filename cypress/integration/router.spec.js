import Routes from '../../src/constants/Routes';

describe('App Router', () => {
  it('contains Landing page', () => {
    cy.visit(Routes.LANDING);
    cy.get('section');
  });

  it('contains SignUp page', () => {
    cy.visit(Routes.SIGN_UP);
    cy.get('section');
  });

  it('contains SignIn page', () => {
    cy.visit(Routes.SIGN_IN);
    cy.get('section');
  });

  it('contains Developers page', () => {
    cy.visit(Routes.DEVELOPERS);
    cy.get('section');
  });

  it('contains Profile page', () => {
    cy.visit(Routes.PROFILE);
    cy.get('section');
  });

  it('contains Edit Profile page', () => {
    cy.visit(Routes.EDIT_PROFILE);
    cy.get('section');
  });

  it('contains Add Experience page', () => {
    cy.visit(Routes.ADD_EXPERIENCE);
    cy.get('section');
  });

  it('contains Add Education page', () => {
    cy.visit(Routes.ADD_EDUCATION);
    cy.get('section');
  });

  it('contains Dashboard page', () => {
    cy.visit(Routes.DASHBOARD);
    cy.get('section');
  });

  it('contains Post page', () => {
    cy.visit(Routes.POST);
    cy.get('section');
  });

  it('contains Posts page', () => {
    cy.visit(Routes.POSTS);
    cy.get('section');
  });
});
