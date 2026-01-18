
import { ShadowDomPage } from '../pages/ShadowDomPage'
import { NestedFramesPage } from '../pages/NestedFramesPage'

describe('Shadow DOM & Nested Frames Tests', () => {
  const shadowPage = new ShadowDomPage()
  const nestedPage = new NestedFramesPage()

  it('Should assert shadow DOM text', () => {
    shadowPage.visit()
    shadowPage.assertShadowText("Let's have some different text!")
  })

  it('Should assert MIDDLE text in nested frame', () => {
    nestedPage.visit()
    nestedPage.assertMiddleText('MIDDLE')
  })
})
