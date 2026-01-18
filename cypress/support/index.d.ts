// cypress/support/index.d.ts
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    // Dynamic Controls
    removeCheckbox(): Chainable<void>
    enableInput(text: string): Chainable<void>

    // Challenging DOM
    findRowByIuvaret(value: string): Chainable<JQuery<HTMLTableRowElement>>
    clickEditForRow(value: string): Chainable<void>
    getAnswerFromScript(): Chainable<string | null>
  }
}
