import { DynamicControlsPage } from '../pages/dynamicControlPage'

describe('Dynamic Controls', () => {
  const page = new DynamicControlsPage()

  beforeEach(() => {
    page.visit()
  })

  it('removes checkbox dynamically', () => {
    page.removeCheckbox()
  })

  it('enables input dynamically', () => {
    page.enableInput('Cypress Challenge')
  })
})
