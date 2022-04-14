import { createStore } from "vuex";
import attendee from "./modules/attendee";
import modal from "./modules/modal";

const store = createStore({
  modules: {
    attendee,
    modal,
  },
});

export default store;
