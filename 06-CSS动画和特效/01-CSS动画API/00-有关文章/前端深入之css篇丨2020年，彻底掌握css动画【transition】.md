# 前端深入之css篇丨2020年，彻底掌握css动画【transition】

## 写在前面

已经2020年了，不知道小伙伴们今年学习了css3动画了吗？

说起来css动画是一个很尬的事，一方面因为公司用css动画比较少，另一方面大部分开发者习惯了用JavaScript来做动画，所以就导致了许多程序员比较排斥来学习css动画（至少我是），但是一个不懂css动画的前端工程师不能称之为掌握css3，其实当你真正学习css动画之后，你会被它的魅力所吸引的，它可以减少代码量、提高性能。

这是一个系列文章，小伙伴可以点击链接进行学习~

[前端深入之css篇丨2020年，彻底掌握css动画【transition】](https://juejin.cn/post/6844903967491784712)

[前端深入之css篇丨2020年，彻底掌握css动画【animation】](https://juejin.cn/post/6844903974408028167)

[前端深入之css篇丨2020年，彻底掌握css动画【transform】](https://juejin.cn/post/6844903983639707661)

[前端深入之css篇丨初探【transform】，手把手带你实现1024程序员节动画](https://juejin.cn/post/6844903977255960590)

话不多说，马上和我一起去学习今天的主角**transition**吧！

## transition 语法

| 值                           | 描述                                       |
| ---------------------------- | ------------------------------------------ |
| *transition-duration*        | transition效果需要指定多少秒或毫秒才能完成 |
| *transition-property*        | 指定CSS属性的name，transition效果          |
| *transition-timing-function* | 指定transition效果的转速曲线               |
| *transition-delay*           | 定义transition效果开始的时候               |

> transition翻译成中文是过渡的意思，顾名思义，它就是专门做过渡动画的，比如一些放大缩小，隐藏显示等，下面我们一起来学习一下他的语法。

### transition-duration：transition效果需要指定多少秒或毫秒才能完成

```
div{
    width:100px;
    height:100px;
    border-radius: 50%;
    background:#f40;
    transition-duration:1s;
}
div:hover{
    height:150px;	
    width:150px;
}
复制代码
```

这是transition最基本的用法，`transition-duration`为动画执行所需的时间，这段代码的意思就是鼠标移入，div的宽高就会都变成`150px`

### transition-property：指定CSS属性的name，transition效果

```
div{
    width:100px;
    height:100px;
    border-radius: 50%;
    background:#f40;
    transition-duration:1s;
    transition-property:width;
}
div:hover{
    height:150px;	
    width:150px;
}
复制代码
```

这里`transition-property`值仅为width，意思是只给`width`加动画，所以会呈现这种效果，同样如果换成了`height`，那么将会是变高才有动画。

我们发现，第一个案例我们并没有写`transition-property`，但是案例中`width`和`height`属性是同时变化的，那是因为`transition-property`的默认值为`all`，只要不写这个属性，那就是全部变化都会执行动画。

### transition-timing-function：指定transition效果的转速曲线

```
div{
    width:100px;
    height:50px;
    background:#f40;
    transition-duration:2s;
    transition-timing-function:ease-in-out;
}
div:hover{
    width:250px;
}
复制代码
```

`transition-timing-function`的作用就是改变动画在每一帧的快慢。这里`transition-timing-function`仅展示值为`ease-in-out`的动画效果，可以理解为`慢-快-慢`。其他的不做展示，可以参考下表进行理解。

| 值                            | 描述                                                         | 速度     |
| ----------------------------- | ------------------------------------------------------------ | -------- |
| linear（默认属性）            | 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。 | 匀速     |
| ease                          | 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。 | 快-慢-慢 |
| ease-in                       | 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。  | 快-快    |
| ease-out                      | 规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。  | 慢-慢    |
| ease-in-out                   | 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。 | 慢-快-慢 |
| cubic-bezier(*n*,*n*,*n*,*n*) | 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。 | 自定义   |

### transition-delay：定义transition效果开始的时候

```
div{
    width:100px;
    height:100px;
    border-radius: 50%;
    background:#f40;
    transition-duration:1s;
    transition-delay:1s;
}
div:hover{
    height:150px;	
    width:150px;
}
复制代码
```

这里`transition-delay`的值为`1s`，意思是动画将在延迟一秒后执行。

------

今天我们一共学习了四个属性值，他们都是属于`transition`属性的，这里给出属性值在`transition`中的简写方式。

> transition: property duration timing-function delay;

```
div{
    transition:all 1s ease-in-out 2s;
}
复制代码
```

那么这里的意思就是所有属性都加入持续一秒，缓进缓出的动画，并在两秒钟后开始执行。

## 结论

经过以上的学习，相信你已经初步了解了`transition`的用法，`transition`用来过渡再好不过了，但是仅靠它做不了一些炫酷的动画，我将在接下来的文章继续为你讲解`animation（动画）`、`translate（移动）`以及`transform（变形）`，跟进我的脚步吧，跟我一起在2020前掌握css动画！