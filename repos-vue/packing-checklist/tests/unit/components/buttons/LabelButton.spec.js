import { shallow } from '@vue/test-utils'
import LabelButton from '@/components/buttons/LabelButton.vue'

describe('LabelButton', () => {
  it('has the right DOM structure', () => {
    const wrapper = shallow(LabelButton, {
      propsData: { image: 'algo.svg', onClick: function () {} }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
