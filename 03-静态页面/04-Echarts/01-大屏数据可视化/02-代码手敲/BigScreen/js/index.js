/*
 * @Author: liming
 * @Date: 2021-09-12 07:01:22
 * @LastEditTime: 2021-12-05 16:39:02
 * @FilePath: \01-大屏数据可视化\02-代码手敲\BigScreen\js\index.js
 */

// 为了防止变量污染，减少命名冲突，我们可以使用立即执行函数，因为里面的变量都是局部变量
// 注意：多个立即执行函数中间必须有分号来结束

//柱状图模块一
(function () {
  //1.实例化对象
  let chartDom = document.querySelector('.bar .chart')
  let myChart = echarts.init(chartDom);
  // 2.指定配置项和数据
  let option = {
    color: ["#3398DB"],
    // 修改柱状图的颜色
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
      axisTick: {
        alignWithLabel: true
      },
      //修改刻度标签 相关样式
      axisLabel: {
        color: 'rgba(255,255,255,.6)',
        fontSize: '12',
        interval: 0,
        //该属性设置成0则表示强制显示所有标签，设置为1的话，隔一个标签显示一个标签，以此类推。
        // rotate: 45, //代表逆时针旋转45度
      },
      // x轴样式不显示
      axisLine: {
        // show: false
      }
    },
    yAxis: {
      type: 'value',
      //修改刻度标签 相关样式
      axisLabel: {
        color: 'rgba(255,255,255,.6)',
        fontSize: '12',
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
          width: 2
        }
      },
      //y轴分割线样式
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
        }
      }
    },
    series: [{
      name: '直接访问',
      type: 'bar',
      data: [200, 300, 300, 900, 1500, 1200, 600],
      // 这里的data实际是通过AJAX请求拿到的
      //修改柱子宽度
      barWidth: "35%",
      itemStyle: {
        //修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };

  //3.把配置项给实例对象
  myChart.setOption(option);

  //4.让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  })
})();

//柱状图模块二
(function () {
  // 声明颜色数组
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector('.bar2 .chart'));
  // 注意init这里不能用Jquery写法，要用原生来写
  // 2.指定配置和数据
  let option = {
    grid: {
      top: "10%",
      left: '22%',
      bottom: '10%',
      // containLabel: true
    },
    xAxis: {
      show: false
      // 不显示x轴的相关信息
    },
    yAxis: [
      // yAxis是支持数组的
      //y轴里面有2组对象，series里面也有2组对象
      {
        type: 'category',
        inverse: true,
        // 不写inverse就是默认的，写了就是反向的
        data: ['HTML5', 'CSS3', 'JavaScript', 'Vue', 'Node'],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        //不显示刻度
        axisTick: {
          show: false
        },
        //把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        show: true,
        data: [702, 350, 610, 793, 664],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        }
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        data: [70, 34, 60, 78, 69],
        // 给series  第一个对象里面的 添加 
        yAxisIndex: 0,
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          //此时的color可以修改柱子的颜色
          // color:"pink"
          color: function (params) {
            // params传进来的是柱子的对象，可以通过params.dataIndex来获取柱子的索引
            // console.log(params);
            return myColor[params.dataIndex]
          }
        },
        //显示柱子内的文字
        label: {
          show: true,
          // 图形内显示
          position: "inside",
          // 文字的显示格式,{c}会自动的解析为data里面的数据
          formatter: '{c}%'
        }
      },
      {
        name: '框',
        type: 'bar',
        barCategoryGap: 50,
        barWidth: 15,
        itemStyle: {
          color: 'none',
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        },
        data: [100, 100, 100, 100, 100],
        // 给series  第二个对象里面的 添加 
        yAxisIndex: 1,
      }
    ]
  };
  // 3.把把配置项给实例对象
  myChart.setOption(option);

  //4.让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  })
})();

// 立即执行函数后面千万不要少写分号！！！！！！！不然报错，害我找了半天！！！

// 折线图1模块制作
(function () {
  var yearData = [
    {
      year: "2020", // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: "2021", // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector('.line .chart'));
  // 注意init这里不能用Jquery写法，要用原生来写
  // 2.指定配置和数据
  let option = {
    // 通过color修改2条折线的颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    // 图例组件
    legend: {
      // data: ['新增粉丝', '新增游客'],
      //如果series对象有name值，则legend可以不用写data
      textStyle: {
        color: '#4c9bfd' // 图例文字颜色
      },
      right: '10%' // 距离右边10%，必须要加引号
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,// 显示边框
      borderColor: '#012f4a',// 边框颜色
      containLabel: true // 包含刻度文字在内
    },
    xAxis: {
      type: 'category',
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd' // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      boundaryGap: false  // 去除轴内间距
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false  // 去除刻度
      },
      axisLabel: {
        color: '#4c9bfd' // 文字颜色
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a' // 分割线颜色
        }
      }
    },
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        smooth: true,
        // 可以让曲线变平滑
        // data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        data: yearData[0].data[0],
      },
      {
        name: '新增游客',
        type: 'line',
        smooth: true,
        // data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
        data: yearData[0].data[1],
      },
    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  //4.让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  })

  //5.点击切换效果
  $('.line h2').on('click', 'a', function () {
    // alert('123')
    // console.log($(this).index());
    // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 需要重新渲染
    myChart.setOption(option);
  })
})();

// 折现图2模块制作
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector('.line2 .chart'));
  // 注意init这里不能用Jquery写法，要用原生来写
  // 2.指定配置和数据
  let option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: '播放量',
        type: 'line',
        smooth: true,
        // 单独修改当前线条的样式
        lineStyle: {
          color: '#0184d5 ',
          width: "2"
        },
        areaStyle: {
          // 渐变色，只需要复制即可
          // 现在最新版的好像这样设置渐变色不行了
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
      },
      {
        name: "转发量",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
      },
    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  //4.让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  })
})();

// 饼图模块1制作
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector('.pie .chart'));
  // 注意init这里不能用Jquery写法，要用原生来写
  // 2.指定配置和数据
  let option = {
    color: [
      "#065aab",
      "#066eab",
      "#0682ab",
      "#0696ab",
      "#06a0ab",
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{a}<br/>{b}:{c}({d}%)'
    },
    legend: {
      bottom: '0%',
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // legend 中的data  可省略——series里面有name即可
      // data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      },
    },
    series: [
      {
        name: "年龄分布",
        type: "pie",
        // 设置饼形图在容器中的位置
        center: ["50%", "50%"],
        //  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
        radius: ["40%", "60%"],
        center: ["50%", "45%"],
        // 不显示标签文字
        label: { show: false },
        // 不显示连接线
        labelLine: { show: false },
        data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
        ],
      }
    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  //4.让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  })
})();

// 饼图模块2制作
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector('.pie2 .chart'));
  // 注意init这里不能用Jquery写法，要用原生来写
  // 2.指定配置和数据
  let option = {
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    legend: {
      bottom: "0%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: '面积模式',
        type: 'pie',
        radius: ['10%', '70%'],
        // radius: [30, 110],
        center: ['50%', '50%'],
        roseType: "radius",
        // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
        label: {
          fontSize: 10
        },
        // 引导线调整
        labelLine: {
          // 连接扇形图线长
          length: 4,
          // 连接文字线长
          length2: 2
        },
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ]
      }
    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  //4.让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  })
})();

  // 模拟飞行路线模块地图模块
  (function () {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.map .chart'));
    // 2.指定配置和数据
    let option = {
      legend: {
        top: "90%",
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      // 注意颜色写的位置
      color: [
        "#006cff",
        "#60cda0",
        "#ed8884",
        "#ff9f7f",
        "#0096ff",
        "#9fe6b8",
        "#32c5e9",
        "#1d9dff"
      ],
      series: [
        {
          name: "点位统计",
          type: "pie",
          // 如果radius是百分比则必须加引号
          radius: ["10%", "70%"],
          center: ["50%", "42%"],
          roseType: "radius",
          data: [
            { value: 20, name: "云南" },
            { value: 26, name: "北京" },
            { value: 24, name: "山东" },
            { value: 25, name: "河北" },
            { value: 20, name: "江苏" },
            { value: 25, name: "浙江" },
            { value: 30, name: "深圳" },
            { value: 42, name: "广东" }
          ],
          // 修饰饼形图文字相关的样式 label对象
          label: {
            fontSize: 10
          },
          // 修饰引导线样式
          labelLine: {
            // 连接到图形的线长度
            length: 10,
            // 连接到文字的线长度
            length2: 10
          }
        }
      ]
    };
    // 3.把配置项给实例对象
    myChart.setOption(option);

    //4.让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
      myChart.resize();
    })
  })()
