export type ColorButton = 'Red' | 'Blue' | 'Green'

export class ChallengingDomPage {
  private readonly colorButtons = {
    Red: '.button.alert',
    Blue: '.button:not(.alert):not(.success)',
    Green: '.button.success',
  }

  visit() {
    cy.visit('/challenging_dom')
  }

  findRowByIuvaret(value: string) {
    return cy.contains('td', value).parent('tr')
  }

  clickEditForRow(value: string) {
    this.findRowByIuvaret(value).within(() => {
      cy.contains('a', 'edit').click()
    })
  }

  clickColorButton(color: ColorButton) {
    cy.get(this.colorButtons[color])
      .first()
      .click()
  }

  getAnswerFromScript(): Cypress.Chainable<string> {
  return cy
    .get('#content > script')
    .invoke('text')
    .then((scriptText: string) => {
      const match = scriptText.match(/Answer:\s(\d+)/)
      return match ? match[1] : ''
    })
}
}
