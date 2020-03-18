import { mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default (Chart, builderOptions) => {
  return {
    mixins: [reactiveProp],
    extends: Chart,

    props: {
      chartData: {
        type: Object,
        required: true
      },
      stepSize: {
        type: Number,
        required: false
      },
      extraOptions: {
        type: Object,
        default: () => {
          return {}
        },
        required: false
      }
    },

    data() {
      return {
        options: {
          ...{
            legend: {
              labels: {
                fontColor: 'white'
              }
            },
            title: {
              fontColor: 'white'
            },
            responsive: true,
            tooltips: {
              mode: 'index',
              intersect: false
            },
            hover: {
              mode: 'nearest',
              intersect: true
            },
            scales: {
              yAxes: [
                {
                  id: 'left-y-axis',
                  type: 'linear',
                  position: 'left',
                  stacked: true,
                  ticks: {
                    beginAtZero: true, // hide square behind text
                    fontColor: 'rgba(255, 255, 255, 0.2)'
                  },
                  pointLabels: {
                    fontColor: 'rgba(255, 255, 255, 0.2)'
                  },
                  gridLines: {
                    color: 'rgba(255, 255, 255, 0.2)'
                  },
                  angleLines: {
                    color: 'rgba(255, 255, 255, 0.2)'
                  }
                }
              ],
              xAxes: [
                {
                  stacked: true,
                  ticks: {
                    beginAtZero: true, // hide square behind text
                    fontColor: 'white'
                  },
                  pointLabels: {
                    fontColor: 'white' // labels around the edge like 'Running'
                  },
                  gridLines: {
                    color: 'rgba(255, 255, 255, 0.2)'
                  },
                  angleLines: {
                    color: 'white' // lines radiating from the center
                  }
                }
              ]
            }
          },
          ...builderOptions,
          ...this.extraOptions
        }
      }
    },

    mounted() {
      this.renderChart(this.chartData, this.options)
    }
  }
}
