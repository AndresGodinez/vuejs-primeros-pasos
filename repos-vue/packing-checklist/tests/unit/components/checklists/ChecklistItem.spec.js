import { shallow } from '@vue/test-utils'
import ChecklistItem from '@/components/checklists/ChecklistItem.vue'

describe('ChecklistItem', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(ChecklistItem, {
      propsData: {id: 0, title: 'waka', done: false}
    })

    expect(wrapper.element).toMatchSnapshot()
  })
})
