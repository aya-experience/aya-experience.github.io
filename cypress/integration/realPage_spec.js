describe('Page de réalisation', () => {
    describe('Séléction d\'une réalisation', () => {
        it('Affiche la réalisation B4ALL', () => {
            cy.visit('http://localhost:3000/work');
            cy.contains('B4All').click();
            cy.location('pathname').should('eq', '/work/Enedis-B4All');
        });
        it('Affiche la réalisation Partnaire', () => {
            cy.visit('http://localhost:3000/work');
            cy.contains('Partnaire').click();
            cy.location('pathname').should('eq', '/work/Partnaire-Partnaire');
        });
    });
});
