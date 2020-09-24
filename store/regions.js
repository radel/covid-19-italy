import { dailyResumeByRegion } from '../components/lib/resumes'

const regions = [
  { code: 1, name: 'Piemonte' },
  { code: 2, name: "Valle D'Aosta" },
  { code: 3, name: 'Lombardia' },
  { code: 4, name: '' },
  { code: 5, name: 'Veneto' },
  { code: 6, name: 'Friuli Venezia Giulia' },
  { code: 7, name: 'Liguria' },
  { code: 8, name: 'Emilia Romagna' },
  { code: 9, name: 'Toscana' },
  { code: 10, name: 'Umbria' },
  { code: 11, name: 'Marche' },
  { code: 12, name: 'Lazio' },
  { code: 13, name: 'Abruzzo' },
  { code: 14, name: 'Molise' },
  { code: 15, name: 'Campania' },
  { code: 16, name: 'Puglia' },
  { code: 17, name: 'Basilicata' },
  { code: 18, name: 'Calabria' },
  { code: 19, name: 'Sicilia' },
  { code: 20, name: 'Sardegna' },
  { code: 21, name: 'Bolzano' },
  { code: 22, name: 'Trento' }
]

export const state = () => ({
  regionsData: [],
  regions
})

export const getters = {
  regions: (state) => state.regions,
  regionsData: (state) => state.regionsData,
  resume: (state) =>
    state.regions.map((item) => {
      return dailyResumeByRegion(item.code, state.regionsData)
    }),
  data: (state) =>
    state.regions.map((item) => {
      return state.regionsData.filter(
        (region) => item.code === region.codice_regione
      )
    })
}

export const actions = {
  async getRegionsData({ commit, state }) {
    if (!state.regionsData.length) {
      const regionsData = await this.$axios
        .get(
          'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json'
        )
        .then((res) => res.data)

      commit('regionsData', regionsData)
    }
  }
}

export const mutations = {
  regionsData(state, value) {
    state.regionsData = value
  },
  italyData(state, value) {
    state.italyData = value
  }
}
