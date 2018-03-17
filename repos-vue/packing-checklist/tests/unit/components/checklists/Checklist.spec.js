import { shallow } from '@vue/test-utils'
import Checklist from '@/components/checklists/Checklist.vue'

describe('Checklist', () => {
  it('has the right DOM structure', () => {
    const wrapper = shallow(Checklist, {
      propsData: { title: 'a checklist', sublists: [] }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
