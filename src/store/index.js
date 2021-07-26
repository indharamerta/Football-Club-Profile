import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";

Vue.use(Vuex);

const baseUrl = "http://api.football-data.org/v2";

export default new Vuex.Store({
  state: {
    areas: [],
    clubs: [],
    players: [],
    detail: [],
  },
  mutations: {
    SET_Areas(state, payload) {
      state.areas = payload;
    },
    SET_Clubs(state, payload) {
      state.clubs = payload;
    },
    SET_Players(state, payload) {
      state.players = payload;
    },
    SET_Detail(state, payload) {
      state.detail = payload;
    },
  },
  actions: {
    fetchArea(context) {
      axios({
        method: "GET",
        url: baseUrl + "/competitions",
        headers: { "X-Auth-Token": "4185cd826317448f813db4ad4d08f0d0" },
      })
        .then(({ data }) => {
          context.commit("SET_Areas", data.competitions);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchClubs(context, id) {
      axios({
        method: "GET",
        url: baseUrl + "/competitions/" + id + "/teams",
        headers: { "X-Auth-Token": "4185cd826317448f813db4ad4d08f0d0" },
      })
        .then(({ data }) => {
          console.log(data.teams);
          router.push("/club");
          context.commit("SET_Clubs", data.teams);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchPlayers(context, id) {
      axios({
        method: "GET",
        url: baseUrl + "/teams/" + id,
        headers: { "X-Auth-Token": "4185cd826317448f813db4ad4d08f0d0" },
      })
        .then(({ data }) => {
          router.push("/player");
          context.commit("SET_Players", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showDetail(context, id) {
      axios({
        method: "GET",
        url: baseUrl + "/players/" + id,
        headers: { "X-Auth-Token": "4185cd826317448f813db4ad4d08f0d0" },
      })
        .then(({ data }) => {
          router.push("/player-detail");
          context.commit("SET_Detail", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
