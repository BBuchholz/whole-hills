/// <reference types="cypress" />

//@ts-ignore
Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
  })
  
