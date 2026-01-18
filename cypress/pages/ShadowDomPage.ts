export class ShadowDomPage {
  visit() {
    cy.visit('/shadowdom')
  }

  getShadowText() {
    // Search all shadow roots recursively
    return cy.get('span[slot="my-text"]', { includeShadowDom: true, timeout: 10000 })
  }

  assertShadowText(expectedText: string) {
    this.getShadowText().should('have.text', expectedText)
  }
}

