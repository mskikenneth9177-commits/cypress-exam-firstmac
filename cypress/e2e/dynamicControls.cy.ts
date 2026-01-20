import { DynamicControlsPage } from '../pages/dynamicControlPage'

describe('Dynamic Controls', () => {
  const page = new DynamicControlsPage()

  beforeEach(() => {
    page.visit()
  })

  it('Requirement 1 and 2 removes checkbox dynamically and assesrt its gone', () => {
    page.removeCheckbox()
  })

  it('Requirement 3 enables input dynamically', () => {
    page.enableInput('Cypress Challenge')
  })
})
