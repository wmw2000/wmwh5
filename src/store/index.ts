import { createStore } from 'vuex'

export default createStore({
  state: {
    todos:[]as string[],
    dones:[]as string[],
    deteles:[]as string[],
  },
  mutations: {
    add(state,value){
      state.todos.push(...value)
    }
  },
  actions:{

  },
  modules:{}
})