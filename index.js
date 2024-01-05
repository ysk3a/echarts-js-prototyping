// Import stylesheets
import './style.css';
import * as echarts from 'echarts';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

console.log('Hello!');
// based on prepared DOM, initialize echarts instance
var myChart = echarts.init(document.getElementById('main'));
// format with objects:
// var source = [
//    { datetime: '2019-08-28T07:01:00+02:00', value: 127.7 },
//    { datetime: '2019-08-28T07:02:00+02:00', value: 148.0 },
//    { datetime: '2019-08-28T07:03:00+02:00', value: 1180.4 },
//    { datetime: '2019-08-28T07:04:00+02:00', value: 117.9 }
// ];
// specify chart configuration item and data
var option = {
  //   dataset: {
  //     dimensions: ['datetime', 'value'],
  //     source: source
  // },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  xAxis: [
    {
      type: 'category',
      splitArea: {
        show: true,
      },
      data: ['Lachi', 'Oroklini', 'Livadia', 'Strovolos', 'Ledras', 'Oroklini', 'Livadia', 'Strovolos', 'Ledras'],
      axisTick: { show: false },
      axisTick: {
        show: false,
      },
      // axisPointer: {
      //   show: true
      // }
      // axisLabel: {
      //   // interval: 0,
      //   rotate: 30 //If the label names are too long you can manage this by rotating the label.
      // },
      // axisLabel: {
      //   width: 100, //fixed number of pixels
      //   overflow: 'truncate', // or 'break' to continue in a new line
      //   interval: 0,
      // },
      axisPointer: {
        show: true,
        type: 'shadow',
      },
    },
    {
      type: 'category',
      position: 'bottom',
      data: ['pafos', 'laranca', '', 'Nicosia', '', 'laranca', '', 'Nicosia', ''],
      axisLabel: {
        margin: 25,
      },
      axisLine: { show: false },
      axisTick: {
        length: 40,
        interval: function (index, value) {
          return value !== '';
        },
      },
    },
    {
      type: 'category',
      position: 'bottom',
      data: ['2018', '2019', '', '', '', '2020', '', '', ''],
      axisLabel: {
        margin: 25,
      },
      axisLine: { show: false },
      offset: 20,
      boundaryGap: true,
      axisTick: {
        length: 40,
        interval: function (index, value) {
          return value !== '';
        },
      },
    },
  ],
  yAxis: {
    type: 'value',
    splitLine: {
      show: false,
    },
  },
  // grid: { containLabel: true },
  grid: {
    // top: '12%',
    // left: '1%',
    // right: '10%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  series: [
    {
      type: 'bar',
      name: 'Revenue',
      data: [10, 20, 10, 20, 10, 20, 10, 20, 10],
    },
    {
      type: 'bar',
      name: 'Expenses',
      data: [10, 20, 10, 20, 10, 20, 10, 20, 30],
    },
  ],
  dataZoom: [
    {
      show: true,
      start: 60,
      end: 100,
    },
    {
      type: 'inside',
      start: 94,
      end: 100,
    },
    // {
    //   id: 'dataZoomX',
    //   type: 'slider',
    //   xAxisIndex: [0, 1, 2],
    //   filterMode: 'filter',
    // },
    // {
    //   id: 'dataZoomX2',
    //   start: 80,
    //   type: 'inside',
    //   xAxisIndex: [0, 1, 2],
    //   filterMode: 'filter',
    // },
  ],
  title: {
    text: 'awesome title',
  },
  tooltip: {
    trigger: 'axis',
  },
};

// use configuration item and data specified to show chart
myChart.setOption(option);
// const { startValue, endValue } =  echarts.getEchartsInstance().getOption().dataZoom[0]
myChart.on('datazoom', function (evt) {
  var axis = myChart.getModel().option.xAxis[0];
  var starttime = axis.data[axis.rangeStart];
  var endtime = axis.data[axis.rangeEnd];
  console.log(starttime, endtime);
  var option = myChart.getOption();
  console.log(option.dataZoom[0].startValue, option.dataZoom[0].endValue);
});
myChart.on('datazoom', (evt) => {
  const option = myChart.getOption();
  console.log('::datazoom2', option.xAxis[0].data[option.dataZoom[0].startValue], option.xAxis[0].data[option.dataZoom[0].endValue]);
});
// import * as echarts from 'echarts';

// var app: any = {};
// type EChartsOption = echarts.EChartsOption;

// var chartDom = document.getElementById('main')!;
// var myChart = echarts.init(chartDom);
// var option: EChartsOption;

// option = {
//   legend: {},
//   tooltip: {},
//   dataset: {
//     dimensions: ['product', '2015', '2016', '2017'],
//     source: [
//       { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
//       { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
//       { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
//       { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
//     ]
//   },
//   xAxis: { type: 'category' },
//   yAxis: {},
//   // Declare several bar series, each will be mapped
//   // to a column of dataset.source by default.
//   series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
// };

// option && myChart.setOption(option);

//https://echarts.apache.org/examples/en/editor.html?c=bar-drilldown

//https://github.com/apache/echarts/issues/4990

/*

another e.g

*/

var dom2 = document.getElementById('chart-container');
var myEChart = echarts.init(dom2, null, {
  renderer: 'canvas',
  useDirtyRect: false,
});
var app2 = {};

var option2 = {
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

if (option2 && typeof option2 === 'object') {
  myEChart.setOption(option2);
}

window.addEventListener('resize', myEChart.resize);
