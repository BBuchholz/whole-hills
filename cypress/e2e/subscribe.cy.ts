describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to subscribe to the email list", () => {
    
    cy.getByData("email-input").type("mike@twin-peaks.academy")
    
    cy.getByData("submit-button").click()
    
    cy.getByData("success-message")
      .should("exist")
      .contains("mike@twin-peaks.academy")
  })


  it("does NOT allow an invalid email address", () => {
    cy.getByData("email-input").type("bob")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it("does NOT allow already subscribed email addresses", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message")
      .should("exist")
      .contains("already exists. Please use a different email address.")
  })
  
})
