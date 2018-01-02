// This file shows a few example Cypress integration tests against their example site.
describe('My first test', function () {
  it('Does not do much', function () {
    expect(true).to.equal(true)
  })

  it('Visit URL, click link, assert URL, enter data, assert result', function () {
    // Only have to issue this once to support stepping through.
    // cy.pause();

    cy.visit('http://example.cypress.io')

    // many cypress commands (like contains) have built in assertions.
    // so this asserts and would fail if type wasn't found.
    cy.contains('type').click()

    // Assert that URL contains expected value
    cy.url().should('include', '/commands/actions')

    cy.get('.action-email')
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')
  })
})
