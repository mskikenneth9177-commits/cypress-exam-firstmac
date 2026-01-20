import { SeniorTwistPage } from '../pages/ShadowDOMMulti-FramePage'

describe('Senior Twist: Shadow DOM & Nested Frames', () => {
  const page = new SeniorTwistPage()

  it('Requirement 1 should find text inside Shadow DOM', () => {
    page.visitShadowDom()
    page.assertShadowText("Let's have some different text!")
  })

  it('Requiirement 2 should find text inside MIDDLE nested frame', () => {
    page.visitNestedFrames()
    page.assertMiddleText('MIDDLE')
  })
})
