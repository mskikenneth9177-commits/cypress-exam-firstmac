// cypress/support/commands.ts

// -----------------------------
// Dynamic Controls Commands
// -----------------------------

import 'cypress-iframe'

Cypress.Commands.add('removeCheckbox', () => {
  cy.get('#checkbox').should('exist')
  cy.contains('button', 'Remove').click()

  // Retryable guards instead of cy.wait
  cy.get('#checkbox', { timeout: 10000 }).should('not.exist')
  cy.get('#message').should('contain.text', "It's gone!")
  cy.contains('button', 'Remove').should('not.exist')
  cy.contains('button', 'Add').should('be.visible')
})

Cypress.Commands.add('enableInput', (text: string) => {
  cy.contains('button', 'Enable').click()
  cy.get('input[type="text"]', { timeout: 10000 }).should('be.enabled').type(text)
  cy.get('input[type="text"]').should('have.value', text)
})

// -----------------------------
// Challenging DOM Helpers
// -----------------------------
Cypress.Commands.add('findRowByIuvaret', (value: string) => {
  return cy.contains('td', value).parent('tr') as Cypress.Chainable<JQuery<HTMLTableRowElement>>
})

Cypress.Commands.add('clickEditForRow', (value: string) => {
  cy.findRowByIuvaret(value).within(() => {
    cy.contains('a', 'edit').click()
  })
})

Cypress.Commands.add('getAnswerFromScript', (): Cypress.Chainable<string | null> => {
  return cy
    .get('#content > script')
    .invoke('text')
    .then((scriptText: string) =>
      Cypress.Promise.resolve(scriptText.match(/Answer:\s(\d+)/)?.[1] ?? null)
    )
})
