/// <reference types="cypress" />

it('works', () => {
  cy.visit('index.html')
  cy.contains('Save Changes')
})

it('does not work', () => {
  cy.visit('index.html')
  cy.contains(/Save Changes/)
})
