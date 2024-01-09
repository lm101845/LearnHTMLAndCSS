/**
 * @Author liming
 * @Date 2022/12/9 15:42
 **/
// gsap.to('.box',{duration:2,x:300})
//to:0->300

// gsap.from('.box',{duration:2,x:300})
//from:300->0

// gsap.set('.box',{y:500})

// gsap.from('.box',{duration:2,x:300,repeat:3})

// gsap.to('.box',{duration:3,x:300,rotation:360,opacity:0.5})


gsap.to('.box',{
    duration:2,
    x:300,
    rotation:360,
    border:'10px solid purple',
    borderRadius:'50%'
})

let obj = { myNum: 10, myColor: "red" };
gsap.to(obj, {
    duration:2,
    myNum: 200,
    myColor: "blue",
    onUpdate: () => console.log(obj.myNum, obj.myColor)
});
