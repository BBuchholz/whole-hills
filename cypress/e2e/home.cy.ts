describe('home page', () => {
  
  beforeEach(() => {

    cy.visit("http://localhost:3000")
  
  })
  
  it.only('contains an h1 block with the Testing text', () => {

    cy.get("[data-test='hero-heading']").contains("Testing")
  
  })

  it('contains the courses feature first', () => {

    cy.get("dt").eq(0).contains("4 Courses")
  
  })

  it('contains the lessons feature second', () => {

    cy.get("dt").eq(1).contains("Lessons")
  
  })

  it('contains the foss feature third', () => {

    cy.get("dt").eq(2).contains("Free and Open Source")
  
  })
})

export {} // added to fix typescript issue, (comment out this line to see the problem in vscode)