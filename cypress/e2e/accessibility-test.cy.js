/// <reference types="cypress" />

describe('Visit Democart main page to validate Accessibility rules', () => {
  it('Cypress-axe should log accessibility failures', () => {
      cy.visit('https://demo.opencart.com', { failOnStatusCode: false });
      cy.injectAxe();
      cy.checkA11y();
  });

  it('Cypress-axe should exclude specific elements on the page', () => {
      cy.visit('https://demo.opencart.com', { failOnStatusCode: false });
      cy.injectAxe();
      cy.checkA11y({exclude: ['#content']});
  })

  it('Cypress-axe should only test specific element on the page', () => {
      cy.visit('https://demo.opencart.com', { failOnStatusCode: false });
      cy.injectAxe();
      cy.checkA11y('body');
  }) 

  it('Cypress-axe should only test specific element in the navigation bar', () => {
    cy.visit('https://demo.opencart.com', { failOnStatusCode: false });
    cy.injectAxe();
    cy.checkA11y('body');
})
});