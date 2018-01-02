describe('Routing', () => {
  it('should navigate to about page when the nav link is clicked', () => {
    cy.visit('/')
      .get('#navLinkAbout').click()
      .url('/about');

      // Alternative approach to the get call above that doesn't require adding IDs:
      // cy.contains('About').click();
  });

  it('should contain empty root div in homepage markup', () => {
    // Request is a faster alternative to .visit above that just returns the page content
    // without waiting for resources to load or parsing JS.
    // Also useful for making HTTP calls.
    cy.request('/').its('body').should('include', '<div id="app"></div>')
  });
})
