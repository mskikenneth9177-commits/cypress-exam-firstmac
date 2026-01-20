import { ChallengingDomPage, ColorButton } from '../pages/challengingDomPage'

describe('Challenging DOM', () => {
  const page = new ChallengingDomPage()

  // Button order as displayed in the UI
  const colors: ColorButton[] = ['Blue', 'Red', 'Green']

  beforeEach(() => {
    page.visit()
  })

  it('Requirement 1: Find row by Iuvaret column value', () => {
    page.findRowByIuvaret('Iuvaret0').should('exist')
  })

  it('Requirement 2: Click Edit link for a specific row', () => {
    page.clickEditForRow('Iuvaret0')
    cy.url().should('include', 'challenging_dom')
  })

  it('Requirement 3 (Senior): Color buttons update the Answer value', () => {
    colors.forEach((color) => {
      validateAnswerChange(color)
    })
  })

  function validateAnswerChange(color: ColorButton) {
    page.getAnswerFromScript().then((before) => {
      expect(before, `[${color}] initial answer`).to.not.equal('')

      cy.log(`[${color}] Answer before click: ${before}`)

      page.clickColorButton(color)

      page.getAnswerFromScript().then((after) => {
        cy.log(`[${color}] Answer after click: ${after}`)

        expect(after, `[${color}] Answer changed`).to.not.equal(before)
      })
    })
  }
})
