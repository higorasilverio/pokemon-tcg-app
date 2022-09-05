/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="cypress" />

describe('full spec', () => {
  it('should interact correctly', () => {
    cy.visit('http://localhost:3000/')
    cy.get('label').contains('Search Card:')
    cy.wait(500)
    cy.get('[data-cy="summary"]').should('have.length', 143)
    cy.get('[data-cy="search-input"]').type('Onix-GX')
    cy.get('[data-cy="search-button"]').click()
    cy.wait(500)
    cy.get('[data-cy="summary"]').first().click()
    cy.get('h2').contains('Onix-GX')
    cy.get('[data-cy="attacks-button"]').click()
    cy.get('[data-cy="attack-card"]').should('have.length', 3)
    cy.get('[data-cy="close-button"]').click()
    cy.get('[data-cy="search-button"]').click()
    cy.get('[data-cy="summary"]').should('have.length', 1)
  })
})
