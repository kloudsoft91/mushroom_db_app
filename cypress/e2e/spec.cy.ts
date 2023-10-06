describe('Homepage testing', () => {
  context('test on desktop', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/mushroom_db_app/')
      // run these tests as if in a desktop browser
      cy.viewport(1025, 768)
    })

    it('Checks that the search bar is filtering correctly', () => {
      // Get the search bar and type in an input
      cy.get('[data-cy="search"]').type('Shaggy Mane')
  
      // Click the search button
      cy.contains('Search').click()
  
      // Confirm that the resulting card contains the search input
      cy.get('[data-cy="card"]').should('contain', 'Shaggy Mane')
    })
    
    it('Checks that the button filters work correctly', () => {
      // Click the search button
      cy.contains('Edible').click()
  
      // Confirm that the resulting card contains the search input
      cy.get('[data-cy="card"]').should('contain', 'Edible')
    })

    it('Checks the About button', () => {
      // Click the about button in the nav bar
      cy.contains('About').click()
  
     // Should be on a new URL which
      // includes '/commands/actions'
      cy.url().should('include', '/about')
    })
  })

  context('test on mobile', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/mushroom_db_app/')
      // run these tests as if in an iphone-6
      cy.viewport(375, 667)
    })

    it('Checks the About button', () => {
      // Click the about button in the footer bar
      cy.get('[data-cy="about"]').click()
      cy.url().should('include', '/about')
    })

    it('Opens and closes the Discover', () => {
      // Click the about button in the footer bar
      cy.get('[data-cy="discover"]').click()
      
      cy.contains('Ecology')

      cy.get('[data-cy="discover"]').click()

      cy.should('not.contain', 'Ecology')
    })
  })
})