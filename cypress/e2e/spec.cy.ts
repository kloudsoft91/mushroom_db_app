describe('Homepage testing', () => {
  context('test on desktop', () => {
    beforeEach(() => {
      /**
       * UPDATE
       * this should be cy.visit('https://kloudsoft91.github.io/mushroom_db_app/') when everything is merged
       *  
       * */ 
      cy.visit('http://localhost:3000/mushroom_db_app/')
      // run these tests as if in a desktop browser
      cy.viewport(1025, 768)
    })

    it('Checks search function and detail page', () => {
      cy.get('[data-cy="search-text"]').type('Shaggy Mane')
  
      cy.get('[data-cy="search-button"]').click()
  
      cy.get('[data-cy="card"]').should('contain', 'Shaggy Mane')

      cy.get('[data-cy=card] a:contains("Details")').click()

      cy.url().should('include', '/mushroom-detail')

      cy.get('[data-cy="attribute-link"]').contains('white').click()

      cy.url().should('include', '/?label=stipe_features.colour&item=white')

      cy.get('[data-cy="card"]').should('contain', 'Shaggy Mane')
    });

    it('Checks size filter', () => {
      cy.get('[data-cy="stipe-text"]').type('5')

      cy.get('[data-cy="card"]').should('contain', 'Laughing')
    });

    it('Checks that the Quick filters work correctly', () => {
      cy.contains('Edible').click()
  
      cy.get('[data-cy="card"]').should('contain', 'Edible')
    })

    it('Checks the About button', () => {
      cy.contains('About').click()
  
      cy.url().should('include', '/about')
    })

    it('Checks filters accordion', () => {
      cy.get('[data-cy="filters-button"]').click();

      cy.get('[data-cy="filter-cap-colour"]').first().click()

      cy.get('[data-cy=card]').first().should('contain', 'Fly Agaric')
    });
  })

  context('test on mobile', () => {
    beforeEach(() => {
      /**
       * UPDATE
       * this should be cy.visit('https://kloudsoft91.github.io/mushroom_db_app/') when everything is merged
       *  
       * */ 
      cy.visit('http://localhost:3000/mushroom_db_app/')
      // run these tests as if in an iphone-6
      cy.viewport(375, 667)
    })

    it('Checks that the search bar is filtering correctly', () => {
      cy.get('[data-cy="search-text"]').type('Shaggy Mane')

      cy.get('[data-cy="search-button"]').click()
  
      cy.get('[data-cy="card"]').should('contain', 'Shaggy Mane')
    })

    it('Checks the About button', () => {
      cy.get('[data-cy="about"]').click()
      cy.url().should('include', '/about')
    })

    it('Opens and closes the Discover', () => {
      cy.get('[data-cy="discover"]').click()
      
      cy.contains('Ecology')

      cy.get('[data-cy="discover"]').click()

      cy.should('not.contain', 'Ecology')
    })
  })
})
