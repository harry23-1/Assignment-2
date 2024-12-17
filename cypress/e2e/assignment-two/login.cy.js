import '../../support/commands';
describe('Login in form UI', () => {
    it('It logged in without ui elements and verify username in toolbar', () => {
      cy.login();
cy.visit('/')
cy.contains('Harry').should('be.visible') 
    });
  });
  