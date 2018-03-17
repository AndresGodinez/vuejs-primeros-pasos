import {getters, mutations, UPDATE_ITEM} from '@/store'

describe('store getters', () => {
  // fixture
  const state = {
    lists: [{
      title: 'a list',
      sublists: []
    }, {
      title: 'another list',
      sublists: [
        {title: 'A', items: []},
        {
          title: 'B',
          items: [
            {id: 0, title: 'an item'},
            {id: 1, title: 'target'},
            {id: 2, title: 'another item'}
          ]
        }
      ]
    }]
  }

  describe('getItemById', () => {
    it('returns an item in a checklist given its id', () => {
      expect(getters.getItemById(state)(1))
        .toEqual({id: 1, title: 'target'})
    })

    it('returns null when the id is not found', () => {
      expect(getters.getItemById(state)(123)).toBe(null)
    })
  })
})

describe('store mutations', () => {
  let state = {}

  beforeEach(() => {
    state = {
      lists: [{
        title: 'A list',
        sublists: [{
          title: 'A sublist',
          items: [
            {id: 0, title: 'item 0', other: 'misc'},
            {id: 1, title: 'item 1'}
          ]
        }]
      }]
    }

    mutations.getters = {
      getItemById: jest.fn()
        .mockReturnValue(state.lists[0].sublists[0].items[0])
    }
  })

  describe(UPDATE_ITEM, () => {
    it('updates an item with new data', () => {
      mutations[UPDATE_ITEM](state, {id: 0, title: 'waka', done: true})

      expect(mutations.getters.getItemById).toBeCalledWith(0)
      expect(state.lists[0].sublists[0].items[0])
        .toEqual({id: 0, title: 'waka', done: true, other: 'misc'})
    })
  })
})
