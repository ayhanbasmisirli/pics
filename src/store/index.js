import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Companies: [
      {
        name: "ABC Software",
        cspend: "10000",
        cspendmin: "10000",
        cspendmax: "50000",
        addNote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut "
      },
      {
        name: "BCD Software",
        cspend: "10000",
        cspendmin: "10000",
        cspendmax: "50000",
        addNote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut "
      },
      {
        name: "ABC Software",
        cspend: "10000",
        cspendmin: "10000",
        cspendmax: "50000",
        addNote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut "
      }
    ]
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
