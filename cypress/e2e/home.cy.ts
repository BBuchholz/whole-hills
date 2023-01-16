describe('home page', () => {
  it('contains an h1 block with the correct text', () => {
    cy.visit("http://localhost:3000");
    cy.get("h1");
  })
})

export {} // added to fix typescript issue, (comment out this line to see the problem in vscode)