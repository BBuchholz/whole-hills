/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
    }
  }
  
