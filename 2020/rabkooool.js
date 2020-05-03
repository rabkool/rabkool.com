// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main2'));

var colors = ['#5793f3', '#d14a61', '#675bba'];

option = {
    color: colors,
    title: {
        top: 0,
        left: 'center',
        text: '2019年と2020年チェキ数比較'
    },
    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        top: 25,
        data:['2019 チェキ数', '2020 チェキ数']
    },
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return 'チェキ数  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ['2020-1', '2020-2', '2020-3', '2020-4', '2020-5', '2020-6', '2020-7', '2020-8', '2020-9', '2020-10', '2020-11', '2020-12']
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return 'チェキ数  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ['2019-1', '2019-2', '2019-3', '2019-4', '2019-5', '2019-6', '2019-7', '2019-8', '2019-9', '2019-10', '2019-11', '2019-12']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '2019 チェキ数',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: [16, 22, 19, 2, 10, 28, 85, 59, 31, 19, 11, 27]
        },
        {
            name: '2020 チェキ数',
            type: 'line',
            smooth: true,
            data: [32, 26, 0, 3, 0]
        }
    ]
};
  // 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);