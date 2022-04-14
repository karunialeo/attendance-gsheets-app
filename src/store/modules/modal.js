export default {
  state: () => ({
    open: false,
  }),
  getters: {},
  mutations: {
    SET_OPEN(state, payload) {
      state.open = payload;
    },
  },
  actions: {
    setOpen({ commit }, data) {
      commit("SET_OPEN", data);
    },
  },
};
