import { shallow } from '@vue/test-utils'
import SubChecklist from '@/components/checklists/SubChecklist.vue'

describe('SubChecklist', () => {
  it('has the right DOM structure', () => {
    const wrapper = shallow(SubChecklist, {
      propsData: { id: 0, title: 'waka', items: [] }
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
