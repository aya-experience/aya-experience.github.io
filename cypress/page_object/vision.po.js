exports.open = slug => {
    cy.visit(`/vision/${slug || ''}`);
};

exports.next = () => {
    cy.get('[data-cy=right-arrow]').click();
};

exports.isOnPage = slug => {
    cy.location('pathname').should('eq', `/vision/${slug || ''}`);
};
