import 'cypress-iframe';

export class SeniorTwistPage {

  visitShadowDom() {
    cy.visit('/shadowdom')
  }

  visitNestedFrames() {
    cy.visit('/nested_frames')
  }

// Check for text in Shadow DOM or nested frames
// - expectedText: the text you want to find
// - options.shadow: true if it's in a shadow root
// - options.framePath: array of frame names for nested frames
// - options.selector: optional CSS selector to narrow down the search


  assertText(
    expectedText: string,
    options: { shadow?: boolean; framePath?: string[]; selector?: string }
  ) {
    const { shadow, framePath, selector } = options

    if (shadow) {
      if (!selector) throw new Error('Selector is required for Shadow DOM')
      cy.get(selector, { includeShadowDom: true, timeout: 10000 }).contains(expectedText)
      return
    }

    if (framePath && framePath.length) {
      this.assertTextInFrames(framePath, expectedText, selector)
      return
    }

    throw new Error('Either shadow=true or framePath must be provided')
  }

  //helper for nested frames using cypress-iframe 
  
  private assertTextInFrames(
    framePath: string[],
    expectedText: string,
    selector?: string
  ) {
    const currentFrame = framePath[0]

    cy.frameLoaded(`frame[name="${currentFrame}"]`)

    if (framePath.length === 1) {
      if (selector) {
        cy.iframe(`frame[name="${currentFrame}"]`).find(selector).contains(expectedText)
      } else {
        cy.iframe(`frame[name="${currentFrame}"]`).contains(expectedText)
      }
    } else {
      cy.iframe(`frame[name="${currentFrame}"]`).within(() => {
        this.assertTextInFrames(framePath.slice(1), expectedText, selector)
      })
    }
  }
}
