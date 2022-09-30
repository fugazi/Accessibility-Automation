/// <reference types="cypress" />

describe('Visit Democart main page to validate Accessibility rules', () => {
    beforeEach(() => {
        cy.visit('https://demo.opencart.com');
        cy.injectAxe();
    });


    it('Cypress-axe should log any accessibility failures', () => {
        cy.checkA11y();
    });

    it('Cypress-axe should exclude specific elements on the page', () => {
        cy.checkA11y({exclude: ['#content']});
    });

    it('Cypress-axe should only test specific element on the page', () => {
        cy.checkA11y('.btn-default');
    })
});