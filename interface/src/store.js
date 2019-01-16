import Vue from "vue";
import Vuex from "vuex";
import mutations from './mutations.js';
import * as actions from './actions.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {order:[], details:{}, user:{}},
  mutations ,
  actions
});
