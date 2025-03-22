import { api } from "@/services/api";
import { getPlatforma } from "@/utils/scripts";
import axios from "axios";
import { createStore } from "vuex";
interface Perfil {
  name: string;
  quantity: number;
  permissions: string[];
  id: number;
}

interface Users {
  id: number;
  name: string;
  email: string;
  perfil: string;
  status: boolean;
}

interface Feature {
  name: string;
  total_usage: number;
  id: number;
}

export default createStore({
  state: {
    downloads: { total: 0, android: 0, ios: 0 },
    evaluations: { average: 0, android: 0, ios: 0 },
    errors: { total: 0, android: 0, ios: 0 },
    features: [] as Feature[],
    users: [] as Users[],
    perfils: [] as Perfil[],
  },
  mutations: {
    SET_DOWNLOADS(state, data) {
      state.downloads.total = data.total;
      state.downloads.android = data.android;
      state.downloads.ios = data.ios;
    },
    SET_EVALUATIONS(state, data) {
      state.evaluations.average = data.average;
      state.evaluations.android = data.android;
      state.evaluations.ios = data.ios;
    },
    SET_ERRORS(state, data) {
      state.errors.total = data.total;
      state.errors.android = data.android;
      state.errors.ios = data.ios;
    },
    SET_FEATURES(state, data) {
      state.features = data;
    },
    SET_USERS(state, data) {
      state.users = data;
    },
    SET_PERFILS(state, data) {
      state.perfils = data;
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const resDownloads = await api.get("downloads");

        commit("SET_DOWNLOADS", {
          total: resDownloads.data.data.data.length,
          android: getPlatforma(resDownloads.data.data.data, "ANDROID"),
          ios: getPlatforma(resDownloads.data.data.data, "IOS"),
        });

        const resEvaluations = await api.get("evaluations");

        const avarageValues = resEvaluations.data.data.data.map(
          (item: any) => item.evaluation
        );

        const avarage =
          avarageValues.reduce(
            (accumulator: number, currentValue: number) =>
              accumulator + currentValue,
            0
          ) / resEvaluations.data.data.data.length;

        commit("SET_EVALUATIONS", {
          average: avarage,
          android: getPlatforma(resDownloads.data.data.data, "ANDROID"),
          ios: getPlatforma(resDownloads.data.data.data, "IOS"),
        });

        const resErrors = await api.get("errors");
        commit("SET_ERRORS", {
          total: resErrors.data.data.total,
          android: getPlatforma(resDownloads.data.data.data, "ANDROID"),
          ios: getPlatforma(resDownloads.data.data.data, "IOS"),
        });

        const resFeatures = await api.get("features?is_new=1");
        const newFeats = resFeatures.data.data.data.map((item: any) => ({
          name: item.name,
          total_usage: item.total_usage,
          id: item.id,
        }));

        commit("SET_FEATURES", newFeats);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    },
    async getFeatures({ commit }) {
      try {
        const resFeatures = await api.get("features?is_new=1");
        const newFeats = resFeatures.data.data.data.map((item: any) => ({
          name: item.name,
          total_usage: item.total_usage,
          id: item.id,
        }));

        commit("SET_FEATURES", newFeats);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    },
    async getUsers({ commit }) {
      try {
        const resUsers = await api.get("users");
        const newUsers = resUsers.data.data.map((item: any) => ({
          name: item.profile.name,
          email: item.email,
          perfil: item.profile.name,
          status: item.active,
          id: item.id,
        }));

        commit("SET_USERS", newUsers);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    },
    async getPerfils({ commit }) {
      try {
        const resPerfils = await api.get("profiles");
        const newPerfils = resPerfils.data.data.map((item: any) => ({
          name: item.name,
          quantity: item.total_users,
          permissions: item.permissions.map((el: any) => el.name),
          id: item.id,
        }));

        commit("SET_PERFILS", newPerfils);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    },
  },
  getters: {
    downloads: (state) => state.downloads,
    evaluations: (state) => state.evaluations,
    errors: (state) => state.errors,
    features: (state) => state.features,
    users: (state) => state.users,
    perfils: (state) => state.perfils,
  },
});
