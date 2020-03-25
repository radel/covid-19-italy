export default {
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
        stacked: false,
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
        stacked: false,
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
}
