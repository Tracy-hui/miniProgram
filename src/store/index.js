import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'
import * as types from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    selection: [],
    latest: [],
    newsDetails: {}
  },
  getters: {
    selection: state => state.selection,
    latest: state => state.latest,
    newsDetails: state => state.newsDetails
  },
  mutations: {
    [types.SAVE_SELECTION]: (state, data) => {
      state.selection = data
    },
    [types.SAVE_LATEST]: (state, data) => {
      state.latest = data
    },
    [types.SAVE_NEWS_DETAILS]: (state, data) => {
      state.newsDetails = data
    }
  },
  actions: {
    async getSelection ({commit}) {
      const {data} = await api.getSelection()
      commit(types.SAVE_SELECTION, data)
      return data
    },
    // 最新消息
    async getLatest ({commit}) {
      const data = await api.getLatest()
      commit(types.SAVE_LATEST, data)
      return data
    },
    // 新闻详情
    async getNewDetails ({commit}, id) {
      const data = await api.getNewDetails(id)
      commit(types.SAVE_NEWS_DETAILS, data)
      return data
    }
  }
})
export default store
