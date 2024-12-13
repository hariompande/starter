describe('Counter', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('has the correct title', () => {
      console.log(cy.title())
      cy.title().should('equal', 'Starter');
    });
  });