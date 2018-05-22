describe('Retour sur la home page', () => {
    it('Depuis la page réalisation', () => {
      cy.visit('http://localhost:3000/work');
      cy.get('.shadow').click();
      cy.location('pathname').should('eq', '/');
    });

    it('Depuis la page vision', () => {
      cy.visit('http://localhost:3000/vision');
      cy.get('.shadow').click();
      cy.location('pathname').should('eq', '/');
    });
});
