import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
  },
  mutations: {
    login(state) {
      console.log("hi");
      state.isAuthenticated = true;
    },
  },
  actions: {},
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
  },
});
