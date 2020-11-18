import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    temp: "test",
  },
  mutations: {},
  actions: {},
  getters: {
    temp(state) {
      return state.user;
    },
  },
});
