import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pictures: [],
    appLoader: false,
  },
  getters: {
    getPictures: (state) => state.pictures,
    getAppLoader: (state) => state.appLoader,
  },
  mutations: {
    setPictures(state, data) {
      state.pictures = data;
    },
    setAppLoader(state, value) {
      state.appLoader = value; 
    }
  },
  actions: {},
  modules: {},
});
