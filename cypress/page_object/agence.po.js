exports.open = () => {
    cy.visit('/agence');
};

exports.isBgBlue = () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(3, 0, 32)');
};

exports.menu = require('./menu.po');

