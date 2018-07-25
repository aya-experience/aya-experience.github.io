exports.open = () => {
    cy.visit('/');
};

exports.isOnPage = () => {
    cy.location('pathname').should('eq', '/');
};

exports.isBgBlack = () => {
    cy.get('body').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
};

exports.menu = require('./menu.po');
