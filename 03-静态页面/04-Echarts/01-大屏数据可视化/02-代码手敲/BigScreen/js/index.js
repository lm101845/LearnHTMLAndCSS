/*
 * @Author: liming
 * @Date: 2021-09-12 07:01:22
 * @LastEditTime: 2021-09-12 07:44:32
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
                    width:2 
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
            name:'直接访问',
            type: 'bar',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            // 这里的data实际是通过AJAX请求拿到的
            //修改柱子宽度
            barWidth: "35%",
            itemStyle: {
                //修改柱子圆角
                barBorderRadius:5
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

(function () {

})()