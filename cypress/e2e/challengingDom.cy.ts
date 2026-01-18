describe('Dynamic Controls – Guard-Based Async Handling', () => {
  beforeEach(() => {
    cy.visit('/dynamic_controls')
  })

  it('Remove checkbox and wait for it to be gone', () => {
    // Click Remove
    cy.contains('button', 'Remove').click()

    // Loading indicator should appear
    cy.get('#loading').should('be.visible')

    // Checkbox is removed (Cypress retries automatically)
    cy.get('#checkbox').should('not.exist')

    // Confirmation message
    cy.contains("It's gone!").should('be.visible')

    // Button changes to Add
    cy.contains('button', 'Add').should('be.visible')
  })

  it('Enable input and type using a guard', () => {
    // Click Enable
    cy.contains('button', 'Enable').click()

    // Loading indicator should appear
    cy.get('#loading').should('be.visible')

    // Guard: wait until input is enabled
    cy.get('input[type="text"]')
      .should('be.visible')
      .and('be.enabled')
      .type('Cypress Challenge')

    // Verify value
    cy.get('input[type="text"]').should('have.value', 'Cypress Challenge')
  })
})
