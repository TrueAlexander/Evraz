
import ApexCharts from 'apexcharts';


///
const options = {
  series: [{
    name: 'Агломерат ЗСМК крупный',
    data: [23.9, 26.2, 27.2, 27.3, 27.4, 26.9]
  }, {
    name: 'Агломерат ЗСМК мелкий',
    data: [43.2, 42.8, 43.8, 43.9, 44.3, 43.3]
  }, {
    name: 'Агломерат складской',
    data: [8.8, 16.9, 16.6, 16.4, 16.8, 30.9]
  }, {
    name: 'Окатыши карельские НО',
    data: [17.7, 16.3, 13.8, 13.6, 13.5, 14.4]
  }],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10
    },
  },
  xaxis: {
    type: 'text',
    categories: ['09:50:20', '10:30:40', '11:05:52', '11:44:28',
      '12:26:10', '13:01:01'
    ],
  },
  legend: {
    position: 'bottom',
    offsetY: 0
  },
  fill: {
    opacity: 1
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

