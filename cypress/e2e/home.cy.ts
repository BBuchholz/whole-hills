describe('home page', () => {
  it.only('contains an h1 block with the Testing text', () => {
    cy.visit("http://localhost:3000")
    cy.get("[data-test='hero-heading']").contains("Testing")
  })

  it('contains the courses feature first', () => {
    cy.visit("http://localhost:3000")
    cy.get("dt").eq(0).contains("4 Courses")
  })

  it('contains the lessons feature second', () => {
    cy.visit("http://localhost:3000")
    cy.get("dt").eq(1).contains("Lessons")
  })

  it('contains the foss feature third', () => {
    cy.visit("http://localhost:3000")
    cy.get("dt").eq(2).contains("Free and Open Source")
  })
})

export {} // added to fix typescript issue, (comment out this line to see the problem in vscode)