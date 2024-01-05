import * as echarts from 'echarts';

var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false,
});
var app = {};

var option;

option = {
  title: {
    text: 'ECharts axis grouping',
  },
  tooltip: {},
  legend: {
    data: ['Sales'],
  },
  xAxis: [
    {
      position: 'bottom',
      data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks'],
    },
    {
      position: 'bottom',
      data: [' ', 'group1', '', ' ', 'group2', ''],
      axisLine: {
        show: false,
      },
      axisTick: {
        alignWithLabel: false,
        length: 40,
        align: 'left',
        interval: function (index, value) {
          return value == ' ' ? true : false;
        },
      },
      axisLabel: {
        margin: 30,
        fontWeight: 'bold',
        interval: function (index, value) {
          return value.length > 1 ? true : false;
        },
      },
    },
  ],
  yAxis: {},
  series: [
    {
      name: 'Sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
