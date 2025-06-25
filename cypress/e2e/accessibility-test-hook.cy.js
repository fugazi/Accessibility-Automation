/// <reference types="cypress" />

describe('Visit Democart main page to validate Accessibility rules', () => {
    beforeEach(() => {
        cy.visit('https://demo.opencart.com', { failOnStatusCode: false });
        cy.injectAxe();
    });


    it('Cypress-axe should log any accessibility failures', () => {
        cy.checkA11y();
    });

    it('Cypress-axe should exclude specific elements on the page', () => {
        cy.checkA11y({exclude: ['#content']});
    });

    it('Cypress-axe should only test specific element on the page', () => {
        cy.checkA11y('body');
    })

    it('Cypress-axe should test specific element on the page with specific rules', () => {
        cy.checkA11y('body', {
            rules: {
                'color-contrast': { enabled: false },
                'label': { enabled: false }
            }
        });
    });
});