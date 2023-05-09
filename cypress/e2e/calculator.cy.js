describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
 
   it('should update the display to running total', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click()
    cy.get('#number6').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '9')


  })
  it('should handle multiple opertations', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click()
    cy.get('#number6').click();
    cy.get('#operator_add').click()
    cy.get('#number3').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '12')
  })
  it('should handle positive numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click()
    cy.get('#number7').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '10')
  })

  it('should handle negative numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator-subtract').click()
    cy.get('#number8').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-3')
  })

  it('should handle decimal numbers', () => {
    cy.get('#number1').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator_add').click()
    cy.get('#number3').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '4.5')
  })
  it('should handle very large numbers', () => {
    cy.get('#number1').click();
    cy.get('#number8').click();
    cy.get('#number5').click();
    cy.get('#number3').click();
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '6179.66')
  })


  it('should handle division by zero', () => {
    cy.get('#number7').click();
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '0')    
  })
  // changed the display to zero instead of error by adding an if statement to the divide function
})