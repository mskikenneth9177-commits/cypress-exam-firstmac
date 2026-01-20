import { SeniorTwistPage } from '../pages/ShadowDOMMulti-FramePage'

describe('Senior Twist: Shadow DOM & Nested Frames', () => {
  const page = new SeniorTwistPage()

  it('Assert text in Shadow DOM', () => {
    page.visitShadowDom()
    page.assertText("Let's have some different text!", {
      shadow: true,
      selector: 'span[slot="my-text"]'
    })
  })

  it('Assert text in MIDDLE nested frame', () => {
    page.visitNestedFrames()
    page.assertText('MIDDLE', {
      framePath: ['frame-top', 'frame-middle'],
      selector: '#content' 
    })
  })
})
