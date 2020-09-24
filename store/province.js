import { dailyResumeByProvince } from '../components/lib/resumes'

export const state = () => ({
  provinceData: [],
  province: []
})

export const getters = {
  province: (state) => state.province,
  provinceData: (state) => state.provinceData,
  resume: (state) => (code) => {
    return dailyResumeByProvince(Number(code), state.provinceData)
  },
  data: (state) => (code) =>
    state.provinceData.filter((province) => {
      return Number(code) === province.codice_provincia
    }),
  name: (state) => (code) =>
    state.provinceData.filter((province) => {
      return Number(code) === province.codice_provincia
    })[0].denominazione_provincia
}

export const actions = {
  async getProvinceData({ commit, state }) {
    if (!state.provinceData.length) {
      const provinceData = await this.$axios
        .get(
          'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json'
        )
        .then((res) => res.data)

      commit('provinceData', provinceData)
      commit('province', provinceData)
    }
  }
}

export const mutations = {
  provinceData(state, value) {
    state.provinceData = value
  },
  province(state, value) {
    value.map(
      (item) =>
        (state.province[item.codice_provincia] = {
          code: item.codice_provincia,
          name: item ? item.denominazione_provincia : ''
        })
    )
  },
  italyData(state, value) {
    state.italyData = value
  }
}
