export class ChallengingDomPage {
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

  clickButton(buttonClass: string) {
    return cy.get(buttonClass).click()
  }

  getAnswerFromScript() {
    return cy.get('#content > script').invoke('text').then((scriptText) => {
      const match = scriptText.match(/Answer:\s(\d+)/)
      return match ? match[1] : null
    })
  }
}
