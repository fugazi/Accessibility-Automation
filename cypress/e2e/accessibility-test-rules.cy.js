/// <reference types="cypress" />

describe('Visit Democart main page to validate Accessibility rules', () => {
    beforeEach(() => {
        cy.visit('https://demo.opencart.com');
        cy.injectAxe();
    });


    it('Cypress-axe should log any accessibility failures', () => {
        cy.checkA11y();
    });

    it('Cypress-axe should only include rules with serious and critical impacts', () => {
        cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] });
    });

    it('Cypress-axe should exclude specific accessibility rules, in this example: color-contrast', () => {
        cy.checkA11y(null, {
            rules: {
                'color-contrast': { enabled: false },
            },
        });
    });
});