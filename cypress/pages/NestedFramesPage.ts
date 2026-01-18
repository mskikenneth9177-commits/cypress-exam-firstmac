// cypress/pages/NestedFramesPage.ts

export class NestedFramesPage {
  url = 'https://the-internet.herokuapp.com/nested_frames'

  visit() {
    cy.visit(this.url)
  }

  /**
   * Safely get the MIDDLE frame body with retryable Cypress commands
   */
  getMiddleFrameBody(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('frame[name="frame-top"]').then(($top) => {
      const topFrame = $top[0] as unknown as HTMLIFrameElement

      // Retry until top frame body exists
      return cy.wrap(null, { timeout: 10000 }).should(() => {
        if (!topFrame.contentDocument || !topFrame.contentDocument.body) {
          throw new Error('Waiting for top frame body')
        }
      }).then(() => {
        const middleFrame = topFrame.contentDocument!.querySelector(
          'frame[name="frame-middle"]'
        ) as HTMLIFrameElement

        // Retry until middle frame body exists
        return cy.wrap(null, { timeout: 10000 }).should(() => {
          if (!middleFrame.contentDocument || !middleFrame.contentDocument.body) {
            throw new Error('Waiting for middle frame body')
          }
        }).then(() => cy.wrap(Cypress.$(middleFrame.contentDocument!.body)))
      })
    })
  }

  /**
   * Assert that MIDDLE frame contains expected text
   */
  assertMiddleText(expectedText: string) {
    this.getMiddleFrameBody().should('contain.text', expectedText)
  }
}
