import actions from './action';

const state = {
  activeMenuIndexs: [],
  activeMenuNames: [],
};
const getters = {};
const mutations = {
  UPDATE_ACTIVE_MENU_INDEX(state, indexs) {
    state.activeMenuIndexs = indexs;
  },

  UPDATE_ACTIVE_MENU_NAME(state, names) {
    state.activeMenuNames = names;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
