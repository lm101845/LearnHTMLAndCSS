---
title: CSS布局入门
date: 2021-02-26 17:18:41
tags: CSS布局
categories: CSS
---

(注1：现在是2021年2月26日，CSS布局目前我也只学了Flex布局，其他的，比如流式布局、rem布局、响应式等都还没看。现在就抓紧时间赶快进行一下查漏补缺吧。)

(注2：这个视频是黑马程序员刘晓强的课程，[视频链接](https://www.bilibili.com/video/BV1jJ41177aa?p=1))

(注3：具体实战项目代码我都放到我的GitHub仓库里了，就当成我的简历作品了。[项目仓库：staticpage](https://github.com/lm101845/staticpage))

(注4：因为Flex是之前就学过的，所以当初单独写了一篇博文，这篇博文里面是不包括Flex布局的。 )

# 流式布局

[布局的几种方式（静态布局、自适应布局、流式布局、响应式布局、弹性布局）](https://www.cnblogs.com/zhuzhenwei918/p/7147303.html)

## 目标

![](CSS布局入门/01.png)

## 目录

![](CSS布局入门/02.png)

## 移动端基础

### 浏览器现状

![](CSS布局入门/03.png)

### 手机屏幕现状

![](CSS布局入门/04.png)

### 常见移动端屏幕尺寸

![](CSS布局入门/05.png)

### 移动端调试方法

![](CSS布局入门/06.png)

### 总结

![](CSS布局入门/07.png)

## 视口

> 我们主要关注的是理想视口。

### 布局视口

![](CSS布局入门/08.png)

### 视觉视口

![](CSS布局入门/09.png)

### 理想视口

> 不需要用手捏着去看，也不需要左右滑动。以后移动端布局我们都是按照理想视口来设定的。理想视口是乔布斯发明的。

![](CSS布局入门/10.png)

### 总结

![](CSS布局入门/11.png)

### meta视口标签

> 如果不加`meta`视口标签，当你把网页放到移动端显示时，默认宽度是980px，那么字就会显得非常小。

![](CSS布局入门/12.png)

### 标准的viewport设置

![](CSS布局入门/13.png)

## 二倍图

### 物理像素&物理像素比

> 电脑端，1px就等于1物理像素，而手机端则不一定。比如iphone6,7,8中，1px = 2物理像素。(它们的屏幕宽为750物理像素，是375px。)

![](CSS布局入门/14.png)

![](CSS布局入门/15.png)

### 多倍图

![](CSS布局入门/16.png)

### 背景缩放

> 背景图片也是可以拉伸的。

![](CSS布局入门/17.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            width: 500px;
            height: 500px;
            border: 2px solid red;
            background: url(images/logo.png) no-repeat;
            /* background-size: 图片的宽度 图片的高度; */

            /* 1.如果只写一个参数，肯定是宽度，并且高度会等比例缩放 */
            /* background-size: 500px; */

            /* 2.里面的单位可以跟%，百分比是相对于父盒子来说的 */
            /* background-size: 50%; */

            /* 3.cover：高度和宽度等比例拉伸，要完全覆盖div盒子，可能有部分背景图片显示不全*/
            /* background-size: cover; */

            /* 4.contain：高度和宽度等比例拉伸，当宽度或者高度铺满div盒子就不再进行拉伸了*/
            /* 造成的问题：可能有部分空白区域 */
            background-size: contain;
        }
    </style>
</head>
<body>
    <div></div>
</body>
</html>
~~~

### 多倍图切图神器cutterman

![](CSS布局入门/18.png)

##  移动端开发选择

### 移动端主流方案

![](CSS布局入门/19.png)

### 单独移动端页面（主流）



![](CSS布局入门/20.png)

### 响应式兼容PC移动端

![](CSS布局入门/21.png)

### 总结

![](CSS布局入门/22.png)

## 移动端技术解决方案

### 移动端浏览器

![](CSS布局入门/23.png)

###  CSS初始化 normalize.css

![](CSS布局入门/24.png)

### CSS3 盒子模型 box-sizing

![](CSS布局入门/25.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div:nth-child(1){
            /* 传统盒子模型=width+border+padding */
            width: 200px;
            height: 200px;
            background-color: pink;
            padding: 10px;
            box-sizing: content-box;
            /* 这个就是默认的传统的盒子模型 */
        }
        div:nth-child(2){
            width: 200px;
            height: 200px;
            background-color: purple;
            padding: 10px;
            border: 10px solid blue;
            /* 有了这句话就让盒子变成了CSS3盒子模型 */
            /* 这个盒子模型的宽度已经包含了border和padding */
            /* 从此以后，padding和border就不会再撑大盒子了 */
            /* 不过盒子模型是CSS3才有的，有兼容性问题 */
            box-sizing: border-box;

        }
    </style>
</head>
<body>
    <div></div>
    <div></div>
</body>
</html>
~~~

### 特殊样式

![](CSS布局入门/26.png)

## 移动端常见布局

### 移动端技术选型

![](CSS布局入门/27.png)

### 流式布局（百分比布局）

> 流式布局主要是设置元素的宽度为**百分比**，高度基本上不做限制，用px。

![](CSS布局入门/28.png)

~~~html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
            *{
                margin: 0;
                padding: 0;
            }
            section{
                width: 100%;
                max-width: 980px;
                min-width: 320px;
                margin: 0 auto;
            }

            section div{
                width: 50%;
                /* 流式布局主要看的是宽度 */
                height: 400px;
                float: left;
            }

            section div:nth-child(1){
                background-color: pink;
            }

            section div:nth-child(2){
                background-color: purple;
            }
        </style>
	</head>
	<body>
		<section>
			<div></div>
			<div></div>
		</section>
	</body>
</html>
~~~

## 流式布局实战：京东移动端首页

![](CSS布局入门/29.png)

### 技术选型

![](CSS布局入门/30.png)

### 搭建相关文件夹结构

![](CSS布局入门/31.png)

### 设置视口标签以及引入初始化样式

![](CSS布局入门/32.png)

### 常用初始化样式

![](CSS布局入门/33.png)

### 二倍精灵图做法

![](CSS布局入门/34.png)

### 图片格式

![](CSS布局入门/35.png)

### 项目总结

[CSS 中使用 text align: center 让图片居中](https://chinese.freecodecamp.org/news/how-to-center-an-image-using-text-align/)

![](CSS布局入门/36.png)

![](CSS布局入门/37.png)

# rem布局

## 思考

![](CSS布局入门/38.png)

## 目录

![](CSS布局入门/39.png)

## rem基础

### rem 单位

![](CSS布局入门/40.png)

## 媒体查询

> 一定要注意：and前后**都要**有空格！！！否则不会有效果的！！！！

### 什么是媒体查询

![](CSS布局入门/41.png)

### 语法规范

![](CSS布局入门/42.png)

#### mediatype 查询类型

![](CSS布局入门/43.png)

#### 关键字

![](CSS布局入门/44.png)

#### 媒体特性

![](CSS布局入门/45.png)

### 案例：根据页面宽度改变背景变色

![](CSS布局入门/46.png)

![](CSS布局入门/47.png)

### 媒体查询从小到大优势代码分析

![](CSS布局入门/48.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 1.媒体查询一般按照从大到小或者从小到大的顺序来书写 */
        /* 2.小于540px时，页面的背景颜色变为蓝色 */
        @media screen and (max-width:539px){
            body{
                background-color: blue;
            }
        }

        /* 3.540px-970px之间，页面的背景颜色变为黄色 */
        /* 写法1 */
        /* @media screen and (min-width:540px) and (max-width:969px){
            body{
                background-color: yellow;
            }
        } */

        /* 写法2：利用了CSS的层叠性 */
        /* @media screen and(max-width:969px) */
        @media screen and(min-width:540px){
            body{
                background-color: yellow;
            }
        }

        /*4. 大于等于970px，页面的背景颜色为红色 */
        @media screen and (min-width:970px){
            body{
                background-color: red;
            }
        }

        /* 5.screen还有and必须带上，是不能省略的 */
        /* 6.我们的数字后面必须要跟上单位，px是不能省略的！！！ */
    </style>
</head>
<body>
    
</body>
</html>
~~~



### 媒体查询+rem实现元素动态大小变化

![](CSS布局入门/49.png)

### 案例：媒体查询+rem实现元素变化

![](CSS布局入门/50.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* html{
            font-size: 100px;
            我们不要写死，要在不同的屏幕里面有不同的大小变化
        } */

        *{
            margin: 0;
            padding: 0;
        }

        /* 从小到大的顺序来写 */
       @media screen and (min-width: 320px){
           /* 我们屏幕的最小尺寸就是320px,所以不用给考虑320px以下的了 */
           html{
               font-size: 50px;
           }
       }

       @media screen and (min-width: 640px){
           /* 我们屏幕的最小尺寸就是320px,所以不用给考虑320px以下的了 */
           html{
               font-size: 100px;
           }
       }
        .top{
            /* 宽度不用给，是没有关系的 */
            height: 1rem;
            font-size: .5rem;
            background-color: green;
            color: #fff;
            text-align: center;
            line-height: 1rem;
        }
    </style>
</head>

<body>
    <div class="top">购物车</div>
    <!-- <div class="top">购物车</div> -->
</body>
</html>
~~~

### 引入资源（理解）

> 判断屏幕尺寸，调用不同的CSS文件即可。

![](CSS布局入门/51.png)

**index.html**

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 当我们屏幕大于640px以上时，我们让div一行显示2个 */
        /* 当我们屏幕小于640px时，我们让div一行显示一个 */
        /* 一个建议：我们媒体查询最好的方法是从小到大 */
        /* 引入资源就是针对不同的屏幕尺寸，调用不同的CSS文件 */
    </style>
    <link rel="stylesheet" href="style320.css" media="screen and (min-width: 320px)">
    <link rel="stylesheet" href="style640.css" media="screen and (min-width: 640px)">
</head>
<body>
    <div>1</div>
    <div>2</div>
</body>
</html>
~~~

**style320.css**

~~~css
div{
    width: 100%;
    height: 100px;
}

div:nth-child(1){
    background-color: pink;
}

div:nth-child(2){
    background-color: yellow;
}
~~~

**style640.css**

~~~css
div{
    float: left;
    width: 50%;
    height: 100px;
}

div:nth-child(1){
    background-color: pink;
}

div:nth-child(2){
    background-color: yellow;
}
~~~

## Less基础

### 维护CSS的弊端

![](CSS布局入门/52.png)

###  Less介绍

![](CSS布局入门/53.png)

### Less安装

> 注意：如果使用VScode无需安装less

![](CSS布局入门/54.png)

### Less使用

![](CSS布局入门/55.png)

### Less变量

![](CSS布局入门/56.png)

![](CSS布局入门/57.png)

### Less编译

![](CSS布局入门/58.png)

![](CSS布局入门/59.png)

### Less嵌套

![](CSS布局入门/60.png)

![](CSS布局入门/61.png)

###  Less 运算

> 现在新版Less已经不支持直接使用除法了，推荐加小括号的方式就没有问题了。

[为什么在使用LESS 除法计算时会出问题](https://www.cnblogs.com/xiaoqiang001/p/14354616.html)

![](CSS布局入门/62.png)

![](CSS布局入门/63.png)

## rem适配方案

### 思考

![](CSS布局入门/64.png)

### 答案

![](CSS布局入门/65.png)

### rem实际开发适配方案

![](CSS布局入门/66.png)

### rem适配方案技术使用(市场主流)

![](CSS布局入门/67.png)

### rem实际开发适配方案1

#### 设计稿场常见尺寸宽度

![](CSS布局入门/68.png)

#### 动态设置html标签font-size 大小

![](CSS布局入门/69.png)

#### 元素大小取值方法

![](CSS布局入门/70.png)

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @media screen and (min-width: 320px){
            /* 注意：and前后都要有空格！！！不然效果不生效！！！ */
            html{
                font-size: 21.33px;
            }
        }

        @media screen and (min-width: 750px){
            /* 注意：and前后都要有空格！！！不然效果不生效！！！ */
            html{
                font-size: 50px;
            }
        }

        div{
            width: 2rem;
            height: 2rem;
            background-color: pink;
        }
        /* 1.首先我们选一套标准屏幕尺寸，以750为准 */
        /* 2.1我们用标准屏幕尺寸除以我们划分的份数，就得到了html里面的文字大小*/
        /* 2.2但是我们知道不同屏幕下得到的文字大小是不一样的 */
        /* 3.页面元素的rem值 = 页面元素在750像素下的px值 / html里面的文字大小 */
    </style>
</head>
<body>
    <div></div>
</body>
</html>
~~~

## rem布局实战：苏宁首页

![](CSS布局入门/71.png)

### 方案1：rem+less+媒体查询

![](CSS布局入门/72.png)

#### 搭建相关文件夹结构

![](CSS布局入门/73.png)

####  设置视口标签以及引入初始化样式

![](CSS布局入门/74.png)

#### 设置公共common.less文件

![](CSS布局入门/75.png)

#### 新建index.less文件

![](CSS布局入门/76.png)

#### body样式

![](CSS布局入门/77.png)

### 方案2：rem+flexible.js

![](CSS布局入门/78.png)

#### flexible.js

![](CSS布局入门/79.png)

#### 技术选型

![](CSS布局入门/80.png)

#### 搭建相关文件夹结构

![](CSS布局入门/81.png)

#### 设置视口标签以及引入初始化样式还有js文件

![](CSS布局入门/82.png)

####  body样式

![](CSS布局入门/83.png)

#### px转换rem插件:cssrem

![](CSS布局入门/84.png)

![](CSS布局入门/85.png)

![](CSS布局入门/86.png)

![](CSS布局入门/87.png)









