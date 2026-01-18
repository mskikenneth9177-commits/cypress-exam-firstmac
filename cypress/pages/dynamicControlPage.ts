export class DynamicControlsPage {
  visit() {
    cy.visit('/dynamic_controls')
  }

  removeCheckbox() {
    cy.get('#checkbox').should('exist')
    cy.contains('button', 'Remove').click()
    cy.get('#checkbox', { timeout: 10000 }).should('not.exist')
    cy.get('#message').should('contain.text', "It's gone!")
    cy.contains('button', 'Remove').should('not.exist')
    cy.contains('button', 'Add').should('be.visible')
  }

  enableInput(text: string) {
    cy.contains('button', 'Enable').click()
    cy.get('input[type="text"]', { timeout: 10000 }).should('be.enabled').type(text)
    cy.get('input[type="text"]').should('have.value', text)
  }
}
