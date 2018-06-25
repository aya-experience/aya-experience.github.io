describe('Page vision', () => {
        it('Je suis sur intro, Je clique sur la flêche, je passe sur la page gui', () => {
            cy.visit('/vision/intro');
            cy.get('[data-cy=right-arrow]').click();
            cy.location('pathname').should('eq', '/vision/gui');
        });
});
