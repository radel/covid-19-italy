<template>
  <div class="flex flex-wrap flex-start">
    <div class="w-full grid grid-cols-1 lg:grid-cols-6 gap-4 my-8">
      <data-panel
        v-for="(item, index) in resume"
        :key="index"
        :title="item.label"
        :number="item.today"
        :variation="item.variation"
      />
    </div>
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 my-8">
      <div class="p-8 bg-gray-800 rounded shadow-lg">
        <report-chart
          class=""
          :height="200"
          :chart-data="dataCollection"
          :extra-options="{}"
        >
        </report-chart>
      </div>
      <div class="p-8 bg-gray-800 rounded shadow-lg">
        <report-chart
          class=""
          :height="200"
          :chart-data="tamponiInfetti"
          :extra-options="{}"
        >
        </report-chart>
      </div>
    </div>
  </div>
</template>

<script>
import ReportChart from '@/components/charts/mixed.js'
import DataPanel from '@/components/DataPanel'
export default {
  components: {
    ReportChart,
    DataPanel
  },
  asyncData({ store, params, payload }) {
    return {
      slug: params.slug
    }
  },

  computed: {
    regionData() {
      return this.$store.getters['province/data'](this.slug)
    },
    resume() {
      return this.$store.getters['province/resume'](this.slug)
    },
    title() {
      return this.$store.getters['province/name'](this.slug)
    },
    dataCollection() {
      return {
        labels: this.regionData.map((x) => {
          const newDate = new Date(x.data)
          return newDate.toLocaleDateString()
        }),
        datasets: [
          {
            label: 'Decessi',
            data: this.regionData.map((x) => x.deceduti),
            backgroundColor: 'black',
            type: 'bar'
          },
          {
            label: 'terapia intensiva',
            data: this.regionData.map((x) => x.terapia_intensiva),
            type: 'bar',
            backgroundColor: 'red'
          },
          {
            label: 'Ricoverati con sintomi',
            data: this.regionData.map((x) => x.ricoverati_con_sintomi),
            type: 'bar',
            backgroundColor: 'orange'
          },
          {
            label: 'Dimessi',
            data: this.regionData.map((x) => x.dimessi_guariti),
            type: 'bar',
            backgroundColor: 'green'
          },
          {
            label: 'isolamento domiciliare',
            data: this.regionData.map((x) => x.isolamento_domiciliare),
            type: 'bar',
            backgroundColor: 'gray'
          },
          {
            label: 'Totale',
            data: this.regionData.map((x) => x.totale_casi),
            type: 'line',
            color: 'gray'
          }
        ]
      }
    },
    tamponiInfetti() {
      return {
        labels: this.regionData.map((x) => {
          const newDate = new Date(x.data)
          return newDate.toLocaleDateString()
        }),
        datasets: [
          {
            label: 'Casi Totali',
            data: this.regionData.map((x) => x.totale_casi),
            type: 'line',
            borderColor: 'rgba(0,0,0,0.6)',
            backgroundColor: 'transparent'
          },
          {
            label: 'Tamponi',
            data: this.regionData.map((x) => x.tamponi),
            type: 'line',
            borderColor: 'teal',
            backgroundColor: 'transparent'
          }
        ]
      }
    }
  },
  async mounted() {
    await this.$store.dispatch('province/getProvinceData')
  },

  created() {
    this.$store.dispatch('setTitle', this.title)
  }
}
</script>
