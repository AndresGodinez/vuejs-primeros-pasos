import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const UPDATE_ITEM = 'update-item'

export const getters = {
  packList: state => state.lists[0],
  todoList: state => state.lists[1],
  getItemById: (state) => (id) => {
    for (let i = 0; i < state.lists.length; i++) {
      let list = state.lists[i]
      for (let j = 0; j < list.sublists.length; j++) {
        let item = list.sublists[j].items.find(x => x.id === id)
        if (item) { return item }
      }
    }
    return null
  }
}

export const mutations = {
  [UPDATE_ITEM] (state, payload) {
    let item = this.getters.getItemById(payload.id)
    if (item) {
      for (const [key, value] of Object.entries(payload)) {
        if (key === 'id') { continue }
        Vue.set(item, key, value)
      }
    } else {
      throw new Error('Item not found', payload)
    }
  }
}

export default new Vuex.Store({
  state: {
    lists: [
      {
        title: 'To pack',
        sublists: [
          {
            title: 'Don\'t forget this FFS!',
            id: 0,
            items: [
              {title: 'Medication', id: 0},
              {title: 'Wallet', id: 1}
            ]
          },
          {
            title: 'Clothing',
            id: 1,
            items: [
              {title: 'Underwear', id: 2},
              {title: 'Tops', id: 3},
              {title: 'Bottoms', id: 4}
            ]
          }
        ]
      },
      {
        title: 'To do',
        sublists: [
          {
            title: 'The day before',
            id: 2,
            items: [
              { title: 'Charge electronics', id: 5 },
              { title: 'Take out the trash', id: 6 },
              { title: 'Separate clothing to wear', id: 7 }
            ]
          }
        ]
      }
    ]
  },
  getters,
  mutations,
  actions: {

  }
})
