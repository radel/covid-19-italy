<template>
  <div class="flex flex-wrap flex-start">
    <div
      class="w-full grid lg:grid-cols-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8"
    >
      <data-panel
        v-for="(item, index) in resume"
        :key="index"
        :title="item.label"
        :number="item.today"
        :variation="item.variation"
      />
    </div>
    <div class="w-full grid lg:grid-cols-2 grid-cols-1 gap-4 my-8">
      <div class="p-8 bg-gray-800 rounded shadow-lg col-span-2">
        <report-chart
          class="w-full"
          :height="170"
          :chart-data="dataCollection"
          :extra-options="{}"
        >
        </report-chart>
      </div>
      <div class="p-8 bg-gray-800 rounded shadow-lg col-span-2">
        <report-chart
          class="w-full"
          :height="170"
          :chart-data="incremento"
          :extra-options="{}"
        >
        </report-chart>
      </div>
      <div class="p-8 bg-gray-800 rounded shadow-lg">
        <report-chart
          class=""
          :height="200"
          :chart-data="tamponi"
          :extra-options="notStackedOptions"
        >
        </report-chart>
      </div>
      <div class="p-8 bg-gray-800 rounded shadow-lg">
        <report-chart
          class=""
          :height="200"
          :chart-data="casiTotali"
          :extra-options="notStackedOptions"
        >
        </report-chart>
      </div>
      <div class="p-8 bg-gray-800 rounded shadow-lg">
        <report-chart
          class=""
          :height="200"
          :chart-data="variazione"
          :extra-options="notStackedOptions"
        >
        </report-chart>
      </div>
    </div>
  </div>
</template>

<script>
import ReportChart from '@/components/charts/mixed.js'
import DataPanel from '@/components/DataPanel'
import notStacked from '@/components/charts/not-stacked'
export default {
  components: {
    ReportChart,
    DataPanel
  },
  async asyncData({ store, params, payload }) {
    if (payload) {
      await store.dispatch('setItalyData', payload)
    } else {
      await store.dispatch('getItalyData')
    }
    return {
      italyData: store.getters.data,
      notStackedOptions: notStacked
    }
  },

  computed: {
    resume() {
      return this.$store.getters.resume
    },
    dataCollection() {
      return {
        labels: this.italyData.map((x) => {
          const newDate = new Date(x.data)
          return newDate.toLocaleDateString()
        }),
        datasets: [
          {
            label: 'Decessi',
            data: this.italyData.map((x) => x.deceduti),
            backgroundColor: '#44337a',
            type: 'bar'
          },
          {
            label: 'terapia intensiva',
            data: this.italyData.map((x) => x.terapia_intensiva),
            type: 'bar',
            backgroundColor: '#e53e3e'
          },
          {
            label: 'Ricoverati con sintomi',
            data: this.italyData.map((x) => x.ricoverati_con_sintomi),
            type: 'bar',
            backgroundColor: '#ed8936'
          },
          {
            label: 'isolamento domiciliare',
            data: this.italyData.map((x) => x.isolamento_domiciliare),
            type: 'bar',
            backgroundColor: '#bee3f8'
          },
          {
            label: 'Dimessi',
            data: this.italyData.map((x) => x.dimessi_guariti),
            type: 'bar',
            backgroundColor: '#38a169'
          },
          {
            label: 'Totale',
            data: this.italyData.map((x) => x.totale_casi),
            type: 'line',
            color: '#e6fffa'
          }
        ]
      }
    },
    tamponi() {
      return {
        labels: this.italyData.map((x) => {
          const newDate = new Date(x.data)
          return newDate.toLocaleDateString()
        }),
        datasets: [
          {
            label: 'Tamponi',
            data: this.italyData.map((x) => x.tamponi),
            type: 'line',
            borderColor: 'teal',
            backgroundColor: 'transparent'
          }
        ]
      }
    },
    incremento() {
      return {
        labels: this.italyData.map((x) => {
          const newDate = new Date(x.data)
          return newDate.toLocaleDateString()
        }),
        datasets: [
          {
            label: 'Incremento positivi',
            data: this.italyData.map((x) => x.nuovi_positivi),
            type: 'line',
            borderColor: '#ed8936',
            backgroundColor: 'transparent'
          }
        ]
      }
    },
    variazione() {
      return {
        labels: this.italyData.map((x) => {
          const newDate = new Date(x.data)
          return newDate.toLocaleDateString()
        }),
        datasets: [
          {
            label: 'Variazione Totali Positivi',
            data: this.italyData.map((x) => x.variazione_totale_positivi),
            type: 'line',
            borderColor: '#bee3f8',
            backgroundColor: 'transparent'
          }
        ]
      }
    },
    casiTotali() {
      return {
        labels: this.italyData.map((x) => {
          const newDate = new Date(x.data)
          return newDate.toLocaleDateString()
        }),
        datasets: [
          {
            label: 'Casi Totali',
            data: this.italyData.map((x) => x.totale_casi),
            type: 'line',
            borderColor: 'rgba(0,0,0,0.6)',
            backgroundColor: 'transparent'
          }
        ]
      }
    }
  },

  created() {
    this.$store.dispatch('setTitle', 'Italy')
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
