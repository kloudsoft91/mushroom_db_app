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
      // Get the search bar and type in an input
      cy.get('[data-cy="search-text"]').type('Shaggy Mane')
  
      // Click the search button
      cy.get('[data-cy="search-button"]').click()
  
      // Confirm that the resulting card contains the search input
      cy.get('[data-cy="card"]').should('contain', 'Shaggy Mane')

      // Click the Details button
      cy.get('[data-cy=card] a:contains("Details")').first().click();

      // Should be on a new URL which
      // includes '/commands/actions'
      cy.url().should('include', '/mushroom-detail')

      /** ADD THESE IN ONCE MUSHROOM-DETAIL MERGED TO MASTER
      cy.contains('White').click()

      cy.url().should('include', '/?label=cap_features.colour&item=White')

      cy.get('[data-cy="card"]').should('contain', 'Shaggy Mane')

      cy.get('[data-cy=card] a:contains("Details")').first().click();

      // Check if we are on the mushroom-details page
      cy.url().should('include', '/mushroom-detail');

      // Click on the "Stipe Color" link
      cy.get('nuxt-link:contains("Stipe Color")').click();

      // Check if the URL has the stipe_color filter
      cy.url().should('include', 'stipe_color=White');

      // Check if the mushroom cards on the homepage are filtered by stipe color
      cy.get('[data-cy=card]').each((card) => {
        cy.wrap(card)
          .find('.text-gray-500:contains("Stipe Color")')
          .next() // Get the stipe color value
          .should('contain', 'White');
      });
    });

      */ 


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
  
      // Should be on the About page now
      cy.url().should('include', '/about')
    })
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
      // Get the search bar and type in an input
      cy.get('[data-cy="search-text"]').type('Shaggy Mane')
  
      // Click the search button
      cy.get('[data-cy="search-button"]').click()
  
      // Confirm that the resulting card contains the search input
      cy.get('[data-cy="card"]').should('contain', 'Shaggy Mane')
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