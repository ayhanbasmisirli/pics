import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Companies: []
  },
  mutations: {
    setCompany(state, payload) {
      state.Companies.push(payload);
    }
  },
  actions: {
    setCompany(state, payload) {
      state.commit("setCompany", payload);
    }
  },
  modules: {},
  getters: {
    getAllCompanies: state => state.Companies
  }
});
