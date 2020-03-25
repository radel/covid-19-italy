import { dailyResume, lastUpdate } from '../components/lib/resumes'

export const state = () => ({
  italyData: [],
  title: 'Italia'
})

export const getters = {
  data: (state) => state.italyData,
  title: (state) => state.title,
  resume: (state) => dailyResume(state.italyData),
  lastUpdate: (state) => lastUpdate(state.italyData)
}

export const actions = {
  setTitle({ commit }, value) {
    commit('title', value)
  },
  async getItalyData({ commit, state }) {
    if (!state.italyData.length) {
      const italyData = await this.$axios
        .get(
          'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json'
        )
        .then((res) => res.data)

      commit('italyData', italyData)
    }
  },
  setItalyData({ commit }, payload) {
    commit('italyData', payload)
  }
}

export const mutations = {
  title(state, value) {
    state.title = value
  },
  italyData(state, value) {
    state.italyData = value
  }
}
