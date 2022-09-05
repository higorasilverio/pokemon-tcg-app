/// <reference types="cypress" />

describe('empty spec', () => {
  it('should navigate to the about page', () => {
    cy.visit('http://localhost:3000/')

    cy.get('label').contains('Search Card:')
  })
})
