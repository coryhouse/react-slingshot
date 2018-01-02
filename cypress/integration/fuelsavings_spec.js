describe('Fuel Savings', () => {
  beforeEach( () => {
    cy.visit('/fuel-savings');
  })

  it('should not display results with insufficient data', () => {
    cy.get('#fuelSavingsResults').should('not.exist')
  });

  it('should not display results when invalid data is entered', () => {
    cy.get('#newMpg').type('bad data')
    cy.get('#tradeMpg').type(30)
    cy.get('#newPpg').type(3.30)
    cy.get('#tradePpg').type(3.30)
    cy.get('#milesDriven').type(10000)
    cy.get('#milesDrivenTimeframe').select('year')
    cy.get('#fuelSavingsResults').should('not.exist')
  });

  it('should display results when valid data is entered', () => {
    cy.get('#newMpg').type(40)
    cy.get('#tradeMpg').type(30)
    cy.get('#newPpg').type(3.30)
    cy.get('#tradePpg').type(3.30)
    cy.get('#milesDriven').type(10000)
    cy.get('#milesDrivenTimeframe').select('year')

    cy.get('#fuelSavingsResults')

    // Add this after any command to debug in console
    // .debug()

    // Or, add this to print log messages in the command log.
    // cy.log('message here')
  })
})
